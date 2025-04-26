import Image from "next/image"
import Link from "next/link"
import { Brain, CheckCircle, Clock, LucideTarget, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-blue-900 text-white">
      {/* Header */}
      <header className="container mx-auto py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Brain className="h-8 w-8 text-purple-300" />
          <span className="font-bold text-xl">FocoTDAH - Testes com Mathes</span>
        </div>
        <nav className="hidden md:flex gap-8">
          <Link href="#beneficios" className="hover:text-purple-300 transition-colors">
            Benefícios
          </Link>
          {/*<Link href="#conteudo" className="hover:text-purple-300 transition-colors">
            Conteúdo
          </Link>
          <Link href="#depoimentos" className="hover:text-purple-300 transition-colors">
            Depoimentos
          </Link>
          <Link href="#faq" className="hover:text-purple-300 transition-colors">
            FAQ
          </Link>*/}
        </nav>

        {/*<Button className="bg-purple-500 hover:bg-purple-600">Inscreva-se</Button>*/}
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-16 md:py-24 px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block bg-purple-500/20 px-4 py-2 rounded-full text-purple-300 font-medium">
            Curso Online
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Foco no TDAH: Como Aumentar a Concentração e Vencer a Procrastinação
          </h1>
          <p className="text-lg md:text-xl text-purple-200">
            Descubra estratégias comprovadas para gerenciar o TDAH, aumentar seu foco e transformar a procrastinação em
            produtividade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
           {/* <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white">
              Quero Transformar Meu Foco
            </Button>
            <Button size="lg" variant="outline" className="border-purple-400 text-purple-200 hover:bg-purple-500/20">
              Saiba Mais
            </Button>*/}
          </div>
          <div className="flex items-center gap-4 text-purple-300">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-purple-400 border-2 border-purple-900"></div>
              ))}
            </div>
            
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-3xl"></div>
          <div className="relative rounded-2xl overflow-hidden border-2 border-purple-500/30">
            <Image
              src="/tdah-background.png"
              alt="Pessoa concentrada trabalhando em ambiente com iluminação roxa"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>




      {/* Hero Section */}
      <section className="container mx-auto py-16 md:py-24 px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block bg-purple-500/20 px-4 py-2 rounded-full text-purple-300 font-medium">
            Entre em contato
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Digite seus Dados
          </h1>
         <form action="/listar" method="get">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-purple-200">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Seu Nome"
                className="w-full p-2 border border-purple-500 rounded-md bg-purple-900/40 text-purple-200"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-purple-200">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Seu Email"
                className="w-full p-2 border border-purple-500 rounded-md bg-purple-900/40 text-purple-200"
              />
            </div>  
            <Button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white">
              Enviar
            </Button>
         </form>
        
        </div>
        
      </section>

      {/* Features Section */}
      <section id="beneficios" className="container mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Você Vai Conquistar</h2>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            Nosso método foi desenvolvido especificamente para pessoas com TDAH, focando nas dificuldades reais e
            oferecendo soluções práticas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <LucideTarget className="h-10 w-10 text-purple-400" />,
              title: "Foco Sustentado",
              description:
                "Aprenda técnicas para manter a concentração por períodos mais longos, mesmo em tarefas desafiadoras.",
            },
            {
              icon: <Clock className="h-10 w-10 text-purple-400" />,
              title: "Gestão de Tempo",
              description: "Domine estratégias de organização temporal adaptadas para o cérebro com TDAH.",
            },
            {
              icon: <CheckCircle className="h-10 w-10 text-purple-400" />,
              title: "Produtividade Real",
              description: "Transforme ideias em ações concretas com métodos que respeitam seu funcionamento cerebral.",
            },
            {
              icon: <Brain className="h-10 w-10 text-purple-400" />,
              title: "Autoconhecimento",
              description: "Entenda como seu cérebro funciona e aproveite seus pontos fortes únicos.",
            },
            {
              icon: <Users className="h-10 w-10 text-purple-400" />,
              title: "Comunidade de Apoio",
              description: "Conecte-se com pessoas que enfrentam desafios semelhantes e compartilhe experiências.",
            },
            {
              icon: <Star className="h-10 w-10 text-purple-400" />,
              title: "Resultados Duradouros",
              description: "Desenvolva hábitos sustentáveis que continuarão funcionando a longo prazo.",
            },
          ].map((feature, index) => (
            <Card key={index} className="bg-purple-900/40 border-purple-500/30">
              <CardContent className="p-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-purple-200">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Content Section 
      <section id="conteudo" className="container mx-auto py-16 px-4 bg-purple-900/30 rounded-3xl my-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Você Vai Aprender</h2>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            Um programa completo com 6 módulos estruturados para transformar sua relação com o foco e a produtividade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          <div className="space-y-8">
            {[1, 2, 3].map((module) => (
              <div key={module} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center font-bold text-xl">
                  {module}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    {module === 1 && "Entendendo o Cérebro TDAH"}
                    {module === 2 && "Estratégias de Foco Imediato"}
                    {module === 3 && "Dominando a Gestão de Tempo"}
                  </h3>
                  <p className="text-purple-200">
                    {module === 1 &&
                      "Compreenda como seu cérebro funciona, por que você procrastina e como usar seus pontos fortes a seu favor."}
                    {module === 2 &&
                      "Técnicas práticas para iniciar tarefas difíceis e manter o foco mesmo quando sua mente quer divagar."}
                    {module === 3 &&
                      "Sistemas de organização temporal adaptados para o TDAH, incluindo técnicas de planejamento flexível."}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-8">
            {[4, 5, 6].map((module) => (
              <div key={module} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center font-bold text-xl">
                  {module}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    {module === 4 && "Ambiente e Rotinas Otimizadas"}
                    {module === 5 && "Superando Bloqueios Emocionais"}
                    {module === 6 && "Produtividade Sustentável"}
                  </h3>
                  <p className="text-purple-200">
                    {module === 4 &&
                      "Como estruturar seu espaço físico e digital para minimizar distrações e maximizar o foco."}
                    {module === 5 &&
                      "Ferramentas para lidar com a ansiedade, perfeccionismo e medo que frequentemente acompanham o TDAH."}
                    {module === 6 &&
                      "Construção de sistemas personalizados que funcionam a longo prazo, respeitando seu estilo único."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
*/}
      {/* Testimonials
      <section id="depoimentos" className="container mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Histórias de Transformação</h2>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            Veja como nosso método já transformou a vida de centenas de pessoas com TDAH.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Mariana Silva",
              role: "Profissional de Marketing",
              content:
                "Depois de anos lutando contra a procrastinação, finalmente encontrei estratégias que realmente funcionam para mim. Minha produtividade aumentou 70% e, o mais importante, sem me sentir esgotada.",
            },
            {
              name: "Carlos Mendes",
              role: "Estudante de Medicina",
              content:
                "As técnicas de estudo adaptadas para TDAH foram revolucionárias. Consegui passar em provas que antes pareciam impossíveis e agora entendo como aproveitar meus momentos de hiperfoco.",
            },
            {
              name: "Juliana Costa",
              role: "Empreendedora",
              content:
                "Como empreendedora com TDAH, eu tinha milhares de ideias mas dificuldade em executá-las. Este curso me deu estrutura sem me limitar, e agora consigo transformar minha criatividade em resultados concretos.",
            },
          ].map((testimonial, index) => (
            <Card key={index} className="bg-purple-900/40 border-purple-500/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-purple-100 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-purple-600"></div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-purple-300 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section> */}

      {/* Pricing Section
      <section className="container mx-auto py-16 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-800 to-blue-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -ml-32 -mb-32"></div>

          <div className="relative">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Invista em Seu Potencial</h2>
              <p className="text-lg text-purple-200 max-w-2xl mx-auto">
                Acesso vitalício a todo o conteúdo e atualizações futuras.
              </p>
            </div>

            <div className="bg-purple-950/50 rounded-xl p-6 md:p-8 border border-purple-500/30 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Programa Completo Foco no TDAH</h3>
                  <p className="text-purple-200">Transforme sua concentração e produtividade</p>
                </div>
                <div className="text-center">
                  <div className="text-purple-300 line-through mb-1">R$ 997,00</div>
                  <div className="text-3xl font-bold">R$ 697,00</div>
                  <div className="text-sm text-purple-300">ou 12x de R$ 58,08</div>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "6 módulos completos com mais de 30 aulas",
                  "Acesso vitalício e atualizações gratuitas",
                  "Comunidade exclusiva de apoio",
                  "Planilhas e ferramentas de organização",
                  "Certificado de conclusão",
                  "Bônus: Meditações guiadas para foco",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button size="lg" className="w-full bg-purple-500 hover:bg-purple-600 text-lg py-6">
                Quero Transformar Meu Foco Agora
              </Button>
            </div>

            <div className="flex items-center justify-center gap-4 text-sm text-center">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-purple-400" />
                <span>Garantia de 30 dias</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-purple-400" />
                <span>Pagamento seguro</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-purple-400" />
                <span>Suporte personalizado</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Section 
      <section id="faq" className="container mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">Tire suas dúvidas sobre o programa Foco no TDAH.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "Este programa é apenas para pessoas diagnosticadas com TDAH?",
                answer:
                  "Não. Embora o programa tenha sido desenvolvido com foco nas necessidades específicas de pessoas com TDAH, as estratégias são úteis para qualquer pessoa que luta com problemas de foco, procrastinação e organização.",
              },
              {
                question: "Quanto tempo tenho para acessar o conteúdo?",
                answer:
                  "O acesso é vitalício! Você poderá assistir e revisitar o conteúdo quantas vezes quiser, além de receber todas as atualizações futuras sem custo adicional.",
              },
              {
                question: "Preciso de conhecimentos prévios para aproveitar o curso?",
                answer:
                  "Não é necessário nenhum conhecimento prévio. O programa foi estruturado para ser acessível a todos, independentemente de sua familiaridade com o tema.",
              },
              {
                question: "Como funciona a garantia de satisfação?",
                answer:
                  "Oferecemos uma garantia incondicional de 30 dias. Se você não ficar satisfeito com o conteúdo por qualquer motivo, basta solicitar o reembolso e devolveremos 100% do seu investimento, sem perguntas.",
              },
              {
                question: "Quanto tempo preciso dedicar ao programa por semana?",
                answer:
                  "Recomendamos dedicar pelo menos 2-3 horas por semana para obter os melhores resultados. No entanto, o programa é flexível e você pode avançar no seu próprio ritmo.",
              },
              {
                question: "O programa substitui tratamentos médicos para TDAH?",
                answer:
                  "Não. Este programa oferece estratégias complementares, mas não substitui tratamentos médicos ou terapêuticos. Sempre consulte profissionais de saúde para questões médicas relacionadas ao TDAH.",
              },
            ].map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-purple-500/30 rounded-lg bg-purple-900/40 px-6"
              >
                <AccordionTrigger className="text-left font-medium py-4">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-purple-200 pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>*/}

      {/* Final CTA */}
      <section className="container mx-auto py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Pronto para Transformar seu Foco e Produtividade?</h2>
          <p className="text-xl text-purple-200">
            Junte-se a mais de 1.200 pessoas que já transformaram sua relação com o TDAH e descobriram seu verdadeiro
            potencial.
          </p>
         
          <p className="text-purple-300">Acesso imediato a todo o conteúdo após a confirmação do pagamento.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-950 py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Brain className="h-8 w-8 text-purple-300" />
              <span className="font-bold text-xl">FocoTDAH</span>
            </div>
            <div className="flex gap-6">
              <Link href="#" className="text-purple-300 hover:text-white transition-colors">
                Termos de Uso
              </Link>
              <Link href="#" className="text-purple-300 hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="text-purple-300 hover:text-white transition-colors">
                Contato
              </Link>
            </div>
          </div>
          <div className="text-center text-purple-400 text-sm">
            <p>© {new Date().getFullYear()} FocoTDAH. Todos os direitos reservados.</p>
            <p className="mt-2">Este programa não substitui tratamentos médicos ou terapêuticos para TDAH.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
