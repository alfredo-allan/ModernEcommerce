import React from "react";

export default function ExchangePolicy() {
    return (
        <section className="max-w-5xl mx-auto px-4 py-12 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold gradient-title mb-6 text-center">
                Políticas de Troca
            </h1>

            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                    Na <span className="text-clientPink font-semibold">Cereja Doce Moda 🍒</span>, queremos que você esteja 100% satisfeita com sua compra.
                </p>

                <p>
                    Caso precise trocar algum produto, você tem até <strong>7 dias corridos</strong> após o recebimento para nos comunicar. O item deve estar sem uso, com etiqueta e na embalagem original.
                </p>

                <p>
                    As trocas são feitas por tamanho, cor ou por vale-compra, conforme a disponibilidade em estoque. Não realizamos trocas de peças em promoção ou usadas.
                </p>

                <p>
                    Para solicitar a troca, basta entrar em contato pelo nosso WhatsApp ou e-mail informando o número do pedido.
                </p>

                <p>
                    Nosso objetivo é oferecer uma experiência segura, transparente e sem complicações. 💖
                </p>
            </div>
        </section>
    );
}
