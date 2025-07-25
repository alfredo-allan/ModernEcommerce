import React from "react";

export default function ShippingAndDelivery() {
    return (
        <section className="max-w-5xl mx-auto px-4 py-12 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold gradient-title mb-6 text-center">
                Frete e Entrega
            </h1>

            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                    Após a confirmação do pagamento, nosso time inicia imediatamente o processo de <span className="text-clientPink font-semibold">separação e embalagem</span> do seu pedido com todo o cuidado que ele merece.
                </p>

                <p>
                    O prazo de envio começa a contar a partir da confirmação do pagamento e pode variar de acordo com o endereço de entrega e a opção de frete escolhida no momento da compra.
                </p>

                <p>
                    Você receberá o código de rastreio assim que o pedido for postado, para acompanhar cada etapa da entrega com segurança.
                </p>

                <p>
                    Em caso de dúvidas sobre prazos ou envio, nosso atendimento está sempre disponível para te ajudar!
                </p>

                <p>
                    Entregamos para todo o Brasil com agilidade, cuidado e carinho. 📦✨
                </p>
            </div>
        </section>
    );
}
