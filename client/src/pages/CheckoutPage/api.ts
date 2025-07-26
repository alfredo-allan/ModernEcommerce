import axios from "axios";

// URLs da API
const API_MERCADO_PAGO = "https://vps60230.publiccloud.com.br";
const API_MELHOR_ENVIO = "https://vps60230.publiccloud.com.br"; // Flask backend

// Interfaces
export interface ProdutoFrete {
    name: string;
    quantity: number;
    unitary_value: number;
    height?: number;
    width?: number;
    length?: number;
    weight: number;
}

export interface CalcularFretePayload {
    cep: string;
    produtos: ProdutoFrete[];
}

export interface Endereco {
    name: string;
    phone: string;
    email: string;
    document: string;
    company?: string;
    address: string;
    number: string;
    complement?: string;
    district: string;
    city: string;
    state: string;
    country: string;
    postal_code: string;
}

// Dimensões padrão (em cm)
const DEFAULT_HEIGHT = 2;
const DEFAULT_WIDTH = 15;
const DEFAULT_LENGTH = 20;

// Aplica dimensões padrão onde necessário
function aplicarDimensoesPadrao(produtos: ProdutoFrete[]): ProdutoFrete[] {
    return produtos.map((produto) => ({
        ...produto,
        height: produto.height ?? DEFAULT_HEIGHT,
        width: produto.width ?? DEFAULT_WIDTH,
        length: produto.length ?? DEFAULT_LENGTH,
    }));
}

// 🔁 Criação de pagamento Mercado Pago
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

// 🔁 Criação da ordem no banco
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
        const res = await axios.post(`${API_MELHOR_ENVIO}/orders/`, payload, {
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

// ✅ Calcular opções de frete
export const getFrete = async (
    payload: CalcularFretePayload
): Promise<{ success: true; data: any[] } | { success: false; error: string; details?: any }> => {
    try {
        const payloadComDimensoes = {
            cep_destino: payload.cep,
            produtos: aplicarDimensoesPadrao(payload.produtos),
        };

        const res = await axios.post(`${API_MELHOR_ENVIO}/shipping/calculate`, payloadComDimensoes, {
            withCredentials: true,
        });

        const fretes = res.data.fretes;

        if (!Array.isArray(fretes) || fretes.length === 0) {
            return { success: false, error: "Nenhum serviço de frete retornado" };
        }

        const validos = fretes.filter((f: any) => f.price && !f.error);
        if (validos.length === 0) {
            return { success: false, error: "Nenhum frete válido encontrado" };
        }

        return { success: true, data: validos };
    } catch (error: any) {
        console.error("Erro ao calcular frete:", error);
        return {
            success: false,
            error: error.response?.data?.error || "Erro ao calcular frete",
            details: error.response?.data,
        };
    }
};

// ✅ Gera a etiqueta (etapas: cart -> checkout -> generate)
export const gerarEtiqueta = async (objetoFrete: {
    frete_id: string;
    endereco_origem: Endereco;
    endereco_destino: Endereco;
    volumes: any[];
}) => {
    try {
        const cartRes = await axios.post(`${API_MELHOR_ENVIO}/shipping/cart`, objetoFrete);
        const shipmentId = cartRes.data[0]?.id;

        if (!shipmentId) throw new Error("ID do frete não retornado");

        await axios.post(`${API_MELHOR_ENVIO}/shipping/checkout`, { shipment_ids: [shipmentId] });
        const generateRes = await axios.post(`${API_MELHOR_ENVIO}/shipping/generate`, { shipment_ids: [shipmentId] });

        const etiqueta = generateRes.data[0];

        return {
            success: true,
            etiqueta,
            link: etiqueta?.label_url,
        };
    } catch (error: any) {
        console.error("Erro ao gerar etiqueta:", error);
        return {
            success: false,
            error: error.message || "Erro ao gerar etiqueta",
        };
    }
};
