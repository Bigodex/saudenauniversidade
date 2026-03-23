"use client"

import { Battery, Focus, Smile, GraduationCap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// TODO: Substituir pelos dados reais do formulário
const impactIndicators = [
  {
    icon: Battery,
    label: "Energia",
    value: 68,
    description: "dos estudantes relatam mais energia com alimentação adequada",
  },
  {
    icon: Focus,
    label: "Concentração",
    value: 72,
    description: "percebem melhora na concentração durante os estudos",
  },
  {
    icon: Smile,
    label: "Humor",
    value: 65,
    description: "relatam melhora no humor e bem-estar geral",
  },
  {
    icon: GraduationCap,
    label: "Desempenho Acadêmico",
    value: 70,
    description: "notam impacto positivo nas notas e produtividade",
  },
]

export function ImpactSection() {
  return (
    <section className="py-20 lg:py-32 bg-primary/5">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
            Impacto na Qualidade de Vida
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Como uma alimentação saudável influencia diferentes aspectos 
            da vida acadêmica segundo os estudantes participantes.
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactIndicators.map((indicator, index) => (
            <Card
              key={indicator.label}
              className="group bg-card border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl text-center"
            >
              <CardContent className="p-6 lg:p-8">
                {/* Icon */}
                <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-2xl w-fit group-hover:bg-primary/15 transition-colors">
                  <indicator.icon className="h-8 w-8 text-primary" />
                </div>

                {/* Progress Circle */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      className="text-muted/30"
                      strokeWidth="8"
                      stroke="currentColor"
                      fill="transparent"
                      r="56"
                      cx="64"
                      cy="64"
                    />
                    <circle
                      className="text-primary transition-all duration-1000"
                      strokeWidth="8"
                      strokeDasharray={352}
                      strokeDashoffset={352 - (352 * indicator.value) / 100}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="56"
                      cx="64"
                      cy="64"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-foreground">
                      {indicator.value}%
                    </span>
                  </div>
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {indicator.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {indicator.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
