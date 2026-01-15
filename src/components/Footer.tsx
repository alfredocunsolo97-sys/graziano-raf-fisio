import { Phone, Mail, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-10 md:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-12">
          {/* About */}
          <div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">Dr. Graziano Raffaele</h3>
            <p className="text-sm md:text-base text-blue-100 leading-relaxed">
              Specialista in Fisioterapia Ortopedica Manipolativa con esperienza nel trattamento di patologie neuro-muscolo-scheletriche e post-chirurgiche.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base md:text-lg lg:text-xl font-bold mb-4 md:mb-6">Contatti</h4>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-2 md:gap-3">
                <Phone size={18} className="md:w-5 md:h-5 mt-0.5 md:mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs md:text-sm text-blue-100">Telefono</p>
                  <a href="tel:+393398442169" className="hover:text-secondary transition-colors font-medium text-base md:text-lg">
                    +39 339 844 2169
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <Mail size={18} className="md:w-5 md:h-5 mt-0.5 md:mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs md:text-sm text-blue-100">Email</p>
                  <div className="space-y-0.5 md:space-y-1">
                    <a href="mailto:graziano.raffaele997@gmail.com" className="hover:text-secondary transition-colors font-medium text-sm md:text-base block break-all">
                      graziano.raffaele997@gmail.com
                    </a>
                    <a href="mailto:graziano.raffaele@pec.fnofi.it" className="hover:text-secondary transition-colors font-medium text-sm md:text-base block break-all">
                      graziano.raffaele@pec.fnofi.it
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <div>
            <h4 className="text-base md:text-lg lg:text-xl font-bold mb-4 md:mb-6">Contatto Rapido</h4>
              <div className="flex items-start gap-2 md:gap-3">
                <MessageCircle size={18} className="md:w-5 md:h-5 mt-0.5 md:mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs md:text-sm text-blue-100 mb-0.5 md:mb-1">WhatsApp</p>
                  <a href="https://wa.me/393398442169" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors font-medium text-sm md:text-base">
                    Scrivimi su WhatsApp
                  </a>
                </div>
              </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-400 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-blue-100 text-xs md:text-sm mb-4 md:mb-6">
            <div className="text-center md:text-left">
              <p>&copy; 2026 Dr. Graziano Raffaele. Tutti i diritti riservati.</p>
              <p className="mt-1 md:mt-2">P.IVA: 08400550722 | Attività: 869021 - Fisioterapia</p>
            </div>
            <div className="flex gap-4 md:gap-6">
              <a href="https://www.instagram.com/grazianoraffaele.fisio/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Instagram
              </a>
              <a href="https://www.instagram.com/welfareaurora/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Welfare Aurora
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
