import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CorporateHeader } from "@/components/CorporateHeader";
import { CorporateFooter } from "@/components/CorporateFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andean Mining Corporation - Líder en Minería Sostenible",
  description: "Empresa minera líder en Sudamérica especializada en exploración, extracción y procesamiento responsable de cobre, oro, plata y minerales críticos.",
  keywords: "minería, cobre, oro, plata, lithio, minería sostenible, exploración geológica, Perú, Chile, Bolivia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <CorporateHeader />
          <main className="flex-1">
            {children}
          </main>
          <CorporateFooter />
        </div>
      </body>
    </html>
  );
}