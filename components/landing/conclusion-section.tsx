"use client"

import { ArrowUp, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const keyPoints = [
  "A alimentação adequada é fundamental para o desempenho acadêmico",
  "Estudantes reconhecem o impacto, mas enfrentam barreiras práticas",
  "Educação alimentar pode transformar hábitos e resultados",
  "Pequenas mudanças no dia a dia geram grandes impactos",
]

export function ConclusionSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-balance">
              Conclusão
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p className="text-pretty">
                Esta pesquisa evidencia a estreita relação entre hábitos alimentares 
                e o desempenho acadêmico dos estudantes universitários. Os dados 
                coletados demonstram que, embora exista consciência sobre a importância 
                de uma alimentação saudável, diversos fatores como falta de tempo, 
                praticidade e custo dificultam a adoção de escolhas mais nutritivas.
              </p>
              <p className="mt-6 text-pretty">
                É fundamental que as instituições de ensino superior promovam 
                iniciativas de educação alimentar e ofereçam alternativas saudáveis 
                e acessíveis em seus ambientes. A formação de hábitos alimentares 
                adequados durante a vida universitária pode impactar positivamente 
                não apenas o rendimento acadêmico, mas também a saúde e qualidade 
                de vida a longo prazo.
              </p>
            </div>
          </div>

          {/* Key Points */}
          <div className="bg-secondary/50 rounded-3xl p-8 lg:p-12 mb-12">
            <h3 className="text-xl font-semibold text-foreground text-center mb-8">
              Principais Conclusões
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {keyPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-card p-4 rounded-xl"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8 h-12 text-base font-semibold shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
              asChild
            >
              <a href="#">
                <ArrowUp className="mr-2 h-5 w-5" />
                Voltar ao Início
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
