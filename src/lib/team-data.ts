export interface Executive {
  id: string;
  name: string;
  position: string;
  department: string;
  bio: string;
  image: string;
  experience: string;
  education: string[];
  achievements: string[];
  specializations: string[];
  languages: string[];
  certifications: string[];
  linkedin?: string;
}

export interface BoardMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  background: string;
  otherPositions: string[];
}

export const executiveTeam: Executive[] = [
  {
    id: "1",
    name: "Dr. Carlos Eduardo Mendoza",
    position: "Director Ejecutivo y Presidente",
    department: "Dirección General",
    bio: "Líder visionario con más de 25 años de experiencia en la industria minera internacional. Ha dirigido operaciones exitosas en Sudamérica, África y Australia, especializándose en proyectos de gran escala y desarrollo sostenible. Bajo su liderazgo, Andean Mining se ha posicionado como referente en prácticas mineras responsables.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d75335ff-2820-4798-a953-3b6cec5fa1a5.png",
    experience: "25+ años en minería internacional",
    education: [
      "PhD en Ingeniería de Minas - Colorado School of Mines, USA",
      "MBA - Wharton School, Universidad de Pennsylvania",
      "Ingeniero de Minas - Universidad Nacional de Ingeniería, Lima"
    ],
    achievements: [
      "Implementó 12 proyectos mineros exitosos en 4 continentes",
      "Reconocimiento 'Mining Executive of the Year' - Latin America 2022",
      "Pionero en tecnologías de minería automatizada en Sudamérica",
      "Incrementó valor de portafolio corporativo en 340% (2018-2023)",
      "Lideró la primera operación carbon-neutral de la región"
    ],
    specializations: [
      "Estrategia corporativa y fusiones",
      "Minería sostenible y ESG",
      "Desarrollo de proyectos greenfield",
      "Negociación internacional",
      "Transformación digital minera"
    ],
    languages: ["Español (nativo)", "Inglés (fluido)", "Portugués (avanzado)", "Francés (intermedio)"],
    certifications: [
      "Professional Engineer (PE) - Colorado, USA",
      "Chartered Professional Engineer - Engineers Australia",
      "Certificación Six Sigma Black Belt",
      "ISO 14001 Lead Auditor"
    ],
    linkedin: "carlos-mendoza-mining-ceo"
  },
  {
    id: "2",
    name: "Ing. Patricia Alexandra Vásquez",
    position: "Directora de Operaciones",
    department: "Operaciones",
    bio: "Ingeniera metalúrgica con expertise excepcional en optimización de procesos y gestión operacional. Ha liderado la implementación de tecnologías Industry 4.0 en nuestras operaciones, resultando en incrementos de productividad del 28% y reducción de costos operacionales del 15%. Reconocida internacionalmente por su liderazgo en innovación minera.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b4fc9c28-2e25-4722-bf58-da18b081d9d7.png",
    experience: "22+ años en operaciones mineras",
    education: [
      "M.Sc. Metalurgia Extractiva - Imperial College London, UK",
      "Ingeniería Metalúrgica - Universidad Nacional Mayor de San Marcos",
      "Executive Program - MIT Sloan School of Management"
    ],
    achievements: [
      "Optimizó recuperación metalúrgica promedio del 89% al 94.5%",
      "Implementó primera planta 100% automatizada en Sudamérica",
      "Redujo índices de accidentabilidad en 75% en 5 años",
      "Lideró proyecto de $180M en tiempo récord (18 meses)",
      "Premio 'Women in Mining Excellence Award' 2021"
    ],
    specializations: [
      "Procesamiento de minerales avanzado",
      "Automatización y robótica minera",
      "Gestión de seguridad industrial",
      "Optimización de procesos metalúrgicos",
      "Lean Manufacturing en minería"
    ],
    languages: ["Español (nativo)", "Inglés (fluido)", "Alemán (intermedio)"],
    certifications: [
      "Professional Metallurgist (P.Met) - CIM Canada",
      "Certified Process Safety Management",
      "LEED Green Associate",
      "PMP - Project Management Professional"
    ],
    linkedin: "patricia-vasquez-mining-operations"
  },
  {
    id: "3",
    name: "Dr. Roberto James Silva",
    position: "Director de Exploración",
    department: "Exploración Geológica",
    bio: "Geólogo de renombre internacional con descubrimientos de clase mundial en su haber. Ha identificado recursos por más de $2,500 millones durante su carrera, incluyendo el descubrimiento del depósito Andes Gold. Su expertise en geología estructural y técnicas de exploración modernas ha sido fundamental para el crecimiento de nuestro portafolio de recursos.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3a5011d3-e636-4d70-bee5-722795461ebf.png",
    experience: "28+ años en exploración geológica",
    education: [
      "PhD en Geología Estructural - Universidad de Chile",
      "M.Sc. Geología Económica - Queen's University, Canadá",
      "Geólogo - Universidad Nacional Mayor de San Marcos"
    ],
    achievements: [
      "Descubrió 8 depósitos minerales de clase mundial",
      "Incrementó recursos probados y probables en 250%",
      "Desarrolló metodología propia de exploración (Silva Method)",
      "Publicó 45 papers en revistas científicas internacionales",
      "Mentor de 120+ geólogos profesionales"
    ],
    specializations: [
      "Exploración de depósitos epitermales",
      "Geología estructural andina",
      "Modelamiento geológico 3D",
      "Geoquímica de exploración",
      "Sensores remotos y GIS"
    ],
    languages: ["Español (nativo)", "Inglés (fluido)", "Francés (avanzado)"],
    certifications: [
      "Professional Geoscientist (P.Geo) - APGO Ontario",
      "Qualified Person (QP) - NI 43-101",
      "Certified Professional Geologist - AIPG",
      "Remote Sensing Specialist Certificate"
    ],
    linkedin: "roberto-silva-exploration-geologist"
  },
  {
    id: "4",
    name: "CPA María Fernanda Torres",
    position: "Directora Financiera",
    department: "Finanzas Corporativas",
    bio: "Experta financiera con sólida trayectoria en mercados de capitales y finanzas corporativas en el sector minero. Ha liderado exitosas emisiones de bonos por $500M y estructuración de financiamientos de proyectos por más de $1,200M. Su visión estratégica ha sido clave para mantener la solidez financiera y el crecimiento sostenible de la compañía.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/99e7f1e8-360b-430b-b078-7294b1ef9844.png",
    experience: "20+ años en finanzas corporativas",
    education: [
      "MBA Finance - INSEAD, Francia",
      "CPA - Certified Public Accountant",
      "Contadora Pública - Universidad del Pacífico, Lima"
    ],
    achievements: [
      "Estructuró financiamientos por más de $1,200M",
      "Redujo costo de capital promedio en 180 bps",
      "Implementó sistema ERP SAP en toda la corporación",
      "Mantuvo rating crediticio BBB+ durante crisis COVID",
      "Lideró IPO exitoso en Bolsa de Lima (2020)"
    ],
    specializations: [
      "Finanzas corporativas internacionales",
      "Mercados de capitales y bonos",
      "Evaluación de inversiones mineras",
      "Gestión de riesgos financieros",
      "Reportes financieros internacionales (IFRS)"
    ],
    languages: ["Español (nativo)", "Inglés (fluido)", "Francés (intermedio)"],
    certifications: [
      "CPA - Certified Public Accountant",
      "FRM - Financial Risk Manager",
      "CFA Charterholder Level II",
      "Six Sigma Green Belt"
    ],
    linkedin: "maria-torres-cfo-mining"
  },
  {
    id: "5",
    name: "Dr. Andrés Felipe Rojas",
    position: "Director de Sostenibilidad",
    department: "Desarrollo Sostenible",
    bio: "Líder reconocido en sostenibilidad minera y responsabilidad social corporativa. Ha desarrollado programas ambientales y sociales que han beneficiado a más de 50,000 personas en comunidades mineras. Su enfoque integral de sostenibilidad ha posicionado a Andean Mining como referente en prácticas ESG (Environmental, Social & Governance) en la región.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/43c5901a-12cf-4df0-b979-9c36c7f3fa84.png",
    experience: "18+ años en sostenibilidad minera",
    education: [
      "PhD en Ciencias Ambientales - Universidad de California, Berkeley",
      "M.Sc. Desarrollo Sostenible - Universidad de Cambridge, UK",
      "Ingeniero Ambiental - Universidad Nacional de Colombia"
    ],
    achievements: [
      "Implementó primera operación carbon-neutral de Sudamérica",
      "Desarrolló 25+ programas de desarrollo comunitario",
      "Redujo huella hídrica corporativa en 45%",
      "Certificó 100% de operaciones bajo estándares internacionales",
      "Premio 'Sustainability Leader Award' - World Mining Congress 2023"
    ],
    specializations: [
      "Gestión ambiental minera",
      "Desarrollo comunitario sostenible",
      "Certificaciones ESG internacionales",
      "Economía circular en minería",
      "Biodiversidad y conservación"
    ],
    languages: ["Español (nativo)", "Inglés (fluido)", "Portugués (avanzado)"],
    certifications: [
      "ISO 14001 Lead Auditor",
      "Social Impact Assessment Professional",
      "LEED AP BD+C (Building Design + Construction)",
      "GRI Certified Sustainability Professional"
    ],
    linkedin: "andres-rojas-sustainability-mining"
  },
  {
    id: "6",
    name: "Ing. Jennifer Catherine Walsh",
    position: "Directora de Tecnología",
    department: "Innovación y Tecnología",
    bio: "Experta en transformación digital y tecnologías emergentes aplicadas a la minería. Ha liderado la implementación de IA, IoT, blockchain y realidad aumentada en nuestras operaciones. Su visión tecnológica ha posicionado a Andean Mining como pionera en la adopción de tecnologías Industry 4.0 en Latinoamérica.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3505eed9-f113-41c4-b770-96e68845dea6.png",
    experience: "16+ años en tecnología minera",
    education: [
      "M.Sc. Computer Science - Stanford University, USA",
      "Ingeniería de Sistemas - Tecnológico de Monterrey, México",
      "Executive Education - MIT Media Lab"
    ],
    achievements: [
      "Implementó primera mina 100% conectada de Latinoamérica",
      "Desarrolló plataforma predictiva que redujo downtime 35%",
      "Lideró adopción de blockchain para trazabilidad mineral",
      "Patentó 3 soluciones tecnológicas mineras",
      "Reconocimiento 'Digital Transformation Leader' 2022"
    ],
    specializations: [
      "Inteligencia artificial en minería",
      "Internet of Things (IoT) industrial",
      "Blockchain y trazabilidad",
      "Realidad aumentada/virtual",
      "Ciberseguridad industrial"
    ],
    languages: ["Inglés (nativo)", "Español (fluido)", "Mandarín (básico)"],
    certifications: [
      "Certified Information Security Manager (CISM)",
      "AWS Certified Solutions Architect",
      "Blockchain Professional Certificate - MIT",
      "Scrum Master Certified"
    ],
    linkedin: "jennifer-walsh-mining-technology"
  }
];

export const boardMembers: BoardMember[] = [
  {
    id: "1",
    name: "Sr. Francisco Javier Morales",
    role: "Presidente del Directorio",
    bio: "Empresario y financista con más de 35 años de experiencia en mercados de capitales latinoamericanos. Ex-CEO de importantes grupos financieros y consejero de múltiples empresas públicas.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2355ec6a-50a8-4076-9786-cb2da7779979.png",
    background: "Ex-CEO Banco de Crédito del Perú, ex-Ministro de Economía",
    otherPositions: [
      "Consejero - Grupo Romero",
      "Presidente - Cámara de Comercio Lima",
      "Miembro - World Economic Forum"
    ]
  },
  {
    id: "2",
    name: "Dra. Isabella Marie Dubois",
    role: "Consejera Independiente",
    bio: "Reconocida experta internacional en governance corporativo y sostenibilidad empresarial. PhD en Economía con especialización en mercados emergentes y sector extractivo.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0dc91242-7dd8-40cf-804d-77bc26959730.png",
    background: "Ex-Directora Regional Banco Mundial, consultora internacional",
    otherPositions: [
      "Consejera - Anglo American plc",
      "Asesora - OECD Mining Committee",
      "Profesora - Harvard Business School"
    ]
  },
  {
    id: "3",
    name: "Ing. Ricardo Alberto Estrada",
    role: "Consejero",
    bio: "Ingeniero de minas con vasta experiencia operacional en proyectos mineros de gran escala. Ex-CEO de importantes compañías mineras internacionales con operaciones en 5 continentes.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b3b9bb37-c80e-4337-841a-301f8f772a79.png",
    background: "Ex-CEO Southern Copper, ex-VP Freeport-McMoRan",
    otherPositions: [
      "Consejero - Cerro Verde",
      "Asesor - Mining Council Australia",
      "Mentor - Young Mining Professionals"
    ]
  }
];

export const advisoryBoard = [
  {
    name: "Prof. Michael Chen",
    role: "Asesor en Tecnología Minera",
    institution: "Colorado School of Mines"
  },
  {
    name: "Dra. Ana Lucía Herrera",
    role: "Asesora en Asuntos Regulatorios",
    institution: "Ex-Ministra de Energía y Minas de Perú"
  },
  {
    name: "Sr. David Thompson",
    role: "Asesor en Mercados Internacionales",
    institution: "Ex-VP BHP Billiton"
  }
];