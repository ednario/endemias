/* eslint-disable @next/next/no-img-element */
export default function FooterComponent() {
  return (
    <>
    <footer id="contato" className="bg-blue-900 dark:bg-gray-800 text-white py-4 px-4 text-sm">
        <div className="flex justify-center sm:mr-6">
          <img 
            src="/images/logobranca.png" 
            alt="Prefeitura de Campos Sales" 
            className="h-8 sm:h-10 mb-4" 
          />
          </div>
          <div className="container mx-auto text-center space-y-1">
            <p className="mb-2">Expediente Secretária de Saúde:</p>
            <p>Segunda a Quinta:</p>
            <p>Manhã: 07:30h às 11:30h</p>
            <p>Tarde: 13:30h às 17:00h</p>
            <p>Sexta: 07:30h às 12:00h</p>
        </div>
        <hr className="h-px my-8 bg-gray-400 border-0 dark:bg-gray-700"/>
        <div className="container mx-auto text-center space-y-1">
          <p>Secretaria Morgana Fortaleza</p>
          <p>Contato: saudecampossalesce@gmail.com</p>
          <p>Endereço: Bárbara Pereira de Alencar, 652 - Centro, 63.150-000</p>
        </div>
      </footer>
    </>
  );
}