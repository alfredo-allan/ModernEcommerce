import React, { createContext, useState, useEffect, useContext } from 'react';

export interface LoggedInUser {
    id: number;
    nome: string;
    email: string;
    tipoPessoa?: 'fisica' | 'juridica'; // <- ESSENCIAL
    endereco?: Endereco;
}

export interface Endereco {
    cep: string;
    rua?: string;
    bairro?: string;
    cidade?: string;
    estado?: string;
    // outros campos que usar
}
export interface AuthContextType {
    loggedInUser: LoggedInUser | null;
    login: (user: LoggedInUser) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState<LoggedInUser | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('loggedInUser');
        if (storedUser) {
            try {
                const user: LoggedInUser = JSON.parse(storedUser);
                setLoggedInUser(user);
            } catch (error) {
                console.error('Erro ao carregar usuário:', error);
                localStorage.removeItem('loggedInUser');
            }
        }
    }, []);

    const login = (user: LoggedInUser) => {
        setLoggedInUser(user);
        localStorage.setItem('loggedInUser', JSON.stringify(user));
    };

    const logout = () => {
        setLoggedInUser(null);
        localStorage.removeItem('loggedInUser');
    };

    return (
        <AuthContext.Provider value={{ loggedInUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};