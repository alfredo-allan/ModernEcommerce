// utils/formatters.ts

export const formatCPF = (value: string) =>
    value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
        .slice(0, 14); // 000.000.000-00

export const formatarCEP = (cep: string): string =>
    cep.replace(/\D/g, '').replace(/^(\d{5})(\d{3})$/, '$1-$2');

// Remove o traço para envio ao ViaCEP
export const limparCEP = (cep: string): string =>
    cep.replace(/\D/g, '');