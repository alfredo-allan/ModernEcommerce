import React, { useEffect, useState, useCallback } from "react";

interface Address {
    cep: string;
    rua: string;
    bairro: string;
    cidade: string;
    estado: string;
    numero: string;
}

interface AddressFormProps {
    initialAddress?: Partial<Address>;
    onAddressChange: (address: Address) => void;
    theme?: "light" | "dark"; // opcional para aplicar classes temáticas
}

const AddressForm: React.FC<AddressFormProps> = ({
    initialAddress = {},
    onAddressChange,
    theme = "light",
}) => {
    const [address, setAddress] = useState<Address>({
        cep: initialAddress.cep || "",
        rua: initialAddress.rua || "",
        bairro: initialAddress.bairro || "",
        cidade: initialAddress.cidade || "",
        estado: initialAddress.estado || "",
        numero: initialAddress.numero || "",
    });

    const [loadingCep, setLoadingCep] = useState(false);

    // Função que formata o CEP para exibição: 04253000 -> 04253-000
    const formatCep = (value: string) => {
        const numbers = value.replace(/\D/g, "");
        if (numbers.length <= 5) return numbers;
        if (numbers.length <= 8) return numbers.replace(/^(\d{5})(\d{0,3})/, "$1-$2");
        return value;
    };

    // Atualiza o estado local com CEP formatado no input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === "cep") {
            // Atualiza o estado local com CEP formatado
            const formattedCep = formatCep(value);
            setAddress((prev) => ({ ...prev, cep: formattedCep }));
        } else {
            setAddress((prev) => ({ ...prev, [name]: value }));
        }
    };

    // Busca endereço no ViaCEP (com cep limpo)
    const fetchAddressByCep = useCallback(() => {
        const cepLimpo = address.cep.replace(/\D/g, "");
        if (cepLimpo.length !== 8) return;

        setLoadingCep(true);
        fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
            .then((res) => res.json())
            .then((data) => {
                if (!data.erro) {
                    setAddress((prev) => ({
                        ...prev,
                        rua: data.logradouro || "",
                        bairro: data.bairro || "",
                        cidade: data.localidade || "",
                        estado: data.uf || "",
                    }));
                }
            })
            .catch(() => {
                // tratamento de erro opcional
            })
            .finally(() => setLoadingCep(false));
    }, [address.cep]);

    // Debounce para evitar múltiplas chamadas
    useEffect(() => {
        const timer = setTimeout(() => {
            fetchAddressByCep();
        }, 700);
        return () => clearTimeout(timer);
    }, [address.cep, fetchAddressByCep]);

    // Notifica o pai com endereço, enviando CEP limpo (sem hífen)
    useEffect(() => {
        onAddressChange({
            ...address,
            cep: address.cep.replace(/\D/g, ""), // **importante: limpa o CEP antes de enviar**
        });
    }, [address, onAddressChange]);

    // Classes de estilo (tema)
    const inputBaseClass =
        "border rounded px-3 py-2 focus:outline-none focus:ring-2 transition-colors w-full";
    const inputThemeClass =
        theme === "dark"
            ? "bg-gray-700 border-gray-600 focus:ring-indigo-400 text-gray-100 placeholder-gray-400"
            : "bg-gray-100 border-gray-300 focus:ring-indigo-600 text-gray-900 placeholder-gray-600";

    return (
        <section
            className={`p-6 rounded-xl shadow-md mb-8 ${theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
                }`}
        >
            <h2 className="text-xl font-semibold mb-4">Editar Endereço de Entrega</h2>
            <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <input
                    name="cep"
                    placeholder="CEP"
                    value={address.cep}
                    onChange={handleChange}
                    maxLength={9} // 8 números + hífen
                    required
                    className={`${inputBaseClass} ${inputThemeClass}`}
                    autoComplete="postal-code"
                />
                <input
                    name="rua"
                    placeholder="Rua"
                    value={address.rua}
                    onChange={handleChange}
                    required
                    className={`${inputBaseClass} ${inputThemeClass} sm:col-span-2`}
                    autoComplete="address-line1"
                />
                <input
                    name="numero"
                    placeholder="Número"
                    value={address.numero}
                    onChange={handleChange}
                    required
                    className={`${inputBaseClass} ${inputThemeClass}`}
                    autoComplete="address-line2"
                />
                <input
                    name="bairro"
                    placeholder="Bairro"
                    value={address.bairro}
                    onChange={handleChange}
                    required
                    className={`${inputBaseClass} ${inputThemeClass}`}
                    autoComplete="address-level2"
                />
                <input
                    name="cidade"
                    placeholder="Cidade"
                    value={address.cidade}
                    onChange={handleChange}
                    required
                    className={`${inputBaseClass} ${inputThemeClass}`}
                    autoComplete="address-level1"
                />
                <input
                    name="estado"
                    placeholder="Estado"
                    value={address.estado}
                    onChange={handleChange}
                    maxLength={2}
                    required
                    className={`${inputBaseClass} ${inputThemeClass} uppercase`}
                    autoComplete="address-level1"
                />
            </form>
            {loadingCep && (
                <p className="mt-2 text-sm italic text-indigo-500">Buscando endereço...</p>
            )}
        </section>
    );
};

export default AddressForm;
