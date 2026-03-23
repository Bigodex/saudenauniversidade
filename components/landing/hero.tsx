"use client"

import { ArrowRight, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-background" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left animate-in fade-in slide-in-from-left-8 duration-700">

            {/* Title */}
            <h1 className="text-1xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Consciência Alimentar no{" "}
              <span className="text-primary">Ambiente Acadêmico</span>
            </h1>

            {/* Description */}
            <p className="text-lg lg:text-md text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed text-pretty">
              Uma pesquisa sobre hábitos alimentares de estudantes universitários 
              e seu impacto na qualidade de vida e rendimento acadêmico.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8 h-12 text-base font-semibold shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                asChild
              >
                <a href="#resultados">
                  Ver Resultados
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl px-8 h-12 text-base font-semibold border-2 hover:bg-accent transition-all hover:-translate-y-0.5"
                asChild
              >
                <a href="#sobre">Saiba Mais</a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-3xl rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 to-transparent rounded-3xl -rotate-3" />
              
              {/* Main Image Container */}
              <div className="relative bg-card rounded-3xl shadow-2xl overflow-hidden border border-border">
                <img
                  src="/images/healthy-food-hero.jpg"
                  alt="Alimentos saudáveis como frutas, verduras e grãos"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
