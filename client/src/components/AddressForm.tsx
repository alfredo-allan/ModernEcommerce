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

    // Debounce para evitar múltiplas chamadas no CEP
    const debounce = (fn: () => void, delay: number) => {
        let timer: NodeJS.Timeout;
        return () => {
            clearTimeout(timer);
            timer = setTimeout(fn, delay);
        };
    };

    // Busca endereço no ViaCEP
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
                // Pode adicionar tratamento de erro aqui
            })
            .finally(() => setLoadingCep(false));
    }, [address.cep]);

    // Debounced fetch
    useEffect(() => {
        const debouncedFetch = debounce(fetchAddressByCep, 700);
        debouncedFetch();
    }, [address.cep, fetchAddressByCep]);

    // Sempre notifica o pai das mudanças do endereço
    useEffect(() => {
        onAddressChange(address);
    }, [address, onAddressChange]);

    // Atualiza o estado local no input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAddress((prev) => ({ ...prev, [name]: value }));
    };

    // Classes tema e responsividade
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
                    maxLength={9}
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
