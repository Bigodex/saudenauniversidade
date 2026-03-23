"use client"

import { Leaf, Mail, User, GraduationCap } from "lucide-react"

export function Footer() {
  return (
    <footer id="contato" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary rounded-xl">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">
                Vida Saudável na Universidade
              </span>
            </div>
            <p className="text-background/70 leading-relaxed max-w-xs">
              Projeto de Extensão Acadêmico dedicado ao estudo e promoção de 
              hábitos alimentares saudáveis no ambiente universitário.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background/70">
                <User className="h-5 w-5 text-primary" />
                <span>Patricia Borba Andrade</span>
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:pedropiola25@gmail.com"
                  className="hover:text-background transition-colors"
                >
                  borbaandradepatricia@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <GraduationCap className="h-5 w-5 text-primary" />
                <span>Universidade Cruzeiro do Sul</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#sobre"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Sobre a Pesquisa
                </a>
              </li>
              <li>
                <a
                  href="#resultados"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Resultados
                </a>
              </li>
              <li>
                <a
                  href="#insights"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Insights
                </a>
              </li>
              <li>
                <a
                  href="#dicas"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Dicas Práticas
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-background/10 text-center text-background/50 text-sm">
          <p>
            © {new Date().getFullYear()} Vida Saudável na Universidade. 
            Projeto de Extensão Acadêmico.
          </p>
        </div>
      </div>
    </footer>
  )
}
