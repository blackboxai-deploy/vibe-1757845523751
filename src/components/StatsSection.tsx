import { companyStats, keyMinerals } from "@/lib/company-data";

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Stats */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Liderando la Industria Minera
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Números que reflejan nuestro compromiso con la excelencia operacional y el desarrollo sostenible
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-3">
                {companyStats.annualProduction}K
              </div>
              <div className="text-gray-600 font-medium">
                Toneladas Anuales
              </div>
              <div className="text-sm text-gray-500 mt-2">
                Producción Total
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-3">
                {companyStats.safetyRecord}
              </div>
              <div className="text-gray-600 font-medium">
                Récord de Seguridad
              </div>
              <div className="text-sm text-gray-500 mt-2">
                Índice de Seguridad
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-3">
                {companyStats.certifications}
              </div>
              <div className="text-gray-600 font-medium">
                Certificaciones
              </div>
              <div className="text-sm text-gray-500 mt-2">
                Estándares Internacionales
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-3">
                {companyStats.communityPrograms}
              </div>
              <div className="text-gray-600 font-medium">
                Programas Sociales
              </div>
              <div className="text-sm text-gray-500 mt-2">
                Desarrollo Comunitario
              </div>
            </div>
          </div>
        </div>

        {/* Minerals Production */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Portafolio de Minerales
            </h3>
            <p className="text-lg text-gray-600">
              Diversificación estratégica en minerales de alta demanda mundial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyMinerals.map((mineral, index) => (
              <div key={mineral.name} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="text-2xl font-bold text-blue-800">
                      {mineral.percentage}%
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">
                      {index + 1}
                    </span>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {mineral.name}
                </h4>
                
                <p className="text-gray-600 mb-3">
                  {mineral.reserves}
                </p>
                
                <div className="space-y-1">
                  <div className="text-sm font-semibold text-gray-700 mb-2">
                    Aplicaciones:
                  </div>
                  {mineral.applications.map((app, appIndex) => (
                    <div key={appIndex} className="text-xs text-gray-600 bg-gray-100 rounded-full px-3 py-1 inline-block mr-1 mb-1">
                      {app}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Presence */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Presencia Internacional
          </h3>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900">Perú</h4>
                <p className="text-sm text-gray-600">Sede Principal</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900">Chile</h4>
                <p className="text-sm text-gray-600">Operaciones Cobre</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900">Bolivia</h4>
                <p className="text-sm text-gray-600">Proyectos Plata</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900">Ecuador</h4>
                <p className="text-sm text-gray-600">Exploración</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}