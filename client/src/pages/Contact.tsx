import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleContact = () => {
        const texto = `Boa tarde, Cereja Doce Moda! %0A%0A${encodeURIComponent(
            message
        )}%0A%0AAtenciosamente, ${encodeURIComponent(name)}`;
        const phone = "5511976239695";
        const link = `https://api.whatsapp.com/send?phone=${phone}&text=${texto}`;
        window.open(link, "_blank");
    };

    return (
        <section className="max-w-2xl mx-auto px-4 py-12 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold gradient-title mb-6 text-center">
                Contato
            </h1>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1">
                        Seu nome
                    </label>
                    <input
                        type="text"
                        placeholder="Digite seu nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-clientPink"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1">
                        Mensagem
                    </label>
                    <textarea
                        placeholder="Descreva o motivo do seu contato"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={5}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-clientPink resize-none"
                    />
                </div>

                <button
                    onClick={handleContact}
                    className="w-full md:w-auto flex items-center justify-center gap-2 bg-clientPink text-white px-6 py-3 rounded-xl hover:opacity-90 transition-all duration-300 shadow-md"
                >
                    <FaWhatsapp className="text-xl" />
                    Entrar em Contato via WhatsApp
                </button>
            </div>
        </section>
    );
}
