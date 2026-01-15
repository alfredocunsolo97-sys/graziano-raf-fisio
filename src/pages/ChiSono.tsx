import { CheckCircle, Award, BookOpen, Heart } from 'lucide-react'

export default function ChiSono() {
  const values = [
    {
      icon: <Award className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Competenza Clinica",
      description: "Specializzazione OMPT e continuo aggiornamento scientifico per offrire le migliori soluzioni"
    },
    {
      icon: <Heart className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Dedizione al Paziente",
      description: "Percorsi di cura personalizzati basati sulle esigenze specifiche di ogni persona"
    },
    {
      icon: <BookOpen className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Ricerca e Formazione",
      description: "Docente presso La Sapienza e autore di pubblicazioni scientifiche nel settore"
    },
    {
      icon: <CheckCircle className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Professionalità",
      description: "Puntualità, trasparenza e etica professionale in ogni aspetto del mio lavoro"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-10 md:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-3 md:mb-4">Chi Sono</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl">
            Mi chiamo Graziano Raffaele e credo fermamente che il movimento sia la chiave per una vita piena e in salute.
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-12 md:py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-10 md:mb-16">
            <div className="relative w-full aspect-[3/4] lg:aspect-auto lg:h-[400px]">
              <img
                src="/images/graziano-portrait.jpg"
                alt="Dr. Graziano Raffaele"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Il mio percorso accademico è iniziato nel 2019 con la laurea in Fisioterapia presso l'Università "Aldo Moro" di Bari. Spinto dal desiderio di offrire ai miei pazienti le soluzioni cliniche più avanzate, ho scelto di specializzarmi ulteriormente presso l'Università degli Studi del Molise in Fisioterapia Ortopedica Manipolativa, approfondendo il trattamento dei disordini neuro-muscoloscheletrici e reumatologici.
              </p>
            </div>
          </div>

          {/* Competenza clinica e gestionale */}
          <div className="bg-primary/5 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 md:mb-6 lg:mb-8">Competenza clinica e gestionale</h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Dal 2021, la mia attività professionale si divide tra la clinica e la gestione sanitaria. In qualità di socio di Welfare Aurora srl, ricopro il ruolo di responsabile dei "Welfare Aurora Center", coordinando con dedizione il centro di Gioia del Colle. Qui, metto la mia esperienza al servizio dei pazienti, costruendo percorsi di cura personalizzati basati sulle più recenti evidenze scientifiche.
            </p>
          </div>

          {/* L'impegno nella formazione e nella ricerca */}
          <div className="bg-secondary/10 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 md:mb-6 lg:mb-8">L'impegno nella formazione e nella ricerca</h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Credo che la crescita della nostra professione passi per la condivisione del sapere. Per questo, dal 2022, sono orgoglioso di svolgere attività di docenza presso l'Università La Sapienza di Roma, un impegno che mi permette di restare costantemente aggiornato e di contribuire alla formazione dei fisioterapisti OMPT di domani. Dedico parte del mio tempo alla ricerca, con diverse pubblicazioni scientifiche a mio nome.
            </p>
          </div>

          {/* Values Section */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 md:mb-8 lg:mb-12">I Miei Valori</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              {values.map((value, index) => (
                <div key={index} className="p-5 md:p-6 lg:p-8 border border-gray-200 rounded-lg shadow-md md:shadow-lg bg-white hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 text-secondary">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg lg:text-xl font-bold text-primary mb-1 md:mb-2">{value.title}</h3>
                      <p className="text-sm md:text-base text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section - HIGHLIGHTED */}
      <section className="py-12 md:py-20 lg:py-28 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-t-4 border-b-4 border-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2 md:mb-4">Qualifiche e Certificazioni</h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-600">Competenza certificata e riconosciuta a livello nazionale e internazionale</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8">
            <div className="p-5 md:p-6 lg:p-10 border-0 shadow-lg md:shadow-xl bg-white border-l-4 border-primary hover:shadow-2xl transition-all rounded-lg">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-primary mb-4 md:mb-6 flex items-center gap-2">
                <Award size={20} className="md:w-6 md:h-6 lg:w-7 lg:h-7 text-secondary" />
                Formazione Accademica
              </h3>
              <ul className="space-y-3 md:space-y-4 text-gray-700">
                <li className="flex items-start gap-2 md:gap-3">
                  <CheckCircle size={18} className="md:w-5 md:h-5 lg:w-6 lg:h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">Laurea in Fisioterapia (PT) - Università "Aldo Moro" di Bari</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <CheckCircle size={18} className="md:w-5 md:h-5 lg:w-6 lg:h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">Laurea in Scienze Biomediche (BSc)</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <CheckCircle size={18} className="md:w-5 md:h-5 lg:w-6 lg:h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">Specializzazione OMPT - Università del Molise</span>
                </li>
              </ul>
            </div>

            <div className="p-5 md:p-6 lg:p-10 border-0 shadow-lg md:shadow-xl bg-white border-l-4 border-secondary hover:shadow-2xl transition-all rounded-lg">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-primary mb-4 md:mb-6 flex items-center gap-2">
                <Award size={20} className="md:w-6 md:h-6 lg:w-7 lg:h-7 text-secondary" />
                Affiliazioni Professionali
              </h3>
              <ul className="space-y-3 md:space-y-4 text-gray-700">
                <li className="flex items-start gap-2 md:gap-3">
                  <CheckCircle size={18} className="md:w-5 md:h-5 lg:w-6 lg:h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base font-semibold">Iscrizione Albo Professionale n° 2303</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <CheckCircle size={18} className="md:w-5 md:h-5 lg:w-6 lg:h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">Socio AIFI (Associazione Italiana Fisioterapisti)</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <CheckCircle size={18} className="md:w-5 md:h-5 lg:w-6 lg:h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">Socio GTM (Gruppo Terapisti Manuali)</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <CheckCircle size={18} className="md:w-5 md:h-5 lg:w-6 lg:h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">Docente La Sapienza di Roma</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-lg md:rounded-xl p-5 md:p-6 lg:p-8 shadow-md md:shadow-lg border-2 border-primary text-center">
            <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
              La mia formazione continua e il mio impegno nella ricerca scientifica garantiscono ai miei pazienti le soluzioni cliniche più avanzate e evidence-based disponibili nel settore della fisioterapia ortopedica.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">
            Pronto a Iniziare il Tuo Percorso di Guarigione?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 lg:mb-10 max-w-2xl mx-auto">
            Contattami oggi per prenotare una consulenza specialistica personalizzata
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <a href="tel:+393398442169" className="btn-primary">
              Chiama Ora
            </a>
            <a href="https://wa.me/393398442169" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
