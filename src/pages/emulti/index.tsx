/* eslint-disable @next/next/no-img-element */
import HeaderComponent from "@/components/Header";
import FooterComponent from "@/components/Footer";
import CreatorsComponent from "@/components/Creators";
import { 
        Users,
        Heart, 
        HelpingHand,
        Stethoscope,
        Soup,
         } from "lucide-react";

export default function EmultiPage() {
  return (
    <>
      <HeaderComponent />

      <section className="py-16 px-4 dark:bg-gray-800 dark:text-white bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-6 text-blue-900 dark:text-white">
            EMULTI - Equipe Multiprofissional
          </h1>
          <p className="text-lg mb-8">
            A EMULTI é composta por profissionais de diferentes áreas da saúde que atuam de forma integrada para garantir
            o cuidado integral dos usuários do SUS.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Objetivos da EMULTI</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-blue-50 dark:bg-gray-800 rounded-xl shadow">
              <Users className="mx-auto h-10 w-10 text-blue-700 mb-3" />
              <h3 className="font-semibold mb-2">Atendimento Humanizado</h3>
              <p className="text-sm">Colocar o paciente no centro do cuidado, respeitando sua singularidade.</p>
            </div>
            <div className="p-6 bg-blue-50 dark:bg-gray-800 rounded-xl shadow">
              <Heart className="mx-auto h-10 w-10 text-blue-700 mb-3" />
              <h3 className="font-semibold mb-2">Promoção da Saúde</h3>
              <p className="text-sm">Fomentar práticas saudáveis e prevenir doenças com ações educativas.</p>
            </div>
            <div className="p-6 bg-blue-50 dark:bg-gray-800 rounded-xl shadow">
              <HelpingHand className="mx-auto h-10 w-10 text-blue-700 mb-3" />
              <h3 className="font-semibold mb-2">Cuidado Integral</h3>
              <p className="text-sm">Ações interdisciplinares para garantir acolhimento e resolutividade.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white dark:bg-gray-800 dark:text-white">
  <div className="container mx-auto max-w-5xl">
    <h2 className="text-3xl font-bold mb-10 text-center dark:text-white">
      Áreas de Atuação
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-blue-50 dark:bg-gray-700 rounded-xl shadow p-5 text-center">
        <Heart className="mx-auto h-8 w-8 text-blue-800 mb-2" />
        <h3 className="font-semibold">Psicologia</h3>
      </div>
      <div className="bg-blue-50 dark:bg-gray-700 rounded-xl shadow p-5 text-center">
        <Users className="mx-auto h-8 w-8 text-blue-800 mb-2" />
        <h3 className="font-semibold">Serviço Social</h3>
      </div>
      <div className="bg-blue-50 dark:bg-gray-700 rounded-xl shadow p-5 text-center">
        <Stethoscope className="mx-auto h-8 w-8 text-blue-800 mb-2" />
        <h3 className="font-semibold">Fisioterapia</h3>
      </div>
      <div className="bg-blue-50 dark:bg-gray-700 rounded-xl shadow p-5 text-center">
        <Soup className="mx-auto h-8 w-8 text-blue-800 mb-2" />
        <h3 className="font-semibold">Nutrição</h3>
      </div>
    </div>
  </div>
</section>

      <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <img
                src="/images/emulti/001.jpeg"
                alt="Grupo terapêutico"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold">Grupos Terapêuticos</h3>
              <p className="text-sm">
                Atividades em grupo com foco na saúde mental, inclusão social e autoestima.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <img
                src="/images/emulti/002.png"
                alt="Ação preventiva"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold">Educação em Saúde</h3>
              <p className="text-sm">
                Oficinas e rodas de conversa com temas como alimentação, autocuidado e prevenção.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CreatorsComponent />
      <FooterComponent />
    </>
  );
}
