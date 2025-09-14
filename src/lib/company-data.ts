export interface CompanyInfo {
  name: string;
  fullName: string;
  tagline: string;
  description: string;
  founded: number;
  headquarters: string;
  employees: string;
  countries: string[];
  production: string;
  mission: string;
  vision: string;
  values: string[];
}

export interface CompanyStats {
  yearsExperience: number;
  projectsCompleted: number;
  employeesCount: number;
  countriesOperating: number;
  annualProduction: string;
  safetyRecord: string;
  certifications: number;
  communityPrograms: number;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: number;
  description: string;
}

export interface Office {
  id: string;
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  type: 'headquarters' | 'regional' | 'operations';
}

export const companyInfo: CompanyInfo = {
  name: "Andean Mining Corporation",
  fullName: "Andean Mining Corporation S.A.C.",
  tagline: "Extrayendo el futuro de los Andes",
  description: "Líder en exploración, extracción y procesamiento de minerales en Sudamérica con más de 28 años de experiencia. Comprometidos con la excelencia operacional, la sostenibilidad ambiental y el desarrollo de las comunidades donde operamos.",
  founded: 1995,
  headquarters: "Lima, Perú",
  employees: "2,500+",
  countries: ["Perú", "Chile", "Bolivia", "Ecuador"],
  production: "150,000 toneladas anuales",
  mission: "Extraer y procesar minerales de manera responsable, creando valor para nuestros accionistas, empleados y las comunidades donde operamos, mientras protegemos el medio ambiente para las futuras generaciones.",
  vision: "Ser la empresa minera líder en Sudamérica, reconocida por nuestras prácticas sostenibles, innovación tecnológica y compromiso con el desarrollo social.",
  values: [
    "Seguridad ante todo",
    "Excelencia operacional",
    "Responsabilidad ambiental",
    "Transparencia e integridad",
    "Compromiso comunitario",
    "Innovación continua"
  ]
};

export const companyStats: CompanyStats = {
  yearsExperience: 28,
  projectsCompleted: 45,
  employeesCount: 2500,
  countriesOperating: 4,
  annualProduction: "150,000",
  safetyRecord: "99.7%",
  certifications: 12,
  communityPrograms: 25
};

export const certifications: Certification[] = [
  {
    id: "1",
    name: "ISO 14001:2015",
    issuer: "International Organization for Standardization",
    year: 2020,
    description: "Sistema de gestión ambiental certificado internacionalmente"
  },
  {
    id: "2",
    name: "ISO 45001:2018",
    issuer: "International Organization for Standardization",
    year: 2021,
    description: "Sistema de gestión de seguridad y salud en el trabajo"
  },
  {
    id: "3",
    name: "OHSAS 18001",
    issuer: "Occupational Health and Safety Assessment Series",
    year: 2019,
    description: "Estándar de gestión de seguridad y salud ocupacional"
  },
  {
    id: "4",
    name: "Cyanide Code",
    issuer: "International Cyanide Management Institute",
    year: 2022,
    description: "Manejo responsable del cianuro en operaciones mineras"
  },
  {
    id: "5",
    name: "Responsible Mining Index",
    issuer: "Responsible Mining Foundation",
    year: 2023,
    description: "Certificación en prácticas mineras responsables"
  }
];

export const offices: Office[] = [
  {
    id: "1",
    city: "Lima",
    country: "Perú",
    address: "Av. El Derby 254, Surco, Lima 33",
    phone: "+51 1 612-3000",
    email: "lima@andeanmining.com",
    type: "headquarters"
  },
  {
    id: "2",
    city: "Santiago",
    country: "Chile",
    address: "Av. Providencia 1208, Providencia, Santiago",
    phone: "+56 2 2234-5600",
    email: "santiago@andeanmining.com",
    type: "regional"
  },
  {
    id: "3",
    city: "La Paz",
    country: "Bolivia",
    address: "Av. 16 de Julio 1490, La Paz",
    phone: "+591 2 231-4500",
    email: "lapaz@andeanmining.com",
    type: "regional"
  },
  {
    id: "4",
    city: "Arequipa",
    country: "Perú",
    address: "Parque Industrial de Arequipa, Mz. A Lt. 15",
    phone: "+51 54 205-800",
    email: "arequipa@andeanmining.com",
    type: "operations"
  },
  {
    id: "5",
    city: "Antofagasta",
    country: "Chile",
    address: "Av. Argentina 2612, Antofagasta",
    phone: "+56 55 236-7000",
    email: "antofagasta@andeanmining.com",
    type: "operations"
  }
];

export const keyMinerals = [
  {
    name: "Cobre",
    percentage: 45,
    applications: ["Construcción", "Electrónica", "Transporte"],
    reserves: "2.5M toneladas"
  },
  {
    name: "Oro",
    percentage: 30,
    applications: ["Joyería", "Electrónica", "Inversión"],
    reserves: "125 toneladas"
  },
  {
    name: "Plata",
    percentage: 15,
    applications: ["Industrial", "Joyería", "Fotografía"],
    reserves: "1,200 toneladas"
  },
  {
    name: "Zinc",
    percentage: 10,
    applications: ["Galvanización", "Aleaciones", "Químicos"],
    reserves: "800K toneladas"
  }
];