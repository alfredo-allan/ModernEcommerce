// client/src/pages/AuthPage/api.ts
import axios from 'axios';

export interface RegisterPayload {
    nome: string;
    email: string;
    senha: string;
    telefone?: string;
    tipo_pessoa: 'fisica' | 'juridica';
    cpf?: string;
    cnpj?: string;
    razao_social?: string;
    endereco: {
        cep: string;
        rua: string;
        numero: string;
        bairro: string;
        cidade: string;
    };
}

export interface LoginPayload {
    email: string;
    senha: string;
}

export const registerClient = async (data: RegisterPayload) => {
    try {
        // Higienização antes do envio
        const payload = {
            ...data,
            email: data.email.trim().toLowerCase(),
            cpf: data.cpf?.replace(/\D/g, ""),
            cnpj: data.cnpj?.replace(/\D/g, ""),
            nome: data.nome.trim(),
            razao_social: data.razao_social?.trim(),
        };

        const response = await axios.post('https://vps60230.publiccloud.com.br/clients', payload, { withCredentials: true });
        return { success: true, data: response.data };
    } catch (error: any) {
        return {
            success: false,
            error: error.response?.data?.error || 'Erro ao registrar cliente',
        };
    }
};


export const loginClient = async (data: LoginPayload) => {
    try {
        const response = await axios.post('https://vps60230.publiccloud.com.br/clients/login', data, { withCredentials: true });
        return { success: true, data: response.data };
    } catch (error: any) {
        return {
            success: false,
            error: error.response?.data?.error || 'Erro ao fazer login',
        };
    }
};

export const buscarEnderecoPorCEP = async (cep: string) => {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        return await response.json();
    } catch {
        return null;
    }
};
