export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: string;
  image: string;
  features: string[];
  capabilities: string[];
  equipment: string[];
  experience: string;
  projects: number;
}

export const servicesData: Service[] = [
  {
    id: "1",
    title: "Exploración Geológica",
    slug: "exploracion-geologica",
    description: "Identificación y evaluación de depósitos minerales usando tecnología avanzada y metodologías probadas.",
    longDescription: "Nuestro equipo de geólogos expertos utiliza las técnicas más avanzadas de exploración para identificar, evaluar y cuantificar recursos minerales. Desde estudios geológicos regionales hasta perforación diamantina de precisión, ofrecemos servicios integrales de exploración.",
    icon: "🔍",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5cb14d7f-3730-41f5-b4f6-1c71a1f9045a.png",
    features: [
      "Mapeo geológico detallado",
      "Análisis geoquímico y geofísico",
      "Perforación diamantina y RC",
      "Modelamiento 3D de recursos",
      "Estudios de factibilidad",
      "Evaluación de reservas"
    ],
    capabilities: [
      "20+ geólogos certificados",
      "Equipos de perforación de última generación",
      "Laboratorios certificados ISO",
      "Software especializado (Leapfrog, Vulcan)",
      "Drones y tecnología LiDAR",
      "Análisis petrográfico avanzado"
    ],
    equipment: [
      "Perforadoras diamantinas Atlas Copco",
      "Equipos geofísicos Geometrics",
      "Drones DJI Matrice 300 RTK",
      "Espectrómetros portátiles XRF",
      "Estación total Leica",
      "Laboratorio móvil certificado"
    ],
    experience: "25+ años",
    projects: 120
  },
  {
    id: "2",
    title: "Extracción Minera",
    slug: "extraccion-minera",
    description: "Operaciones de minado a cielo abierto y subterráneo con los más altos estándares de seguridad y eficiencia.",
    longDescription: "Desarrollamos y operamos minas tanto a cielo abierto como subterráneas, aplicando las mejores prácticas internacionales de seguridad y eficiencia operacional. Nuestro enfoque integral incluye planificación de minado, voladura controlada y transporte optimizado.",
    icon: "⛏️",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9ed5bd13-9c5f-4213-9440-522d92bbf8d9.png",
    features: [
      "Minado a cielo abierto",
      "Minado subterráneo",
      "Voladura controlada",
      "Transporte de mineral",
      "Control de calidad",
      "Gestión de estériles"
    ],
    capabilities: [
      "Flota de 85 equipos pesados",
      "Capacidad: 50,000 ton/día",
      "Tecnología GPS en toda la flota",
      "Sistema de despacho automatizado",
      "Monitoreo 24/7 en tiempo real",
      "Certificaciones de seguridad internacionales"
    ],
    equipment: [
      "Excavadoras Caterpillar 390F",
      "Camiones mineros Komatsu 830E",
      "Perforadoras Atlas Copco ROC D7",
      "Cargadores frontales CAT 992K",
      "Palas eléctricas P&H 2800XPC",
      "Equipos auxiliares especializados"
    ],
    experience: "28+ años",
    projects: 35
  },
  {
    id: "3",
    title: "Procesamiento de Minerales",
    slug: "procesamiento-minerales",
    description: "Plantas de procesamiento de última generación para concentración, refinación y recuperación de minerales.",
    longDescription: "Operamos plantas de procesamiento con tecnología de punta para la concentración y refinación de diversos minerales. Nuestros procesos incluyen trituración, molienda, flotación, cianuración y fundición, optimizando la recuperación metalúrgica.",
    icon: "🏭",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f90250b8-f0a9-45f1-9fe1-3b30f0c2afd2.png",
    features: [
      "Trituración y molienda",
      "Concentración por flotación",
      "Cianuración en heap leach",
      "Refinación electrolítica",
      "Fundición y moldeo",
      "Control de calidad metalúrgico"
    ],
    capabilities: [
      "5 plantas de procesamiento",
      "Capacidad: 15,000 ton/día",
      "Recuperación promedio: 94.5%",
      "Laboratorios metalúrgicos certificados",
      "Sistema de control DCS",
      "Gestión integral de efluentes"
    ],
    equipment: [
      "Chancadoras giratorias Metso",
      "Molinos SAG y de bolas FLSmidth",
      "Celdas de flotación Outotec",
      "Espesadores de alta velocidad",
      "Filtros prensa automáticos",
      "Sistemas de instrumentación Honeywell"
    ],
    experience: "23+ años",
    projects: 18
  },
  {
    id: "4",
    title: "Consultoría Minera",
    slug: "consultoria-minera",
    description: "Asesoría especializada en proyectos mineros, estudios de factibilidad y optimización de operaciones.",
    longDescription: "Ofrecemos servicios de consultoría especializada para proyectos mineros en todas sus fases. Nuestro equipo multidisciplinario brinda asesoría en evaluación de proyectos, optimización operacional, estudios ambientales y debido diligencias técnicas.",
    icon: "📊",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fcc352b0-a642-48ed-89ea-1cbc4a81d5bc.png",
    features: [
      "Estudios de pre-factibilidad",
      "Due diligence técnico",
      "Optimización operacional",
      "Evaluación de inversiones",
      "Estudios de impacto ambiental",
      "Gestión de proyectos"
    ],
    capabilities: [
      "50+ consultores especializados",
      "Experiencia internacional",
      "Metodologías probadas",
      "Tecnología de modelamiento avanzada",
      "Red de socios estratégicos",
      "Certificaciones internacionales"
    ],
    equipment: [
      "Software Whittle para optimización",
      "Leapfrog Geo para modelamiento",
      "Vulcan para planificación",
      "AutoCAD Plant 3D",
      "ANSYS para simulaciones",
      "Primavera P6 para proyectos"
    ],
    experience: "28+ años",
    projects: 200
  },
  {
    id: "5",
    title: "Gestión Ambiental",
    slug: "gestion-ambiental",
    description: "Soluciones integrales para el manejo responsable del impacto ambiental en operaciones mineras.",
    longDescription: "Desarrollamos y implementamos programas ambientales comprehensivos que aseguran el cumplimiento de normativas y la protección del ecosistema. Nuestro enfoque incluye monitoreo continuo, remediación y restauración de áreas intervenidas.",
    icon: "🌱",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/688ae8fe-4c97-4e58-8a2f-04feb9d17dbd.png",
    features: [
      "Monitoreo ambiental continuo",
      "Tratamiento de aguas residuales",
      "Gestión de relaves",
      "Restauración de ecosistemas",
      "Control de emisiones",
      "Programas de biodiversidad"
    ],
    capabilities: [
      "Laboratorio ambiental certificado",
      "Red de monitoreo automatizada",
      "Tecnologías de tratamiento avanzadas",
      "Programas de reforestación",
      "Sistemas de gestión ISO 14001",
      "Planes de cierre certificados"
    ],
    equipment: [
      "Plantas de tratamiento modernas",
      "Estaciones meteorológicas automáticas",
      "Equipos de monitoreo de calidad de agua",
      "Sistemas de revegetación",
      "Drones para monitoreo aéreo",
      "Sensores de calidad de aire"
    ],
    experience: "20+ años",
    projects: 28
  },
  {
    id: "6",
    title: "Desarrollo Comunitario",
    slug: "desarrollo-comunitario",
    description: "Programas de inversión social que generan desarrollo sostenible en las comunidades locales.",
    longDescription: "Implementamos programas de responsabilidad social que contribuyen al desarrollo sostenible de las comunidades en nuestras áreas de influencia. Trabajamos en educación, salud, infraestructura y fortalecimiento de capacidades locales.",
    icon: "🤝",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c2e26a01-a35b-40ac-9ebe-93e7baa00d35.png",
    features: [
      "Programas educativos",
      "Centros de salud comunitarios",
      "Infraestructura básica",
      "Capacitación técnica",
      "Microemprendimientos",
      "Preservación cultural"
    ],
    capabilities: [
      "25 programas activos",
      "15,000 beneficiarios directos",
      "Alianzas estratégicas con ONGs",
      "Metodologías participativas",
      "Monitoreo de impacto social",
      "Certificación en estándares internacionales"
    ],
    equipment: [
      "Centros de capacitación móviles",
      "Equipos médicos especializados",
      "Tecnología educativa",
      "Maquinaria para infraestructura",
      "Sistemas de comunicación",
      "Vehículos para trabajo de campo"
    ],
    experience: "25+ años",
    projects: 85
  }
];

export const serviceCategories = [
  "Exploración",
  "Extracción", 
  "Procesamiento",
  "Consultoría",
  "Ambiental",
  "Social"
];