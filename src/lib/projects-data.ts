export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  location: {
    country: string;
    region: string;
    coordinates: string;
  };
  status: 'completed' | 'ongoing' | 'planning';
  startDate: string;
  endDate?: string;
  minerals: string[];
  type: 'open-pit' | 'underground' | 'processing' | 'exploration';
  investment: string;
  image: string;
  gallery: string[];
  metrics: {
    production?: string;
    reserves?: string;
    workforce?: number;
    area?: string;
    depth?: string;
  };
  achievements: string[];
  challenges: string[];
  technologies: string[];
  sustainabilityFeatures: string[];
  communityPrograms: string[];
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Proyecto Andes Gold",
    slug: "andes-gold",
    description: "Mina de oro a cielo abierto de clase mundial en la sierra central del Perú, con producción de 12,000 oz/año.",
    longDescription: "Andes Gold representa nuestro proyecto insignia de extracción aurífera, ubicado en la región andina del Perú. Con una inversión superior a los $280 millones, este proyecto ha establecido nuevos estándares en la industria minera peruana, combinando tecnología de punta con prácticas sostenibles. La operación incluye una mina a cielo abierto con procesamiento por heap leach y planta ADR.",
    location: {
      country: "Perú",
      region: "Junín",
      coordinates: "-11.1612, -75.9956"
    },
    status: "completed",
    startDate: "2019",
    endDate: "2023",
    minerals: ["Oro", "Plata"],
    type: "open-pit",
    investment: "$280M USD",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2debe581-7ab1-453e-9ad9-36fa45ee2b37.png",
    gallery: [
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/54735037-55c8-4bab-85e4-cf930a642d82.png",
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/02713df1-f26e-4f9f-b628-d8b86a33cd04.png",
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/06932fda-520c-4c5a-9455-c4f852929ab6.png"
    ],
    metrics: {
      production: "48,000 oz Au total",
      reserves: "1.2M oz Au probadas",
      workforce: 450,
      area: "2,400 hectáreas",
      depth: "180 metros"
    },
    achievements: [
      "Superó proyecciones de producción en 15%",
      "Zero accidentes fatales en 4 años de operación",
      "Certificación ISO 14001 y 45001",
      "95% de empleabilidad local",
      "Restauración de 800 hectáreas",
      "Inversión social de $12M USD"
    ],
    challenges: [
      "Operación a 4,200 metros sobre el nivel del mar",
      "Condiciones climáticas extremas (temporada de lluvias)",
      "Logística compleja para transporte de equipos",
      "Coordinación con 8 comunidades campesinas",
      "Gestión de recursos hídricos en zona árida"
    ],
    technologies: [
      "Heap Leach con sistema de riego por goteo",
      "Planta ADR (Adsorption-Desorption-Recovery)",
      "Sistema de monitoreo geotécnico en tiempo real",
      "Flota autónoma de camiones CAT 797F",
      "Software de optimización MineSight",
      "Drones para topografía y monitoreo ambiental"
    ],
    sustainabilityFeatures: [
      "Uso de energía solar (30% del consumo)",
      "Reciclaje de agua al 85%",
      "Plan de cierre progresivo implementado",
      "Monitoreo continuo de calidad de agua",
      "Reforestación con especies nativas",
      "Compensación de huella de carbono"
    ],
    communityPrograms: [
      "Programa de becas universitarias",
      "Centro de salud comunitario",
      "Capacitación en agricultura sostenible",
      "Infraestructura vial mejorada",
      "Programa de emprendimientos locales",
      "Preservación de sitios arqueológicos"
    ]
  },
  {
    id: "2",
    title: "Copper Valley",
    slug: "copper-valley",
    description: "Operación integrada de cobre en el norte de Chile con capacidad de 80,000 toneladas anuales de concentrado.",
    longDescription: "Copper Valley es nuestro proyecto estrella en Chile, una operación integrada que incluye mina subterránea, planta concentradora y puerto de embarque. Con tecnología de automatización avanzada y procesos optimizados, este proyecto establece nuevos benchmarks en eficiencia operacional y gestión ambiental para la minería del cobre.",
    location: {
      country: "Chile",
      region: "Antofagasta",
      coordinates: "-24.5275, -69.2447"
    },
    status: "ongoing",
    startDate: "2020",
    minerals: ["Cobre", "Molibdeno", "Plata"],
    type: "underground",
    investment: "$450M USD",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cdfcc7c3-81bf-4d8d-bffe-80a5cd3f34ea.png",
    gallery: [
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1f8a5733-63b4-4494-8c44-2c6fed6abd84.png",
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/20fe66c4-40f2-49b8-808e-95e991c52f5d.png",
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f7cc7f1b-9dc2-45d4-aa70-fb3c84cfd317.png"
    ],
    metrics: {
      production: "80,000 ton/año concentrado Cu",
      reserves: "12M ton Cu equivalente",
      workforce: 1200,
      area: "15,000 hectáreas concesión",
      depth: "650 metros bajo superficie"
    },
    achievements: [
      "Primera mina 100% automatizada en Chile",
      "Récord de seguridad: 2.8M horas sin accidentes",
      "Certificación ICMM (International Council on Mining)",
      "85% de proveedores locales",
      "Planta desalinizadora propia (30,000 m³/día)",
      "Carbon neutral desde 2022"
    ],
    challenges: [
      "Condiciones extremas del desierto de Atacama",
      "Escasez hídrica regional crítica",
      "Infraestructura en zona remota",
      "Fluctuaciones de precios internacionales",
      "Gestión de relaves en zona sísmica"
    ],
    technologies: [
      "Minado por bloques cave automatizado",
      "Flotación columnar de alta eficiencia",
      "Sistema de transporte por mineroducto",
      "Inteligencia artificial para optimización",
      "Realidad aumentada para mantenimiento",
      "Blockchain para trazabilidad del mineral"
    ],
    sustainabilityFeatures: [
      "100% energía renovable (solar + eólica)",
      "Agua desalinizada (cero uso de agua dulce)",
      "Economía circular en gestión de residuos",
      "Biodiversidad: 5 especies endémicas protegidas",
      "Certificación LEED Gold en instalaciones",
      "Captura y almacenamiento de CO2"
    ],
    communityPrograms: [
      "Universidad técnica minera regional",
      "Hospital de especialidades",
      "Programa de desarrollo de PyMEs",
      "Conservación del patrimonio atacameño",
      "Incubadora de startups tecnológicas",
      "Red de turismo sostenible"
    ]
  },
  {
    id: "3",
    title: "Silver Heights",
    slug: "silver-heights",
    description: "Complejo minero de plata de alta ley en Bolivia con procesamiento integral y refinería propia.",
    longDescription: "Silver Heights es nuestro proyecto más ambicioso en Bolivia, combinando minado subterráneo selectivo con procesamiento hidrometalúrgico avanzado. La operación incluye una refinería que produce plata doré de 999 fineza, positioning al proyecto como un referente en la región andina boliviana.",
    location: {
      country: "Bolivia",
      region: "Potosí",
      coordinates: "-19.5723, -65.7550"
    },
    status: "completed",
    startDate: "2021",
    endDate: "2024",
    minerals: ["Plata", "Plomo", "Zinc"],
    type: "underground",
    investment: "$180M USD",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/408cc23d-666c-4261-a1e9-8c959a8b9ead.png",
    gallery: [
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c0d807f7-db89-40f8-b383-8717893491a9.png",
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/75419535-f360-4014-a32e-2544113f6b69.png",
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9f262ee7-4ee4-4967-9a31-60fa5b2b742a.png"
    ],
    metrics: {
      production: "2.4M oz Ag/año",
      reserves: "28M oz Ag total",
      workforce: 680,
      area: "8,500 hectáreas",
      depth: "420 metros"
    },
    achievements: [
      "Mayor productor de plata en Bolivia (2022-2024)",
      "Tecnología de procesamiento más avanzada del país",
      "99.2% de recuperación metalúrgica",
      "Programa de capacitación técnica más extenso",
      "Primera operación carbon neutral en Bolivia",
      "Alianza estratégica con universidades locales"
    ],
    challenges: [
      "Altitud extrema (4,800 metros sobre el mar)",
      "Infraestructura limitada en región remota",
      "Condiciones sociopolíticas complejas",
      "Temporadas climáticas adversas",
      "Logística internacional para exportación"
    ],
    technologies: [
      "Método de minado sublevel stoping",
      "Lixiviación con tiosulfato (eco-friendly)",
      "Refinería electrowinning de alta pureza",
      "Sensores IoT para monitoreo continuo",
      "Ventilación automatizada con AI",
      "Sistema de comunicación satelital"
    ],
    sustainabilityFeatures: [
      "Energía hidroeléctrica renovable (90%)",
      "Tratamiento avanzado de efluentes",
      "Restauración de ecosistemas altoandinos",
      "Conservación de vicuñas y llamas",
      "Arquitectura bioclimática en instalaciones",
      "Compensaciones ambientales certificadas"
    ],
    communityPrograms: [
      "Centro de capacitación técnica minera",
      "Programa de salud materno-infantil",
      "Mejoramiento de infraestructura educativa",
      "Apoyo a cooperativas de quinua",
      "Conservación de tradiciones culturales",
      "Microcréditos para mujeres emprendedoras"
    ]
  },
  {
    id: "4",
    title: "Titanium Coastal",
    slug: "titanium-coastal",
    description: "Proyecto de exploración de minerales pesados en la costa pacífica con tecnología sostenible.",
    longDescription: "Proyecto innovador de extracción de minerales pesados (titanio, circón, rutilo) utilizando técnicas de minería no invasiva en playas. Este proyecto piloto representa nuestro compromiso con la diversificación y la aplicación de tecnologías de bajo impacto ambiental.",
    location: {
      country: "Ecuador",
      region: "Manabí",
      coordinates: "-0.9513, -80.7224"
    },
    status: "planning",
    startDate: "2024",
    minerals: ["Titanio", "Circón", "Rutilo", "Ilmenita"],
    type: "exploration",
    investment: "$85M USD",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4c97d676-0bcb-445d-aa99-8469b096a1c4.png",
    gallery: [
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a7dcc46e-0673-47c9-b090-f1d5bb5e6b7a.png",
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7f6c69c9-9951-42de-ba6f-bc89c8d8bfe6.png",
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1bc9fe6e-dfb8-4115-b9eb-cfb7deb57cf1.png"
    ],
    metrics: {
      reserves: "2.8M ton minerales pesados",
      workforce: 120,
      area: "25 km de costa",
      depth: "12 metros promedio"
    },
    achievements: [
      "Primer proyecto de minerales pesados en Ecuador",
      "Tecnología 100% reversible y sostenible",
      "Alianza con universidades internacionales",
      "Estudio de impacto ambiental aprobado",
      "Certificación pre-operacional FSC",
      "Modelo piloto para la región"
    ],
    challenges: [
      "Regulación ambiental estricta",
      "Sensibilidad ecológica marina",
      "Comunidades pesqueras tradicionales",
      "Estacionalidad climática (El Niño)",
      "Tecnología nueva en la región"
    ],
    technologies: [
      "Extracción por succión hidráulica controlada",
      "Separación magnética de alta intensidad",
      "Monitoreo submarino con ROV",
      "Restauración inmediata de playas",
      "GPS de alta precisión para mapeo",
      "Sistemas de procesamiento móviles"
    ],
    sustainabilityFeatures: [
      "Impacto cero en ecosistemas marinos",
      "Restauración inmediata post-extracción",
      "Energía 100% solar y eólica marina",
      "Monitoreo continuo de biodiversidad",
      "Compensaciones ambientales marinas",
      "Certificación de pesca sostenible regional"
    ],
    communityPrograms: [
      "Capacitación en turismo ecológico",
      "Fortalecimiento de cooperativas pesqueras",
      "Programa de becas universitarias",
      "Centro de investigación marina",
      "Infraestructura portuaria comunitaria",
      "Conservación de tortugas marinas"
    ]
  },
  {
    id: "5",
    title: "Lithium Salar",
    slug: "lithium-salar",
    description: "Proyecto de extracción sostenible de litio en salares andinos para la industria de baterías.",
    longDescription: "Proyecto estratégico para la extracción de litio de salmueras en los salares andinos, utilizando tecnología de evaporación solar y extracción directa. Este proyecto posiciona a nuestra empresa en el mercado de minerales críticos para la transición energética global.",
    location: {
      country: "Chile",
      region: "Atacama",
      coordinates: "-23.8537, -68.2593"
    },
    status: "ongoing",
    startDate: "2023",
    minerals: ["Litio", "Potasio", "Boro"],
    type: "processing",
    investment: "$320M USD",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4b8f3501-1644-4ba1-9a38-c214808ef8e1.png",
    gallery: [
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5183154c-5f24-4a03-926b-4f0dc2f7b5e3.png",
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/19cebb7b-0edd-47ff-920b-e6d4ace9d9aa.png",
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/94e0ac32-fe06-403f-8afb-a91f25f094d8.png"
    ],
    metrics: {
      production: "25,000 ton LCE/año (proyectado)",
      reserves: "2.1M ton LCE",
      workforce: 380,
      area: "80,000 hectáreas",
      depth: "200 metros de salmueras"
    },
    achievements: [
      "Tecnología DLE (Direct Lithium Extraction) pionera",
      "Acuerdos con fabricantes de baterías Tesla/BYD",
      "Certificación de sustentabilidad SQM",
      "Alianza con comunidades atacameñas",
      "Pre-aprobación ambiental expedita",
      "Financiamiento verde internacional"
    ],
    challenges: [
      "Competencia intensa por recursos de litio",
      "Regulación ambiental del agua en el desierto",
      "Derechos de comunidades indígenas",
      "Volatilidad de precios de litio",
      "Tecnología DLE en fase de escalamiento"
    ],
    technologies: [
      "Extracción directa de litio (DLE)",
      "Evaporación solar optimizada",
      "Plantas de procesamiento modular",
      "Monitoreo satelital de salmueras",
      "Inteligencia artificial para optimización",
      "Membranas selectivas avanzadas"
    ],
    sustainabilityFeatures: [
      "Consumo mínimo de agua dulce",
      "Energía 100% renovable (solar concentrada)",
      "Protección de flamencos y vicuñas",
      "Acuerdos de uso sustentable con comunidades",
      "Reciclaje de salmueras al ecosistema",
      "Certificación de litio responsable"
    ],
    communityPrograms: [
      "Royalties directos a comunidades atacameñas",
      "Programa de turismo astronómico",
      "Centro de investigación en energías limpias",
      "Conservación de sitios arqueológicos",
      "Capacitación en energías renovables",
      "Fondo de desarrollo comunitario"
    ]
  }
];

export const projectCategories = [
  "Todos",
  "Exploración",
  "Extracción",
  "Procesamiento",
  "Consultoría"
];

export const projectStatus = [
  "Todos",
  "Planificación",
  "En Curso", 
  "Completado"
];

export const projectCountries = [
  "Todos",
  "Perú",
  "Chile", 
  "Bolivia",
  "Ecuador"
];