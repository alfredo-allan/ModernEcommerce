import axios from "axios";

// ✅ APIs separadas
const API_MERCADO_PAGO = "https://vps60230.publiccloud.com.br";
const API_MELHOR_ENVIO = "https://vps60230.publiccloud.com.br"; // local para Melhor Envio

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
        const res = await axios.post(`${API_MERCADO_PAGO}/payment/create`, payload, {
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

export const criarOrdem = async (payload: {
    user_id: number;
    order_id: string;
    mercado_pago_order_id?: string | null;
    mercado_pago_payment_id?: string | null;
    payment_type?: string | null;
    payment_status?: string | null;
    payment_status_detail?: string | null;
    products: {
        name: string;
        quantity: number;
        unitary_value: number;
    }[];
    frete: number;
    total: number;
}) => {
    try {
        // ⚠️ Sanitize: converte `null` para `undefined`
        const sanitizedPayload = {
            ...payload,
            mercado_pago_order_id: payload.mercado_pago_order_id || undefined,
            mercado_pago_payment_id: payload.mercado_pago_payment_id || undefined,
            payment_type: payload.payment_type || undefined,
            payment_status: payload.payment_status || undefined,
            payment_status_detail: payload.payment_status_detail || undefined,
        };

        const res = await axios.post(`${API_MELHOR_ENVIO}/orders/`, sanitizedPayload, {
            withCredentials: true,
        });

        return { success: true, data: res.data };
    } catch (error: any) {
        console.error("Erro ao criar ordem:", error);
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
        data: any[];
    }
    | { success: false; error: string; details?: any }
> => {
    try {
        const response = await axios.post(`${API_MELHOR_ENVIO}/shipping`, payload, {
            withCredentials: true,
        });
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

export const gerarEtiqueta = async (objetoFrete: any) => {
    try {
        // 1. Adiciona ao carrinho
        const resCart = await axios.post(`${API_MELHOR_ENVIO}/shipping/cart`, objetoFrete);
        const shipmentId = resCart.data[0]?.id;
        if (!shipmentId) throw new Error("ID do frete não retornado");

        // 2. Paga etiqueta
        await axios.post(`${API_MELHOR_ENVIO}/shipping/checkout`, [shipmentId]);

        // 3. Gera etiqueta
        const resEtiqueta = await axios.post(`${API_MELHOR_ENVIO}/shipping/generate`, [shipmentId]);

        return {
            success: true,
            etiqueta: resEtiqueta.data[0],
            link: resEtiqueta.data[0]?.label_url,
        };
    } catch (error: any) {
        console.error("Erro no processo de gerar etiqueta:", error);
        return { success: false, error: error.message };
    }
};
