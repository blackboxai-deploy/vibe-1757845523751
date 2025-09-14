"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function CorporateHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Servicios", href: "/servicios" },
    { name: "Proyectos", href: "/proyectos" },
    { name: "Sostenibilidad", href: "/sostenibilidad" },
    { name: "Noticias", href: "/noticias" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="h-12 w-12 bg-gradient-to-br from-blue-800 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">AM</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">Andean Mining</span>
                <span className="text-xs text-gray-600 -mt-1">Corporation</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-800 transition-colors duration-300 font-medium text-sm uppercase tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button asChild variant="outline" className="border-blue-800 text-blue-800 hover:bg-blue-50">
              <Link href="/contacto">Contáctanos</Link>
            </Button>
            <Button asChild className="bg-blue-800 hover:bg-blue-900">
              <Link href="/proyectos">Ver Proyectos</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle className="flex items-center space-x-3">
                    <div className="h-8 w-8 bg-gradient-to-br from-blue-800 to-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">AM</span>
                    </div>
                    <span>Andean Mining</span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-6 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-700 hover:text-blue-800 transition-colors duration-300 font-medium text-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-6 border-t border-gray-200 space-y-3">
                    <Button asChild className="w-full" variant="outline">
                      <Link href="/contacto" onClick={() => setIsOpen(false)}>
                        Contáctanos
                      </Link>
                    </Button>
                    <Button asChild className="w-full bg-blue-800 hover:bg-blue-900">
                      <Link href="/proyectos" onClick={() => setIsOpen(false)}>
                        Ver Proyectos
                      </Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}