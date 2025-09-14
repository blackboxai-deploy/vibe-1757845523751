import Link from "next/link";
import { companyInfo, offices } from "@/lib/company-data";

export function CorporateFooter() {
  const currentYear = new Date().getFullYear();
  
  const headquarters = offices.find(office => office.type === 'headquarters');
  
  const footerSections = {
    company: [
      { name: "Sobre Nosotros", href: "/nosotros" },
      { name: "Nuestro Equipo", href: "/nosotros#equipo" },
      { name: "Historia", href: "/nosotros#historia" },
      { name: "Certificaciones", href: "/nosotros#certificaciones" },
    ],
    services: [
      { name: "Exploración Geológica", href: "/servicios#exploracion" },
      { name: "Extracción Minera", href: "/servicios#extraccion" },
      { name: "Procesamiento", href: "/servicios#procesamiento" },
      { name: "Consultoría", href: "/servicios#consultoria" },
    ],
    projects: [
      { name: "Andes Gold", href: "/proyectos/andes-gold" },
      { name: "Copper Valley", href: "/proyectos/copper-valley" },
      { name: "Silver Heights", href: "/proyectos/silver-heights" },
      { name: "Ver Todos", href: "/proyectos" },
    ],
    corporate: [
      { name: "Noticias", href: "/noticias" },
      { name: "Sostenibilidad", href: "/sostenibilidad" },
      { name: "Inversionistas", href: "#" },
      { name: "Contacto", href: "/contacto" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-12 w-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AM</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">{companyInfo.name}</span>
                <span className="text-sm text-gray-400 -mt-1">Corporation</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {companyInfo.tagline}
            </p>
            <p className="text-gray-400 text-sm mb-6">
              {companyInfo.description.substring(0, 200)}...
            </p>
            
            {/* Contact Info */}
            {headquarters && (
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{headquarters.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{headquarters.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{headquarters.email}</span>
                </div>
              </div>
            )}
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Empresa</h3>
            <ul className="space-y-3">
              {footerSections.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              {footerSections.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Corporativo</h3>
            <ul className="space-y-3">
              {footerSections.corporate.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">{companyInfo.founded}</div>
              <div className="text-gray-400 text-sm">Fundada</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">{companyInfo.employees}</div>
              <div className="text-gray-400 text-sm">Empleados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">{companyInfo.countries.length}</div>
              <div className="text-gray-400 text-sm">Países</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">{companyInfo.production}</div>
              <div className="text-gray-400 text-sm">Producción</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              {/* Social Links */}
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
            <div className="mt-4 md:mt-0 md:order-1">
              <p className="text-center md:text-left text-gray-400 text-sm">
                © {currentYear} {companyInfo.fullName}. Todos los derechos reservados.
              </p>
              <div className="flex justify-center md:justify-start space-x-4 mt-2">
                <Link href="#" className="text-gray-400 hover:text-white text-xs">
                  Términos de Servicio
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white text-xs">
                  Política de Privacidad
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white text-xs">
                  Código de Ética
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}