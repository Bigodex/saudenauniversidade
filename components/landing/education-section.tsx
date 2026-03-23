"use client"

import { Package, FileSearch, Salad, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const educationTopics = [
  {
    icon: Package,
    title: "O que são Ultraprocessados?",
    description:
      "Alimentos ultraprocessados são formulações industriais feitas principalmente de substâncias derivadas de alimentos e aditivos. Incluem refrigerantes, biscoitos recheados, salgadinhos, macarrão instantâneo e refeições prontas congeladas.",
    tips: [
      "Contêm alto teor de açúcar, gordura e sódio",
      "Possuem baixo valor nutricional",
      "Associados a doenças crônicas",
    ],
  },
  {
    icon: FileSearch,
    title: "Por que Ler Rótulos?",
    description:
      "A leitura de rótulos permite fazer escolhas alimentares mais conscientes, identificando ingredientes prejudiciais à saúde e comparando produtos semelhantes para escolher opções mais saudáveis.",
    tips: [
      "Verifique a lista de ingredientes",
      "Atenção ao teor de sódio e açúcar",
      "Compare porções entre produtos",
    ],
  },
  {
    icon: Salad,
    title: "Importância de Frutas e Verduras",
    description:
      "Frutas e verduras são fontes essenciais de vitaminas, minerais e fibras. Seu consumo regular está associado à prevenção de doenças e melhora da concentração e disposição.",
    tips: [
      "Recomendação: 5 porções diárias",
      "Prefira variedade de cores",
      "Consuma preferencialmente in natura",
    ],
  },
  {
    icon: Lightbulb,
    title: "Alimentação e Concentração",
    description:
      "O cérebro consome cerca de 20% da energia do corpo. Uma alimentação equilibrada fornece os nutrientes necessários para manter a concentração, memória e disposição para os estudos.",
    tips: [
      "Carboidratos complexos sustentam energia",
      "Ômega-3 melhora função cerebral",
      "Hidratação adequada é essencial",
    ],
  },
]

export function EducationSection() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
            Educação Alimentar
          </h2>
          <p className="text-md text-muted-foreground leading-relaxed text-pretty">
            Informações essenciais sobre alimentação saudável para ajudar estudantes 
            a fazerem escolhas mais conscientes no dia a dia.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {educationTopics.map((topic, index) => (
            <Card
              key={topic.title}
              className="group bg-card border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden"
            >
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl shrink-0 group-hover:bg-primary/15 transition-colors">
                    <topic.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground pt-2">
                    {topic.title}
                  </h3>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {topic.description}
                </p>

                <ul className="space-y-3">
                  {topic.tips.map((tip, tipIndex) => (
                    <li
                      key={tipIndex}
                      className="flex items-center gap-3 text-sm text-foreground"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
