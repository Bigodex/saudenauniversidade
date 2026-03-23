"use client"

import { Zap, Calendar, RefreshCw, Backpack } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const tipCategories = [
  {
    icon: Zap,
    title: "Refeições Rápidas",
    description: "Opções saudáveis para quem tem pouco tempo",
    tips: [
      "Sanduíches naturais com pão integral",
      "Saladas prontas com proteína",
      "Wraps com legumes e frango",
      "Frutas picadas com iogurte natural",
      "Ovos mexidos com torradas",
    ],
  },
  {
    icon: Calendar,
    title: "Planejamento Semanal",
    description: "Organize sua alimentação com antecedência",
    tips: [
      "Separe um dia para planejar as refeições",
      "Faça lista de compras baseada no cardápio",
      "Prepare marmitas no domingo",
      "Congele porções individuais",
      "Deixe lanches saudáveis prontos",
    ],
  },
  {
    icon: RefreshCw,
    title: "Substituições Simples",
    description: "Troque alimentos não saudáveis por opções melhores",
    tips: [
      "Refrigerante → Água com frutas",
      "Biscoito recheado → Frutas secas",
      "Macarrão instantâneo → Macarrão integral",
      "Salgadinho → Castanhas e nozes",
      "Doces → Frutas com canela",
    ],
  },
  {
    icon: Backpack,
    title: "Lanches para Faculdade",
    description: "O que levar na mochila para o dia a dia",
    tips: [
      "Barrinhas de cereais caseiras",
      "Mix de oleaginosas",
      "Frutas resistentes (maçã, banana)",
      "Sanduíches naturais",
      "Garrafa de água sempre cheia",
    ],
  },
]

export function TipsSection() {
  return (
    <section id="dicas" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
            Dicas Práticas
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Sugestões simples e aplicáveis para melhorar a alimentação 
            no dia a dia universitário, mesmo com tempo e orçamento limitados.
          </p>
        </div>

        {/* Tips Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tipCategories.map((category, index) => (
            <Card
              key={category.title}
              className="group bg-card border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl h-full"
            >
              <CardHeader className="pb-4">
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 group-hover:bg-primary/15 transition-colors">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {category.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2.5">
                  {category.tips.map((tip, tipIndex) => (
                    <li
                      key={tipIndex}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
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
