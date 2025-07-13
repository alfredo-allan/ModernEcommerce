import React, { createContext, useContext, useEffect, useState } from "react";

interface Endereco {
    cep: string;
    rua: string;
    bairro: string;
    cidade: string;
    estado: string;
    numero?: string;
}

interface LoggedInUser {
    id: number;
    nome: string;
    email: string;
    endereco?: Endereco;
    // outros campos se necessário
}

interface AuthContextProps {
    loggedInUser: LoggedInUser | null;
    login: (user: LoggedInUser) => void;
    logout: () => void;
    loadingUser: boolean;
}

const AuthContext = createContext<AuthContextProps>({
    loggedInUser: null,
    login: () => { },
    logout: () => { },
    loadingUser: true,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState<LoggedInUser | null>(null);
    const [loadingUser, setLoadingUser] = useState<boolean>(true);

    useEffect(() => {
        const storedUser = localStorage.getItem("loggedInUser");
        if (storedUser) {
            try {
                setLoggedInUser(JSON.parse(storedUser));
            } catch (e) {
                console.error("Erro ao recuperar usuário do localStorage:", e);
            }
        }
        setLoadingUser(false);
    }, []);

    const login = (user: LoggedInUser) => {
        setLoggedInUser(user);
        localStorage.setItem("loggedInUser", JSON.stringify(user));
    };

    const logout = () => {
        setLoggedInUser(null);
        localStorage.removeItem("loggedInUser");
    };

    return (
        <AuthContext.Provider value={{ loggedInUser, login, logout, loadingUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
