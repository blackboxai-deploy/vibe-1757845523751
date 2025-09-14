import Link from "next/link";
import { Button } from "@/components/ui/button";
import { companyInfo, companyStats } from "@/lib/company-data";

export function HeroBanner() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/480b78d1-2c3b-4019-87db-7df3383bf897.png"
          alt="Operación minera en los Andes con maquinaria pesada al atardecer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {companyInfo.tagline}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {companyInfo.description.substring(0, 180)}...
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 h-auto">
              <Link href="/proyectos">
                Nuestros Proyectos
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 h-auto">
              <Link href="/nosotros">
                Conocer Más
              </Link>
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                {companyStats.yearsExperience}+
              </div>
              <div className="text-sm text-gray-200 uppercase tracking-wide">
                Años de Experiencia
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                {companyStats.projectsCompleted}
              </div>
              <div className="text-sm text-gray-200 uppercase tracking-wide">
                Proyectos Completados
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                {companyStats.employeesCount.toLocaleString()}+
              </div>
              <div className="text-sm text-gray-200 uppercase tracking-wide">
                Profesionales
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
                {companyStats.countriesOperating}
              </div>
              <div className="text-sm text-gray-200 uppercase tracking-wide">
                Países de Operación
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}