import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '@/context/AuthContext';
import {
    registerClient,
    loginClient,
    buscarEnderecoPorCEP,
} from './api';
import { formatCPF, formatarCEP, limparCEP } from '@/utils/formatters';
import ResponseModal from '../../components/ResponseModal'; // ajuste o caminho conforme seu projeto

type TipoPessoa = 'fisica' | 'juridica';

export const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [loading, setLoading] = useState(false);
    const [, navigate] = useLocation();
    const { login } = useAuth();

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: '',
        telefone: '',
        tipo_pessoa: 'fisica' as TipoPessoa,
        cpf: '',
        cnpj: '',
        razao_social: '',
        endereco: {
            cep: '',
            rua: '',
            numero: '',
            bairro: '',
            cidade: '',
        },
    });
    const [modalOpen, setModalOpen] = useState(false);
    const [modalType, setModalType] = useState<'success' | 'error'>('success');
    const [modalMessage, setModalMessage] = useState('');



    // CEP → ViaCEP
    useEffect(() => {
        const fetchEndereco = async () => {
            if (formData.endereco.cep.length === 8) {
                const data = await buscarEnderecoPorCEP(formData.endereco.cep);
                if (!data?.erro) {
                    setFormData((prev) => ({
                        ...prev,
                        endereco: {
                            ...prev.endereco,
                            rua: data.logradouro,
                            bairro: data.bairro,
                            cidade: data.localidade,
                        },
                    }));
                }
            }
        };
        fetchEndereco();
    }, [formData.endereco.cep]);

    // Formatação automática
    const formatNome = (value: string) =>
        value.replace(/\b\w/g, (l) => l.toUpperCase());

    const formatTelefone = (value: string) =>
        value.replace(/\D/g, '').replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');

    const formatCNPJ = (value: string) =>
        value
            .replace(/\D/g, '')
            .replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2}).*/, '$1.$2.$3/$4-$5');

    // Handle submit
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        if (isLogin) {
            const { email, senha } = formData;
            const res = await loginClient({ email, senha });
            if (res.success) {
                login(res.data);
                navigate('/');
            } else {
                setModalType('error');
                setModalMessage(res.error || 'Erro no login');
                setModalOpen(true);
            }
        } else {
            const payload = { ...formData };
            const res = await registerClient(payload);
            if (res.success) {
                setModalType('success');
                setModalMessage(res.data.message || 'Cadastro realizado com sucesso!');
                setModalOpen(true);
                setIsLogin(true);
            } else {
                setModalType('error');
                setModalMessage(res.error || 'Erro no cadastro');
                setModalOpen(true);
            }
        }

        setLoading(false);
    };

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };
    const toggleMode = () => {
        setIsLogin((prev) => !prev);
        setModalOpen(false);
        setModalMessage('');
        setModalType('success');
    };

    return (
        <div className="font-sans min-h-screen flex items-center justify-center bg-background px-4">
            <div className="w-full max-w-lg md:max-w-2xl bg-card text-card-foreground p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    {isLogin ? 'Login' : 'Cadastro'}
                </h2>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    {!isLogin && (
                        <>
                            <div>
                                <label className="block text-sm font-medium mb-1">Nome</label>
                                <input
                                    type="text"
                                    value={formData.nome}
                                    onChange={(e) =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            nome: formatNome(e.target.value),
                                        }))
                                    }
                                    required
                                    className="input"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Telefone</label>
                                <input
                                    type="text"
                                    value={formData.telefone}
                                    onChange={(e) =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            telefone: formatTelefone(e.target.value),
                                        }))
                                    }
                                    className="input"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Tipo de Pessoa</label>
                                <select
                                    value={formData.tipo_pessoa}
                                    onChange={(e) =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            tipo_pessoa: e.target.value as TipoPessoa,
                                        }))
                                    }
                                    className="input"
                                >
                                    <option value="fisica">Física</option>
                                    <option value="juridica">Jurídica</option>
                                </select>
                            </div>

                            {formData.tipo_pessoa === 'fisica' && (
                                <div>
                                    <label className="block text-sm font-medium mb-1">CPF</label>
                                    <input
                                        type="text"
                                        value={formData.cpf}
                                        onChange={(e) =>
                                            setFormData((prev) => ({
                                                ...prev,
                                                cpf: formatCPF(e.target.value),
                                            }))
                                        }
                                        className="input"
                                        maxLength={14}
                                        placeholder="000.000.000-00"
                                    />
                                </div>

                            )}

                            {formData.tipo_pessoa === 'juridica' && (
                                <>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">CNPJ</label>
                                        <input
                                            type="text"
                                            value={formData.cnpj}
                                            onChange={(e) =>
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    cnpj: formatCNPJ(e.target.value),
                                                }))
                                            }
                                            className="input"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Razão Social
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.razao_social}
                                            onChange={(e) =>
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    razao_social: e.target.value,
                                                }))
                                            }
                                            className="input"
                                        />
                                    </div>
                                </>
                            )}

                            <div>
                                <label className="block text-sm font-medium mb-1">CEP</label>
                                <input
                                    type="text"
                                    value={formatarCEP(formData.endereco.cep)}
                                    onChange={(e) => {
                                        const rawCep = limparCEP(e.target.value);
                                        if (rawCep.length <= 8) {
                                            setFormData((prev) => ({
                                                ...prev,
                                                endereco: { ...prev.endereco, cep: rawCep },
                                            }));
                                        }
                                    }}
                                    className="input"
                                    maxLength={9} // 00000-000
                                />
                            </div>


                            <div>
                                <label className="block text-sm font-medium mb-1">Rua</label>
                                <input
                                    type="text"
                                    value={formData.endereco.rua}
                                    readOnly
                                    className="input"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Número</label>
                                <input
                                    type="text"
                                    value={formData.endereco.numero}
                                    onChange={(e) =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            endereco: {
                                                ...prev.endereco,
                                                numero: e.target.value,
                                            },
                                        }))
                                    }
                                    className="input"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Bairro</label>
                                <input
                                    type="text"
                                    value={formData.endereco.bairro}
                                    readOnly
                                    className="input"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Cidade</label>
                                <input
                                    type="text"
                                    value={formData.endereco.cidade}
                                    readOnly
                                    className="input"
                                />
                            </div>
                        </>
                    )}

                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData((prev) => ({ ...prev, email: e.target.value }))
                            }
                            required
                            className="input"
                        />
                    </div>

                    <div className="relative">
                        <label className="block text-sm font-medium mb-1">Senha</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={formData.senha}
                            onChange={(e) =>
                                setFormData((prev) => ({ ...prev, senha: e.target.value }))
                            }
                            required
                            className="input pr-10"
                            placeholder="********"
                        />
                        <button
                            type="button"
                            onClick={toggleShowPassword}
                            className="absolute right-2 top-[38px] text-gray-500 hover:text-gray-700"
                        >
                            {showPassword ? '🙈' : '👁️'}
                        </button>
                    </div>


                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 transition-colors"
                    >
                        {loading ? 'Aguarde...' : isLogin ? 'Entrar' : 'Cadastrar'}
                    </button>
                </form>

                <ResponseModal
                    isOpen={modalOpen}
                    type={modalType}
                    message={modalMessage}
                    onClose={() => setModalOpen(false)}
                />


                <p className="mt-6 text-center text-sm text-muted-foreground">
                    {isLogin ? 'Não tem uma conta?' : 'Já tem uma conta?'}{' '}
                    <button
                        onClick={toggleMode}
                        className="text-primary hover:underline"
                    >
                        {isLogin ? 'Cadastre-se' : 'Faça login'}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default AuthPage;
