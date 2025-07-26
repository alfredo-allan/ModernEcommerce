import { useEffect, useState, useCallback } from "react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useLocation } from "wouter";
import { getFrete, criarPagamento, criarOrdem } from "./api";
import { ResponseModal } from "@/components/ResponseModal";
import AddressForm from "@/components/AddressForm";
import { useTheme } from "@/context/ThemeContext";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type FreteOption = {
    id: string;
    price: string;
    name: string;
    delivery_time: number;
    company: {
        id: number;
        name: string;
        picture: string;
    };
    error?: string;
};

type FreteResponse =
    | { success: true; data: FreteOption[] }
    | { success: false; error: string; details?: any };

const CheckoutPage = () => {
    const { items, removeItem, updateQuantity } = useCart();
    const { loggedInUser, loadingUser } = useAuth();
    const { theme } = useTheme();
    const [, navigate] = useLocation();

    const sanitizeCep = (cep: string) => cep.replace(/\D/g, "");

    const [editableAddress, setEditableAddress] = useState({
        cep: "",
        rua: "",
        bairro: "",
        cidade: "",
        estado: "",
        numero: "",
    });

    const [freteOptions, setFreteOptions] = useState<FreteOption[]>([]);
    const [selectedFreteId, setSelectedFreteId] = useState<string | null>(null);
    const [selectedFrete, setSelectedFrete] = useState<FreteOption | null>(null);

    const [isLoadingFrete, setIsLoadingFrete] = useState(false);
    const [isLoadingCheckout, setIsLoadingCheckout] = useState(false);
    const [modalStatus, setModalStatus] = useState<"success" | "error" | null>(null);
    const [modalMessage, setModalMessage] = useState("");
    const [showModal, setShowModal] = useState(false);

    // Função para obter ícone da empresa
    const getCompanyIcon = (companyName: string) => {
        const name = companyName.toLowerCase();

        if (name.includes('correios') || name.includes('sedex') || name.includes('pac')) {
            return '📮';
        }
        if (name.includes('jadlog')) {
            return '📦';
        }
        if (name.includes('azul') || name.includes('azul cargo')) {
            return '✈️';
        }
        if (name.includes('loggi')) {
            return '🚚';
        }
        if (name.includes('mercado envios')) {
            return '🛒';
        }
        if (name.includes('via brasil')) {
            return '🇧🇷';
        }
        return '📋'; // ícone padrão
    };

    useEffect(() => {
        if (loadingUser) return;

        if (loggedInUser?.endereco) {
            setEditableAddress({
                cep: loggedInUser.endereco.cep || "",
                rua: loggedInUser.endereco.rua || "",
                bairro: loggedInUser.endereco.bairro || "",
                cidade: loggedInUser.endereco.cidade || "",
                estado: loggedInUser.endereco.estado || "",
                numero: "",
            });
        }
    }, [loggedInUser, loadingUser]);

    useEffect(() => {
        if (!loadingUser && !loggedInUser?.id) {
            setModalMessage("Você precisa estar logado para finalizar a compra.");
            setModalStatus("error");
            setShowModal(true);
        }
    }, [loggedInUser, loadingUser]);

    const fetchFrete = useCallback(async (cep: string) => {
        const cleanCep = sanitizeCep(cep);
        if (!cleanCep || items.length === 0) return;

        setIsLoadingFrete(true);
        setFreteOptions([]);
        setSelectedFreteId(null);
        setSelectedFrete(null);

        const payload = {
            cep: cleanCep,
            produtos: items.map((item) => ({
                name: item.name,
                quantity: item.quantity,
                unitary_value: item.price || 0,
                height: item.height ?? 10,
                width: item.width ?? 10,
                length: item.length ?? 10,
                weight: item.weight ?? 0.3,
            })),
        };

        try {
            const res: FreteResponse = await getFrete(payload);

            if (res.success && res.data) {
                const validOptions = res.data.filter((opt) => opt.price && !opt.error);
                setFreteOptions(validOptions);

                // Auto-seleciona a opção mais barata
                if (validOptions.length > 0) {
                    const cheapest = validOptions.reduce((a, b) =>
                        parseFloat(a.price) < parseFloat(b.price) ? a : b
                    );
                    setSelectedFreteId(cheapest.id);
                    setSelectedFrete(cheapest);
                }
            } else {
                res.success === false ? res.error : "Erro desconhecido"
                setFreteOptions([]);
            }
        } catch (error) {
            console.error("Erro ao calcular frete:", error);
            setFreteOptions([]);
        } finally {
            setIsLoadingFrete(false);
        }
    }, [items]);

    useEffect(() => {
        const cepLimpo = editableAddress.cep.replace(/\D/g, "");
        if (cepLimpo.length === 8) fetchFrete(cepLimpo);
    }, [editableAddress.cep, fetchFrete]);

    const handleFreteSelection = (freteId: string) => {
        const selected = freteOptions.find(opt => opt.id === freteId);
        if (selected) {
            setSelectedFreteId(freteId);
            setSelectedFrete(selected);
        }
    };

    const totalBag = items.reduce((acc, item) => acc + (item.price || 0) * item.quantity, 0);
    const deliveryCost = selectedFrete ? parseFloat(selectedFrete.price) : 0;
    const totalFinal = totalBag + deliveryCost;

    const handleCheckout = async () => {
        if (!loggedInUser?.id) return;
        setIsLoadingCheckout(true);

        const order_id = `PED-${Date.now()}`;

        try {
            const pagamento = await criarPagamento({
                user_id: loggedInUser.id,
                amount: totalFinal,
                frete: deliveryCost,
                order_id,
                produtos: items.map((item) => ({
                    name: item.name,
                    quantity: item.quantity,
                    unitary_value: item.price || 0,
                })),
            });

            if (pagamento.success && pagamento.data?.init_point) {
                await criarOrdem({
                    user_id: loggedInUser.id,
                    order_id,
                    mercado_pago_order_id: null,
                    mercado_pago_payment_id: null,
                    payment_type: "pix",
                    payment_status: "pending",
                    payment_status_detail: "awaiting_payment",
                    products: items.map((item) => ({
                        name: item.name,
                        quantity: item.quantity,
                        unitary_value: item.price || 0,
                    })),
                    frete: deliveryCost,
                    total: totalFinal,
                });

                window.location.href = pagamento.data.init_point;
            } else {
                setModalStatus("error");
                setModalMessage(pagamento.message || "Erro ao redirecionar para pagamento.");
                setShowModal(true);
            }
        } catch (err) {
            console.error("Erro ao criar pagamento:", err);
            setModalStatus("error");
            setModalMessage("Falha ao criar preferência de pagamento.");
            setShowModal(true);
        } finally {
            setIsLoadingCheckout(false);
        }
    };

    const bgMain = theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900";
    const bgCard = theme === "dark" ? "bg-gray-800" : "bg-white";

    return (
        <div className={`font-sans min-h-screen px-4 py-6 ${bgMain}`}>
            <h1 className="text-2xl font-bold mb-6">Finalização da Compra</h1>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4">
                    {items.length === 0 ? (
                        <p>Sua sacola está vazia.</p>
                    ) : (
                        items.map((item) => (
                            <div
                                key={`${item.id}-${item.size}`}
                                className={`flex items-center justify-between ${bgCard} p-4 rounded-xl shadow`}
                            >
                                <div className="flex gap-4 items-center">
                                    {item.image && (
                                        <img src={item.image} alt={item.name} className="w-16 h-16 rounded object-cover" />
                                    )}
                                    <div>
                                        <p className="font-semibold text-clientPink">{item.name}</p>
                                        <p className="text-sm">R$ {(item.price || 0).toFixed(2)}</p>
                                        <p className="text-xs text-muted-foreground">Tamanho: {item.size}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button onClick={() => updateQuantity(item.id, item.size, Math.max(item.quantity - 1, 1))} className="px-2 bg-muted rounded">-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)} className="px-2 bg-muted rounded">+</button>
                                    <button onClick={() => removeItem(item.id, item.size)} className="text-red-500 ml-4">Remover</button>
                                </div>
                            </div>
                        ))
                    )}

                    <AddressForm initialAddress={editableAddress} onAddressChange={setEditableAddress} theme={theme} />
                </div>

                <div className={`${bgCard} p-6 rounded-xl shadow space-y-4`}>
                    <h2 className="text-lg font-semibold">Resumo</h2>
                    <p className="text-sm">Produtos: R$ {totalBag.toFixed(2)}</p>

                    {/* Seção de Frete */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-medium">Opções de Frete:</h3>

                        {isLoadingFrete ? (
                            <div className="flex items-center justify-center py-4">
                                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#F1099E]"></div>
                                <span className="ml-2 text-sm">Calculando...</span>
                            </div>
                        ) : freteOptions.length > 0 ? (
                            <RadioGroup value={selectedFreteId || ""} onValueChange={handleFreteSelection}>
                                <div className="space-y-3 max-h-64 overflow-y-auto">
                                    {freteOptions.map((option) => (
                                        <div key={option.id} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                            <RadioGroupItem value={option.id} id={option.id} />
                                            <label htmlFor={option.id} className="flex-1 cursor-pointer">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-2">
                                                        <span className="text-lg">{getCompanyIcon(option.company?.name || option.name)}</span>
                                                        <div>
                                                            <p className="text-sm font-medium">{option.name}</p>
                                                            <p className="text-xs text-gray-500">
                                                                {option.delivery_time} dia{option.delivery_time !== 1 ? 's' : ''} úteis
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-sm font-semibold">R$ {parseFloat(option.price).toFixed(2)}</p>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </RadioGroup>
                        ) : (
                            <p className="text-sm text-gray-500">
                                {editableAddress.cep.replace(/\D/g, "").length === 8
                                    ? "Nenhuma opção de frete disponível"
                                    : "Informe o CEP para calcular o frete"}
                            </p>
                        )}
                    </div>

                    <hr />
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span>Subtotal:</span>
                            <span>R$ {totalBag.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span>Frete:</span>
                            <span>
                                {selectedFrete
                                    ? `R$ ${deliveryCost.toFixed(2)}`
                                    : "R$ 0,00"}
                            </span>
                        </div>
                        <div className="flex justify-between font-bold text-lg pt-2 border-t">
                            <span>Total:</span>
                            <span>R$ {totalFinal.toFixed(2)}</span>
                        </div>
                    </div>

                    <button
                        onClick={handleCheckout}
                        disabled={isLoadingCheckout || items.length === 0 || !selectedFrete}
                        className="w-full py-2 rounded-md transition-colors text-white 
                            bg-[#F1099E] hover:bg-[#C10786] 
                            disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoadingCheckout ? "Processando..." : "Concluir Compra"}
                    </button>
                </div>
            </div>

            <ResponseModal
                isOpen={showModal}
                type={modalStatus || "error"}
                message={modalMessage}
                onClose={() => setShowModal(false)}
            />
        </div>
    );
};

export default CheckoutPage;