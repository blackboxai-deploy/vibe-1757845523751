import { HeroBanner } from "@/components/HeroBanner";
import { StatsSection } from "@/components/StatsSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { companyInfo } from "@/lib/company-data";
import { servicesData } from "@/lib/services-data";
import { projectsData } from "@/lib/projects-data";
import Link from "next/link";

export default function HomePage() {
  const featuredServices = servicesData.slice(0, 3);
  const featuredProjects = projectsData.filter(project => project.status === 'ongoing').slice(0, 2);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroBanner />

      {/* Stats Section */}
      <StatsSection />

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Líderes en Minería Sostenible
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {companyInfo.description}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">Misión</div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {companyInfo.mission.substring(0, 120)}...
                  </p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600 mb-2">Visión</div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {companyInfo.vision.substring(0, 120)}...
                  </p>
                </div>
              </div>

              <Button asChild size="lg" className="bg-blue-800 hover:bg-blue-900">
                <Link href="/nosotros">Conocer Más</Link>
              </Button>
            </div>
            
            <div className="relative">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/184d4bee-04f8-43b4-ace8-d066cab2e96f.png"
                alt="Instalaciones modernas de minería con tecnología avanzada y operaciones sostenibles"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-1">28+</div>
                <div className="text-sm text-gray-600">Años de Experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios Especializados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones integrales para todas las fases del ciclo minero, 
              desde exploración hasta procesamiento y comercialización.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="text-4xl">{service.icon}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        {service.experience} • {service.projects} proyectos
                      </div>
                      <Button asChild variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800">
                        <Link href={`/servicios#${service.slug}`}>Ver Más</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-blue-800 text-blue-800 hover:bg-blue-50">
              <Link href="/servicios">Ver Todos los Servicios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proyectos Destacados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Operaciones de clase mundial que establecen nuevos estándares 
              en eficiencia, sostenibilidad e innovación tecnológica.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredProjects.map((project) => (
              <div key={project.id} className="group">
                <div className="relative overflow-hidden rounded-2xl shadow-xl mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full uppercase tracking-wide">
                        En Curso
                      </span>
                      <span className="text-white text-sm">
                        {project.location.country}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="text-sm text-gray-500">Inversión</div>
                      <div className="font-bold text-lg text-gray-900">{project.investment}</div>
                    </div>
                    <div className="space-y-1 text-right">
                      <div className="text-sm text-gray-500">Personal</div>
                      <div className="font-bold text-lg text-gray-900">{project.metrics.workforce} empleados</div>
                    </div>
                  </div>
                  
                  <Button asChild className="w-full bg-blue-800 hover:bg-blue-900">
                    <Link href={`/proyectos/${project.slug}`}>Ver Detalles del Proyecto</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-blue-800 text-blue-800 hover:bg-blue-50">
              <Link href="/proyectos">Ver Todos los Proyectos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Valores Corporativos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Principios fundamentales que guían cada decisión y acción en nuestra organización
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyInfo.values.map((value, index) => (
              <div key={value} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value}</h3>
                <p className="text-gray-600">
                  {value === "Seguridad ante todo" && "La seguridad de nuestro personal es nuestra máxima prioridad en todas las operaciones."}
                  {value === "Excelencia operacional" && "Buscamos la mejora continua en todos nuestros procesos y operaciones."}
                  {value === "Responsabilidad ambiental" && "Protegemos el medio ambiente con prácticas sostenibles y tecnologías limpias."}
                  {value === "Transparencia e integridad" && "Actuamos con honestidad y transparencia en todas nuestras relaciones."}
                  {value === "Compromiso comunitario" && "Contribuimos al desarrollo sostenible de las comunidades donde operamos."}
                  {value === "Innovación continua" && "Adoptamos nuevas tecnologías para mejorar nuestra eficiencia y sostenibilidad."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Interesado en Trabajar con Nosotros?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Descubre oportunidades de colaboración, inversión y desarrollo 
            en la industria minera más sostenible de Sudamérica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Link href="/contacto">Contactar Equipo</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-800">
              <Link href="/proyectos">Ver Oportunidades</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}