import { useEffect } from "react";

interface ResponseModalProps {
    isOpen: boolean;
    onClose: () => void;
    type: "success" | "error";
    message: string;
}

export const ResponseModal = ({ isOpen, onClose, type, message }: ResponseModalProps) => {
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(onClose, 3000); // Fecha em 3s
            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
            role="dialog"
            aria-live="assertive"
        >
            <div
                className={`
                    relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl
                    p-6 rounded-xl shadow-2xl transition-all transform
                    animate-fade-in-up text-center
                    ${type === "success"
                        ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                        : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200"}
                `}
                style={{
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    margin: "auto",
                }}
            >
                <h3 className="text-xl font-semibold mb-2">
                    {type === "success" ? "Sucesso!" : "Erro"}
                </h3>
                <p className="text-base">{message}</p>
            </div>
        </div>
    );
};

export default ResponseModal;
