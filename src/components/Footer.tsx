/* eslint-disable @next/next/no-img-element */
import { Mail, MapPin, Clock, Instagram } from "lucide-react";

export default function FooterComponent() {
  return (
    <footer id="contato" className="bg-gradient-to-b from-blue-900 to-blue-950 dark:from-gray-800 dark:to-gray-900 text-white">
      {/* Seção Principal */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo e Descrição */}
          <div className="text-center md:text-left border-b md:border-b-0 border-gray-700 pb-6 md:pb-0">
            <div className="flex justify-center md:justify-start mb-4">
              <img 
                src="/images/logobranca.png" 
                alt="Prefeitura de Campos Sales" 
                className="h-12 sm:h-16 hover:opacity-90 transition-opacity" 
              />
            </div>
            <p className="text-gray-300 dark:text-gray-400 text-sm">
              Trabalhando pela saúde e bem-estar da população de Campos Sales
            </p>
          </div>

          {/* Horário de Funcionamento */}
          <div className="text-center md:text-left border-b md:border-b-0 border-gray-700 pb-6 md:pb-0">
            <h3 className="text-lg font-semibold mb-4 flex items-center justify-center md:justify-start">
              <Clock className="h-5 w-5 mr-2" />
              Horário de Funcionamento
            </h3>
            <div className="space-y-2 text-gray-300 dark:text-gray-400">
              <p className="font-medium">Segunda a Quinta:</p>
              <p>Manhã: 07:30h às 11:30h</p>
              <p>Tarde: 13:30h às 17:00h</p>
              <p className="font-medium mt-2">Sexta:</p>
              <p>07:30h às 12:00h</p>
            </div>
          </div>

          {/* Contato */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 flex items-center justify-center md:justify-start">
              <Mail className="h-5 w-5 mr-2" />
              Contato
            </h3>
            <div className="space-y-3 text-gray-300 dark:text-gray-400">
              <p className="flex items-center justify-center md:justify-start">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="break-all">secsaude@campossales.ce.gov.br</span>
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>Bárbara Pereira de Alencar, 652 - Centro</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Redes Sociais */}
      <div className="bg-blue-950 dark:bg-gray-900 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Secretaria de Saúde de Campos Sales. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a 
                href="https://instagram.com/secretariadesaudecs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram da Secretaria de Saúde"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}