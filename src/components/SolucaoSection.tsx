import { Settings, BarChart3 } from "lucide-react";

const pillars = [
  {
    icon: Settings,
    title: "Arquitetura de Processos",
    mentor: "com Rebeca Maia",
    description:
      "Como desenhar processos e formar uma equipe que pensa e decide por você, eliminando a fadiga de decisão e devolvendo seu tempo estratégico.",
  },
  {
    icon: BarChart3,
    title: "Engenharia de Caixa",
    mentor: "com Lucas Nigro",
    description:
      "Como dominar seus indicadores para encontrar o lucro que está fugindo do seu controle e garantir que cada movimento de escala seja financeiramente viável.",
  },
];

const SolucaoSection = () => (
  <section className="relative py-20 sm:py-28 px-6">
    {/* Background texture */}
    <div className="absolute inset-0 bg-card/30" />

    <div className="relative container max-w-4xl">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground text-center mb-4 uppercase tracking-tight">
        Dois Pilares para{" "}
        <span className="text-primary">Escalar com Lucro</span>
      </h2>
      <p className="text-muted-foreground text-center text-sm sm:text-base max-w-2xl mx-auto mb-14 leading-relaxed">
        Uma masterclass que une gestão operacional e inteligência financeira num
        plano integrado de intervenção.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="group relative p-7 sm:p-8 rounded-2xl border border-border/50 bg-background/60 backdrop-blur-sm hover:border-primary/40 transition-all duration-500"
            style={{
              boxShadow: "inset 0 1px 0 0 hsl(var(--primary) / 0.05)",
            }}
          >
            {/* Glow on hover */}
            <div className="absolute inset-0 rounded-2xl bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">
                {p.title}
              </h3>
              <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                {p.mentor}
              </span>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mt-4">
                {p.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SolucaoSection;
