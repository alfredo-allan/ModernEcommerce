// client/src/pages/CheckoutPage/api.ts
import axios from "axios";

const API_BASE = "https://allan1992.pythonanywhere.com/"; // ajuste conforme ambiente

export interface ProdutoFrete {
    name: string;
    quantity: number;
    unitary_value: number;
    height: number;
    width: number;
    length: number;
    weight: number;
}

export interface CalcularFretePayload {
    cep: string;
    produtos: ProdutoFrete[];
}

export const criarPagamento = async (payload: {
    user_id: number;
    amount: number;
    frete: number;
    order_id: string;
    produtos: {
        name: string;
        quantity: number;
        unitary_value: number;
    }[];
}) => {
    try {
        const res = await axios.post(`${API_BASE}/payment/create`, payload, {
            withCredentials: true,
        });
        return { success: true, data: res.data };
    } catch (error: any) {
        console.error("Erro ao criar pagamento:", error);
        return {
            success: false,
            message: error?.response?.data?.message || "Erro desconhecido",
        };
    }
};

export const getFrete = async (
    payload: CalcularFretePayload
): Promise<
    | {
        success: true;
        data: any[]; // Mantém array completo para lógica de menor preço na view
    }
    | { success: false; error: string; details?: any }
> => {
    try {
        const response = await axios.post(`${API_BASE}/shipping`, payload);
        const servicos = response.data;

        if (Array.isArray(servicos) && servicos.length > 0) {
            const validOptions = servicos.filter(
                (item: any) => item.price && !item.error
            );

            if (validOptions.length === 0) {
                return { success: false, error: "Nenhum frete válido encontrado" };
            }

            return {
                success: true,
                data: validOptions,
            };
        }

        return { success: false, error: "Nenhum serviço de frete retornado" };
    } catch (error: any) {
        console.error("Erro ao calcular frete:", error);
        return {
            success: false,
            error: error.response?.data?.error || "Erro ao calcular frete",
            details: error.response?.data?.details,
        };
    }
};
