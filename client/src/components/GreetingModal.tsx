import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useLocation } from "wouter";

interface GreetingModalProps {
    isOpen: boolean;
    onClose: () => void;
    persistWhenNotLogged?: boolean; // se true, modal persiste até ação do usuário
}

export const GreetingModal = ({
    isOpen,
    onClose,
    persistWhenNotLogged = false,
}: GreetingModalProps) => {
    const { loggedInUser } = useAuth();
    const [, setLocation] = useLocation();
    const [show, setShow] = useState(isOpen);

    useEffect(() => {
        if (isOpen) {
            setShow(true);

            if (loggedInUser) {
                // Fecha automático após 3s para usuário logado
                const timer = setTimeout(() => {
                    setShow(false);
                    onClose();
                }, 3000);
                return () => clearTimeout(timer);
            }
            // Se não está logado e modal deve persistir, não fecha
        } else {
            setShow(false);
        }
    }, [isOpen, loggedInUser, onClose]);

    if (!show) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
            <div
                className="
          relative w-full max-w-sm sm:max-w-md
          p-6 rounded-xl shadow-2xl transition-all transform
          bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100
          text-center
        "
            >
                {/* Ícone de cereja */}
                <div className="flex justify-center mb-3">
                    <img
                        src="img/cereja-doce-logo.png"
                        alt="Cereja"
                        className="w-40 h-20"
                    />
                </div>

                {loggedInUser ? (
                    <h3 className="text-xl font-semibold">
                        Seja bem-vindo(a) à{' '}
                        <span className="text-pink-500">Cereja Doce Moda </span>,{' '}
                        {(loggedInUser.nome && loggedInUser.nome.split(' ')[0]) || ''}
                        !
                    </h3>
                ) : (
                    <>
                        <h3 className="text-xl font-semibold mb-4">
                            Você precisa estar logado para continuar
                        </h3>
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={() => setLocation("/auth?view=register")}
                                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg"
                            >
                                Cadastrar-se
                            </button>
                            <button
                                onClick={() => setLocation("/auth?view=login")}
                                className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg"
                            >
                                Login
                            </button>
                        </div>
                    </>
                )}

                {/* Botão fechar quando modal persistente e usuário não logado */}
                {!loggedInUser && persistWhenNotLogged && (
                    <button
                        onClick={() => {
                            setShow(false);
                            onClose();
                        }}
                        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-lg"
                        aria-label="Fechar"
                    >
                        ✕
                    </button>
                )}
            </div>
        </div>
    );
};
