"use client"

import { ScanBarcode, CupSoda, Clock, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: ScanBarcode,
    title: "Leitura de Rótulos",
    description:
      "Análise do conhecimento dos estudantes sobre informações nutricionais e ingredientes dos alimentos.",
  },
  {
    icon: CupSoda,
    title: "Consumo de Ultraprocessados",
    description:
      "Investigação sobre a frequência e os tipos de alimentos ultraprocessados consumidos no dia a dia.",
  },
  {
    icon: Clock,
    title: "Frequência de Refeições",
    description:
      "Estudo sobre a regularidade das refeições e o impacto da rotina acadêmica na alimentação.",
  },
  {
    icon: TrendingUp,
    title: "Impacto no Desempenho",
    description:
      "Relação entre hábitos alimentares e o rendimento acadêmico dos estudantes universitários.",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-30 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
            Entendendo os hábitos alimentares universitários
          </h2>
          <p className="text-md text-muted-foreground leading-relaxed text-pretty">
            Este projeto de extensão acadêmico tem como objetivo investigar e 
            compreender os padrões alimentares dos estudantes universitários, 
            identificando fatores que influenciam suas escolhas e o impacto 
            dessas decisões na saúde e no desempenho acadêmico.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group bg-card border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 rounded-2xl"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/15 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
