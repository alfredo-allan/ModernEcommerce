import React from "react";

export default function AboutUs() {
    return (
        <section className="max-w-5xl mx-auto px-4 py-12 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold gradient-title mb-6 text-center">
                Sobre Nós
            </h1>

            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                    Na <span className="text-clientPink font-semibold">Cereja Doce Moda 🍒</span>, acreditamos que toda mulher merece se sentir forte, confortável e bonita enquanto treina. Nossas roupas foram pensadas para valorizar todos os tipos de corpos — com estilo, tecnologia e qualidade.
                </p>

                <p>
                    Com tecidos respiráveis, duráveis e com caimento perfeito, oferecemos peças que acompanham você desde o treino intenso até a rotina do dia a dia. Nossa missão é entregar mais do que vestuário: queremos inspirar confiança e autenticidade.
                </p>

                <p>
                    Somos apaixonados por moda fitness e, acima de tudo, por inclusão. Aqui, cada detalhe é desenvolvido com carinho e dedicação, para que você se sinta representada, acolhida e poderosa.
                </p>
            </div>
        </section>
    );
}
