"use client"

import { Users, Apple, Utensils, Brain } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"

// TODO: Substituir pelos dados reais do formulário
const mockData = {
  totalEstudantes: 7,
  consumoFrutas: 44,
  refeicoesPorDia: 3.6,
  impactoPercebido: 77.8,
}

// TODO: Substituir pelos dados reais do formulário
const leituraRotulosData = [
  { name: "Sempre", value: 22.2, color: "#16a34a" },
  { name: "Às vezes", value: 44.4, color: "#22c55e" },
  { name: "Raramente", value: 22.2, color: "#86efac" },
  { name: "Nunca", value: 11.1, color: "#dcfce7" },
]

// TODO: Substituir pelos dados reais do formulário
const ultraprocessadosData = [
  { frequencia: "Diariamente", porcentagem: 11.1 },
  { frequencia: "3-5x/semana", porcentagem: 22.2 },
  { frequencia: "1-2x/semana", porcentagem: 55.6 },
  { frequencia: "Raramente", porcentagem: 11.1 },
]

// TODO: Substituir pelos dados reais do formulário
const frutasVerdurasData = [
  { frequencia: "Diariamente", porcentagem: 44.4 },
  { frequencia: "Algumas Vezes na Semana", porcentagem: 44.4 },
  { frequencia: "Raramente", porcentagem: 11.1 },
]

// TODO: Substituir pelos dados reais do formulário
const impactoData = [
  { categoria: "Energia", valor: 68 },
  { categoria: "Concentração", valor: 72 },
  { categoria: "Humor", valor: 65 },
  { categoria: "Desempenho", valor: 70 },
]

const   metrics = [
  {
    icon: Users,
    label: "Estudantes Participantes",
    value: mockData.totalEstudantes.toString(),
    suffix: "",
  },
  {
    icon: Apple,
    label: "Consomem Frutas Diariamente",
    value: mockData.consumoFrutas.toString(),
    suffix: "%",
  },
  {
    icon: Utensils,
    label: "Média de Refeições/Dia",
    value: mockData.refeicoesPorDia.toString(),
    suffix: "",
  },
  {
    icon: Brain,
    label: "Percebem Impacto Acadêmico",
    value: mockData.impactoPercebido.toString(),
    suffix: "%",
  },
]

export function ResultsSection() {
  return (
    <section id="resultados" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
            Dados da Pesquisa
          </h2>
          <p className="text-md text-muted-foreground leading-relaxed text-pretty">
            Resultados obtidos através de questionários aplicados a estudantes 
            universitários sobre seus hábitos alimentares e percepções.
          </p>
        </div>

        {/* Metrics Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <Card
              key={metric.label}
              className="bg-card border-border hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <metric.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">
                      {metric.value}
                      {metric.suffix}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {metric.label}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Pie Chart - Leitura de Rótulos */}
          <Card className="bg-card border-border rounded-2xl overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold text-foreground">
                Frequência de Leitura de Rótulos
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={leituraRotulosData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={4}
                      dataKey="value"
                      label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                      }
                      labelLine={false}
                    >
                      {leituraRotulosData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        borderRadius: "12px",
                        border: "1px solid #e5e7eb",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Bar Chart - Ultraprocessados */}
          <Card className="bg-card border-border rounded-2xl overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold text-foreground">
                Consumo de Ultraprocessados
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={ultraprocessadosData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                      type="number"
                      domain={[0, 100]}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <YAxis
                      dataKey="frequencia"
                      type="category"
                      width={100}
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip
                      formatter={(value) => [`${value}%`, "Porcentagem"]}
                      contentStyle={{
                        borderRadius: "12px",
                        border: "1px solid #e5e7eb",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <Bar
                      dataKey="porcentagem"
                      fill="#16a34a"
                      radius={[0, 8, 8, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Bar Chart - Frutas e Verduras */}
          <Card className="bg-card border-border rounded-2xl overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold text-foreground">
                Consumo de Frutas e Verduras
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={frutasVerdurasData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                      dataKey="frequencia"
                      tick={{ fontSize: 11 }}
                      interval={0}
                    />
                    <YAxis
                      domain={[0, 100]}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <Tooltip
                      formatter={(value) => [`${value}%`, "Porcentagem"]}
                      contentStyle={{
                        borderRadius: "12px",
                        border: "1px solid #e5e7eb",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <Bar dataKey="porcentagem" fill="#22c55e" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Bar Chart - Impacto */}
          <Card className="bg-card border-border rounded-2xl overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold text-foreground">
                Impacto Percebido na Qualidade de Vida
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={impactoData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="categoria" tick={{ fontSize: 12 }} />
                    <YAxis
                      domain={[0, 100]}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <Tooltip
                      formatter={(value) => [
                        `${value}%`,
                        "Estudantes que percebem impacto",
                      ]}
                      contentStyle={{
                        borderRadius: "12px",
                        border: "1px solid #e5e7eb",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <Bar dataKey="valor" fill="#16a34a" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
