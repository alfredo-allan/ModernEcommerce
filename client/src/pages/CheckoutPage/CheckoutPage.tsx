import { useEffect, useState, useCallback } from "react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useLocation } from "wouter";
import { getFrete, criarPagamento, criarOrdem } from "./api";
import { ResponseModal } from "@/components/ResponseModal";
import AddressForm from "@/components/AddressForm";
import { useTheme } from "@/context/ThemeContext";

type FreteOption = {
    price: string; // pode ser number dependendo da API
    name: string;
    delivery_time: number;
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

    const [deliveryCost, setDeliveryCost] = useState<number | null>(null);
    const [selectedFrete, setSelectedFrete] = useState<null | {
        price: number;
        name: string;
        deliveryTime: number;
    }>(null);

    const [isLoadingFrete, setIsLoadingFrete] = useState(false);
    const [isLoadingCheckout, setIsLoadingCheckout] = useState(false);
    const [modalStatus, setModalStatus] = useState<"success" | "error" | null>(null);
    const [modalMessage, setModalMessage] = useState("");
    const [showModal, setShowModal] = useState(false);

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

            if (res.success) {
                const valid = res.data.filter((opt) => opt.price && !opt.error);

                if (valid.length > 0) {
                    const menor = valid.reduce((a: FreteOption, b: FreteOption) =>
                        parseFloat(a.price) < parseFloat(b.price) ? a : b
                    );
                    setDeliveryCost(parseFloat(menor.price));
                    setSelectedFrete({
                        price: parseFloat(menor.price),
                        name: menor.name,
                        deliveryTime: menor.delivery_time,
                    });
                } else {
                    setDeliveryCost(null);
                }
            } else {
                console.error("Erro na resposta do frete:", res.error);
                setDeliveryCost(null);
            }
        } catch (error) {
            console.error("Erro ao calcular frete:", error);
            setDeliveryCost(null);
        } finally {
            setIsLoadingFrete(false);
        }
    }, [items]);

    useEffect(() => {
        const cepLimpo = editableAddress.cep.replace(/\D/g, "");
        if (cepLimpo.length === 8) fetchFrete(cepLimpo);
    }, [editableAddress.cep, fetchFrete]);

    const totalBag = items.reduce((acc, item) => acc + (item.price || 0) * item.quantity, 0);
    const totalFinal = deliveryCost !== null ? totalBag + deliveryCost : totalBag;

    const handleCheckout = async () => {
        if (!loggedInUser?.id) return;
        setIsLoadingCheckout(true);

        const order_id = `PED-${Date.now()}`;

        try {
            const pagamento = await criarPagamento({
                user_id: loggedInUser.id,
                amount: totalFinal,
                frete: deliveryCost || 0,
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
                    frete: deliveryCost || 0,
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
    const btnPrimary = theme === "dark"
        ? "bg-indigo-600 text-white hover:bg-indigo-700"
        : "bg-indigo-500 text-white hover:bg-indigo-600";
    function formatCep(value: string) {
        // Remove tudo que não for número
        const numbers = value.replace(/\D/g, "");

        // Se tiver mais que 8, mostra tudo menos o último, para manter zero a mais
        if (numbers.length <= 5) return numbers;
        if (numbers.length <= 8) return numbers.replace(/^(\d{5})(\d{0,3})/, "$1-$2");
        if (numbers.length > 8) return numbers.slice(0, 5) + "-" + numbers.slice(5, 8) + numbers.slice(8);
    }


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
                                        <p className="font-semibold">{item.name}</p>
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
                    <p className="text-sm">
                        Frete: {isLoadingFrete
                            ? "Calculando..."
                            : deliveryCost !== null
                                ? `R$ ${deliveryCost.toFixed(2)} (${selectedFrete?.name})`
                                : "Frete não calculado"}
                    </p>
                    <hr />
                    <p className="font-bold text-lg">Total: R$ {totalFinal.toFixed(2)}</p>
                    <button
                        onClick={handleCheckout}
                        disabled={isLoadingCheckout || items.length === 0}
                        className={`${btnPrimary} w-full py-2 rounded-md transition-colors`}
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
