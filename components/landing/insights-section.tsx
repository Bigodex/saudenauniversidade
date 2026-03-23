"use client"

import { AlertTriangle, Clock, Brain, HelpCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const insights = [
  {
    icon: AlertTriangle,
    title: "Alto Consumo de Ultraprocessados",
    description:
      "A maioria dos estudantes consome alimentos ultraprocessados diariamente, principalmente por conveniência e preço acessível no ambiente universitário.",
    highlight: "45% consomem diariamente",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    icon: Clock,
    title: "Falta de Tempo",
    description:
      "A rotina acadêmica intensa é apontada como principal barreira para uma alimentação saudável, levando a escolhas rápidas e pouco nutritivas.",
    highlight: "68% citam falta de tempo",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Brain,
    title: "Consciência do Impacto",
    description:
      "Grande parte dos estudantes reconhece a relação entre alimentação e desempenho acadêmico, mas encontra dificuldades em manter hábitos saudáveis.",
    highlight: "72% percebem a relação",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: HelpCircle,
    title: "Demanda por Informação",
    description:
      "Existe uma necessidade clara de mais orientação sobre nutrição e planejamento alimentar adequado para a realidade universitária.",
    highlight: "85% querem mais informações",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
]

export function InsightsSection() {
  return (
    <section id="insights" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
            Insights Principais
          </h2>
          <p className="text-md text-muted-foreground leading-relaxed text-pretty">
            Principais descobertas e padrões identificados através da análise 
            dos dados coletados na pesquisa com estudantes universitários.
          </p>
        </div>

        {/* Insights Cards */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {insights.map((insight, index) => (
            <Card
              key={insight.title}
              className="group bg-card border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden"
            >
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${insight.bgColor} rounded-xl shrink-0`}>
                    <insight.icon className={`h-6 w-6 ${insight.color}`} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      {insight.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {insight.description}
                    </p>
                    <span
                      className={`inline-block px-3 py-1 ${insight.bgColor} ${insight.color} text-sm font-medium rounded-full`}
                    >
                      {insight.highlight}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
