import { CheckCircle, Zap, Heart, Award, Star, Phone, MessageCircle, Mail } from 'lucide-react'

export default function Home() {
  const reviews = [
    {
      name: "Saverio Abbruzzese",
      rating: 5,
      text: "Ho avuto la necessità di risolvere un'infiammazione un fine settimana da un terapista, per un dolore acuto che avevo nella zona lombale. Posso dire con sincerità di aver avuto un grande aiuto.",
      role: "Local Guide"
    },
    {
      name: "Pasquale Iavarone",
      rating: 5,
      text: "Un professionista preparato, puntuale e capace di mettersi a mio agio fin dal primo momento. La sua chiarezza nello spiegare il problema e il piano di cura è fondamentale.",
      role: "Paziente"
    }
  ]

  const services = [
    {
      icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Fisioterapia Ortopedica",
      description: "Trattamento specializzato delle patologie muscolo-scheletriche con tecniche manipolative avanzate (OMPT)"
    },
    {
      icon: <Heart className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Riabilitazione Post-Chirurgica",
      description: "Percorsi personalizzati di recupero dopo interventi ortopedici e traumatologici"
    },
    {
      icon: <Award className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Esercizio Terapeutico",
      description: "Programmi di esercizi mirati per il recupero funzionale e la prevenzione di recidive"
    },
    {
      icon: <CheckCircle className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Consulenza Specialistica",
      description: "Valutazione clinica approfondita e pianificazione di trattamenti evidence-based"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none" />
        <div className="container mx-auto px-4 py-12 md:py-24 lg:py-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-3 md:mb-4 leading-tight">
                  Movimento è Salute
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                  Specialista in Fisioterapia Ortopedica Manipolativa (OMPT). Docente presso l'Università La Sapienza di Roma. Dedico la mia professione al recupero funzionale e al benessere dei miei pazienti.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a href="tel:+393398442169" className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto">
                  <Phone size={18} className="md:w-5 md:h-5" />
                  Chiama Ora
                </a>
                <a href="https://wa.me/393398442169" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center justify-center gap-2 w-full sm:w-auto">
                  <MessageCircle size={18} className="md:w-5 md:h-5" />
                  WhatsApp
                </a>
              </div>

              <div className="flex items-center gap-3 md:gap-4 pt-2 md:pt-4">
                <div className="flex gap-0.5 md:gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm md:text-base text-gray-600 font-medium">70 recensioni Google - 5.0 stelle</p>
              </div>
            </div>

            <div className="relative w-full aspect-[3/4] lg:aspect-auto lg:h-[500px]">
              <img
                src="/images/graziano-portrait.jpg"
                alt="Dr. Graziano Raffaele"
                className="w-full h-full object-contain rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chi Sono Section */}
      <section className="py-12 md:py-20 lg:py-28 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[450px] order-2 lg:order-1">
              <img
                src="/images/therapy-session.jpg"
                alt="Sessione di fisioterapia"
                className="w-full h-full object-contain rounded-xl md:rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">Chi Sono</h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Mi chiamo Graziano Raffaele e credo fermamente che il movimento sia la chiave per una vita piena e in salute.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Il mio percorso accademico è iniziato nel 2019 con la laurea in Fisioterapia presso l'Università "Aldo Moro" di Bari. Spinto dal desiderio di offrire ai miei pazienti le soluzioni cliniche più avanzate, ho scelto di specializzarmi ulteriormente presso l'Università degli Studi del Molise in Fisioterapia Ortopedica Manipolativa.
              </p>
              <div className="pt-2 md:pt-4">
                <a href="/chi-sono" className="inline-block bg-primary text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg hover:opacity-90 transition-opacity font-medium text-sm md:text-base">
                  Scopri di più
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4">
              Specializzazioni e Servizi
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Offro soluzioni cliniche avanzate basate sulle più recenti evidenze scientifiche
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-5 md:p-6 lg:p-8 border border-gray-200 rounded-lg shadow-md md:shadow-lg hover:shadow-xl transition-shadow bg-white hover:bg-primary/5">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 text-secondary">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-primary mb-1 md:mb-2">{service.title}</h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-10 md:py-14 lg:py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 md:mb-4">
              Cosa Dicono i Pazienti
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Testimonianze di pazienti soddisfatti del trattamento ricevuto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="p-4 md:p-6 border border-gray-200 rounded-lg shadow-md md:shadow-lg bg-white">
                <div className="flex gap-0.5 md:gap-1 mb-2 md:mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} className="md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4 leading-relaxed italic">"{review.text}"</p>
                <div className="border-t border-gray-200 pt-2 md:pt-3">
                  <p className="font-bold text-primary text-sm md:text-base">{review.name}</p>
                  <p className="text-xs md:text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contatti" className="py-12 md:py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6 lg:mb-8">
                Contattami per una Consulenza
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                Sono disponibile per consulenze personalizzate. Contattami via telefono, WhatsApp o email per prenotare una visita specialistica.
              </p>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-secondary mt-0.5 md:mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900 text-sm md:text-base mb-0.5 md:mb-1">Telefono</p>
                    <a href="tel:+393398442169" className="text-primary hover:underline text-base md:text-lg font-medium">
                      +39 339 844 2169
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-secondary mt-0.5 md:mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900 text-sm md:text-base mb-0.5 md:mb-1">Email</p>
                    <div className="space-y-0.5 md:space-y-1">
                      <a href="mailto:graziano.raffaele997@gmail.com" className="text-primary hover:underline text-sm md:text-base font-medium block">
                        graziano.raffaele997@gmail.com
                      </a>
                      <a href="mailto:graziano.raffaele@pec.fnofi.it" className="text-primary hover:underline text-sm md:text-base font-medium block">
                        graziano.raffaele@pec.fnofi.it
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-secondary mt-0.5 md:mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900 text-sm md:text-base mb-0.5 md:mb-1">WhatsApp</p>
                    <a href="https://wa.me/393398442169" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-base md:text-lg font-medium">
                      Scrivimi su WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <Award className="w-5 h-5 md:w-6 md:h-6 text-secondary mt-0.5 md:mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900 text-sm md:text-base mb-0.5 md:mb-1">Qualifiche</p>
                    <p className="text-sm md:text-base text-gray-600">
                      PT, BSc, OMPT<br />
                      Iscrizione Albo n° 2303<br />
                      Socio AIFI e GTM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 md:mt-8 lg:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4">
                <a href="tel:+393398442169" className="btn-primary flex items-center justify-center w-full sm:w-auto">
                  Chiama Ora
                </a>
                <a href="https://wa.me/393398442169" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center justify-center w-full sm:w-auto">
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[500px]">
              <img
                src="/images/clinic-therapy.jpg"
                alt="Studio fisioterapico"
                className="w-full h-full object-contain rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
