export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishDate: string;
  readTime: string;
  image: string;
  tags: string[];
  featured: boolean;
}

export const newsData: NewsArticle[] = [
  {
    id: "1",
    title: "Andean Mining Logra Certificación Carbon Neutral en Proyecto Copper Valley",
    slug: "certificacion-carbon-neutral-copper-valley",
    excerpt: "Nuestra operación en Chile se convierte en la primera mina de cobre carbon neutral de Sudamérica, estableciendo un nuevo estándar en minería sostenible.",
    content: `Andean Mining Corporation anuncia con orgullo que su proyecto Copper Valley en Chile ha obtenido la certificación Carbon Neutral, convirtiéndose en la primera operación minera de cobre en Sudamérica en alcanzar este hito histórico.

    La certificación, otorgada por la Organización Internacional de Estándares Ambientales (IOEA), reconoce los esfuerzos extraordinarios de la compañía en reducir su huella de carbono y compensar completamente sus emisiones restantes a través de proyectos verificados de conservación y reforestación.

    "Este logro representa más que una certificación; es una demostración tangible de nuestro compromiso con el futuro sostenible de la minería", comentó el Dr. Carlos Eduardo Mendoza, CEO de Andean Mining. "Copper Valley no solo produce cobre de la más alta calidad, sino que lo hace sin contribuir al cambio climático".

    ## Logros Destacados

    El proyecto ha implementado múltiples iniciativas innovadoras:
    - **100% Energía Renovable**: Toda la operación funciona con energía solar y eólica
    - **Eficiencia Energética**: Reducción del 35% en consumo energético mediante tecnología avanzada
    - **Compensaciones Verificadas**: 150,000 toneladas de CO2 compensadas anualmente
    - **Tecnología Limpia**: Implementación de equipos de alta eficiencia y bajas emisiones

    La Dra. Andrés Felipe Rojas, Director de Sostenibilidad, añadió: "Esta certificación valida nuestro enfoque holístico hacia la sostenibilidad. No se trata solo de extraer minerales, sino de hacerlo de manera responsable con el planeta".

    ## Impacto en la Industria

    La certificación posiciona a Andean Mining como líder en prácticas mineras sostenibles y establece un precedente para otras operaciones en la región. El proyecto ha atraído la atención de inversionistas internacionales enfocados en ESG (Environmental, Social & Governance) y ha fortalecido las relaciones con comunidades locales.

    El logro también ha resultado en importantes beneficios económicos, incluyendo acceso a financiamiento verde y premium en precios de productos para compradores comprometidos con la sostenibilidad.`,
    category: "Sostenibilidad",
    author: "Equipo de Comunicaciones",
    publishDate: "2024-01-15",
    readTime: "5 min",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/eb4f2de4-8b6a-4de9-8983-15a71ca7c89c.png",
    tags: ["Sostenibilidad", "Carbon Neutral", "Copper Valley", "Chile", "Certificación"],
    featured: true
  },
  {
    id: "2",
    title: "Récord de Producción: 180,000 Toneladas de Concentrado en 2023",
    slug: "record-produccion-2023",
    excerpt: "Andean Mining supera proyecciones anuales alcanzando un nuevo récord histórico de producción con 180,000 toneladas de concentrado de cobre.",
    content: `Andean Mining Corporation reporta resultados operacionales excepcionales para el año 2023, alcanzando una producción récord de 180,000 toneladas de concentrado de cobre, superando en 20% las proyecciones iniciales y estableciendo un nuevo hito en la historia de la compañía.

    Los resultados destacan el desempeño sobresaliente de nuestras operaciones integradas, con Copper Valley contribuyendo 80,000 toneladas y nuestras operaciones peruanas aportando 100,000 toneladas adicionales.

    ## Factores del Éxito

    El récord de producción se atribuye a varios factores clave:
    - **Optimización Operacional**: Implementación de IA para optimización de procesos
    - **Nuevas Tecnologías**: Adopción de equipos de alta eficiencia
    - **Capacitación de Personal**: Programas intensivos de desarrollo profesional
    - **Mantenimiento Predictivo**: Reducción de paradas no programadas en 45%

    "Estos resultados excepcionales reflejan la dedicación de nuestro equipo y la efectividad de nuestras estrategias de optimización", comentó Patricia Alexandra Vásquez, Directora de Operaciones. "La implementación de tecnologías Industry 4.0 ha transformado fundamentalmente nuestra eficiencia operacional".

    ## Impacto Financiero

    El récord de producción se traduce en resultados financieros robustos:
    - **Ingresos**: $450M USD (incremento del 25% vs. 2022)
    - **EBITDA**: $180M USD (margen del 40%)
    - **Flujo de Caja Libre**: $95M USD
    - **Reinversión**: $60M USD en proyectos de expansión

    ## Perspectivas 2024

    Para 2024, la compañía proyecta mantener niveles de producción similares mientras avanza en nuevos proyectos de desarrollo. El enfoque continúa en la optimización sostenible y la implementación de tecnologías avanzadas.`,
    category: "Operaciones",
    author: "Departamento de Operaciones",
    publishDate: "2024-01-08",
    readTime: "4 min",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0aaef1ec-02ca-4c6b-af78-3b7209a2847c.png",
    tags: ["Producción", "Récord", "Copper Valley", "Operaciones", "2023"],
    featured: true
  },
  {
    id: "3",
    title: "Expansión Internacional: Nuevo Proyecto en Ecuador Recibe Aprobación",
    slug: "expansion-ecuador-aprobacion",
    excerpt: "El proyecto Titanium Coastal en la costa pacífica ecuatoriana obtiene aprobación ambiental para iniciar operaciones de exploración de minerales pesados.",
    content: `El Ministerio del Ambiente de Ecuador ha otorgado la aprobación ambiental para el proyecto Titanium Coastal de Andean Mining, marcando un hito importante en la expansión internacional de la compañía hacia mercados de minerales especializados.

    El proyecto representa una inversión inicial de $85M USD y se enfoca en la exploración y eventual extracción sostenible de minerales pesados (titanio, circón, rutilo) utilizando tecnologías no invasivas en el ecosistema costero.

    ## Características del Proyecto

    Titanium Coastal se distingue por su enfoque revolucionario:
    - **Tecnología Sostenible**: Extracción por succión hidráulica controlada
    - **Impacto Mínimo**: Restauración inmediata de áreas intervenidas
    - **Energía Renovable**: 100% energía solar y eólica marina
    - **Monitoreo Continuo**: Sistemas avanzados de monitoreo ambiental

    "Este proyecto representa la evolución de la minería hacia prácticas completamente sostenibles", explicó el Dr. Roberto James Silva, Director de Exploración. "Estamos demostrando que es posible extraer recursos valiosos sin comprometer el medio ambiente".

    ## Beneficios Comunitarios

    El proyecto incluye programas extensivos de desarrollo comunitario:
    - Capacitación en turismo ecológico para pescadores locales
    - Centro de investigación marina
    - Infraestructura portuaria comunitaria
    - Programas de conservación de tortugas marinas

    ## Minerales Estratégicos

    Los minerales pesados representan un mercado de alto valor:
    - **Titanio**: Industria aeroespacial y médica
    - **Circón**: Cerámicas avanzadas y refractarios
    - **Rutilo**: Pigmentos y soldaduras especiales

    Las reservas estimadas alcanzan 2.8 millones de toneladas de minerales pesados, con potencial de producción por 15+ años.

    La primera fase de exploración iniciará en marzo 2024, con producción comercial proyectada para 2026.`,
    category: "Expansión",
    author: "Departamento de Desarrollo de Proyectos",
    publishDate: "2023-12-20",
    readTime: "6 min",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b1d2f26b-0b05-40b6-ba1f-7960831b7b05.png",
    tags: ["Ecuador", "Expansión", "Minerales Pesados", "Sostenibilidad", "Titanio"],
    featured: true
  },
  {
    id: "4",
    title: "Innovación Tecnológica: IA Revoluciona Operaciones Mineras",
    slug: "inteligencia-artificial-operaciones",
    excerpt: "Implementación de sistemas de inteligencia artificial incrementa eficiencia operacional en 35% y reduce costos de mantenimiento en $12M anuales.",
    content: `Andean Mining marca un hito en la transformación digital del sector minero con la implementación exitosa de sistemas de inteligencia artificial (IA) que han revolucionado las operaciones en todas sus instalaciones.

    La iniciativa, liderada por Jennifer Catherine Walsh, Directora de Tecnología, ha resultado en mejoras significativas en eficiencia, seguridad y rentabilidad.

    ## Resultados Impresionantes

    Los sistemas de IA implementados han generado beneficios tangibles:
    - **Eficiencia Operacional**: Incremento del 35% en productividad general
    - **Mantenimiento Predictivo**: Reducción de paradas no programadas en 60%
    - **Ahorro de Costos**: $12M USD anuales en optimizaciones
    - **Seguridad Mejorada**: Reducción de incidentes de seguridad en 50%

    ## Tecnologías Implementadas

    ### Sistema de Optimización de Flota
    Algoritmos avanzados optimizan rutas y cargas de camiones mineros en tiempo real, resultando en:
    - 25% menos consumo de combustible
    - 30% mayor utilización de equipos
    - Reducción de tiempos muertos

    ### Mantenimiento Predictivo
    Sensores IoT y machine learning predicen fallas antes de que ocurran:
    - 10,000+ sensores instalados
    - Predicción de fallas con 95% de precisión
    - Programación óptima de mantenimiento

    ### Control de Calidad Automatizado
    Sistemas de visión computarizada analizan mineral en tiempo real:
    - Detección automática de impurezas
    - Optimización de procesos de concentración
    - Mejora en recuperación metalúrgica

    "La IA no está reemplazando a nuestros trabajadores; está potenciando sus capacidades y creando trabajos más especializados y seguros", explicó Walsh. "Hemos capacitado a 500+ empleados en nuevas tecnologías".

    ## Proyecciones Futuras

    Para 2024, la compañía planea expandir la implementación de IA a:
    - Exploración geológica automatizada
    - Optimización energética avanzada
    - Monitoreo ambiental inteligente
    - Simulaciones de seguridad virtual

    La inversión en IA representa $25M USD durante tres años, con ROI proyectado del 300%.`,
    category: "Tecnología",
    author: "Jennifer Walsh - Directora de Tecnología",
    publishDate: "2023-12-15",
    readTime: "7 min",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a24a4475-14ef-4aec-aec0-dc076f7b8b72.png",
    tags: ["Inteligencia Artificial", "Tecnología", "Innovación", "Automatización", "Eficiencia"],
    featured: false
  },
  {
    id: "5",
    title: "Compromiso Social: $15M USD Invertidos en Desarrollo Comunitario",
    slug: "inversion-desarrollo-comunitario",
    excerpt: "Andean Mining destina $15 millones a programas de desarrollo social, beneficiando directamente a 25,000 personas en comunidades mineras.",
    content: `Andean Mining reafirma su compromiso con el desarrollo social sostenible anunciando una inversión de $15M USD en programas comunitarios durante 2024, beneficiando directamente a 25,000 personas en las regiones donde opera.

    Los programas, desarrollados bajo la dirección del Dr. Andrés Felipe Rojas, abarcan educación, salud, infraestructura y desarrollo económico local.

    ## Programas Destacados

    ### Educación y Capacitación
    - **Universidad Técnica Minera**: Formación especializada para jóvenes locales
    - **Becas Universitarias**: 200 becas anuales para estudios superiores
    - **Centros de Capacitación**: 8 centros en comunidades rurales
    - **Alfabetización Digital**: Programas para adultos mayores

    ### Salud Comunitaria
    - **Centros de Salud**: 5 centros médicos equipados
    - **Brigadas Médicas**: Atención en comunidades remotas
    - **Programas de Prevención**: Campañas de salud preventiva
    - **Nutrición Infantil**: Programas para combatir la desnutrición

    ### Infraestructura Básica
    - **Agua Potable**: Sistemas de agua para 12 comunidades
    - **Energía Renovable**: Paneles solares en escuelas rurales
    - **Caminos Rurales**: 150 km de caminos mejorados
    - **Comunicaciones**: Torres de telecomunicaciones

    ### Desarrollo Económico
    - **Microemprendimientos**: Financiamiento para 500 pequeños negocios
    - **Cooperativas Agrícolas**: Apoyo técnico y financiero
    - **Turismo Comunitario**: Desarrollo de rutas turísticas sostenibles
    - **Artesanías Locales**: Comercialización de productos tradicionales

    "Nuestro éxito empresarial debe traducirse en desarrollo real para las comunidades", comentó Rojas. "Estos programas no son asistencia; son inversión en el futuro compartido de nuestras regiones".

    ## Medición de Impacto

    Los programas incluyen sistemas rigurosos de medición:
    - **Indicadores Sociales**: Mejoras en educación, salud e ingresos
    - **Evaluación Independiente**: Auditorías de impacto por terceros
    - **Participación Comunitaria**: Las comunidades evalúan los programas
    - **Transparencia**: Reportes públicos trimestrales

    ## Reconocimientos

    Los programas han recibido reconocimiento internacional:
    - Premio "Excellence in Community Development" - Mining Association
    - Certificación "Social Impact Verified" - Global Reporting Initiative
    - Mención especial - UN Global Compact

    Para 2025, la compañía planea incrementar la inversión social a $20M USD, expandiendo programas exitosos y desarrollando nuevas iniciativas comunitarias.`,
    category: "Responsabilidad Social",
    author: "Dr. Andrés Felipe Rojas",
    publishDate: "2023-12-10",
    readTime: "6 min",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/93a5bd64-d93f-4fbe-8923-1ba608554d3d.png",
    tags: ["Desarrollo Social", "Comunidades", "Inversión Social", "RSC", "Educación"],
    featured: false
  },
  {
    id: "6",
    title: "Alianza Estratégica con Tesla para Suministro de Litio Sostenible",
    slug: "alianza-tesla-litio-sostenible",
    excerpt: "Acuerdo de suministro a 5 años con Tesla garantiza demanda para proyecto Lithium Salar, reforzando posición en minerales críticos para vehículos eléctricos.",
    content: `Andean Mining anuncia una alianza estratégica con Tesla Inc. para el suministro de carbonato de litio grado batería proveniente del proyecto Lithium Salar, consolidando la posición de la compañía en el mercado de minerales críticos para la transición energética.

    El acuerdo, valorado en $180M USD durante 5 años, garantiza el suministro de 25,000 toneladas anuales de litio con certificación de sostenibilidad, comenzando en 2025.

    ## Detalles del Acuerdo

    ### Especificaciones Técnicas
    - **Volumen**: 25,000 toneladas anuales de carbonato de litio
    - **Calidad**: Grado batería (>99.5% pureza)
    - **Precio**: Fórmula indexada a precios de mercado con descuento del 5%
    - **Duración**: 5 años con opción de extensión

    ### Certificaciones Requeridas
    - **Responsible Mining Initiative (RMI)**: Certificación de minería responsable
    - **Battery Pass**: Trazabilidad completa de la cadena de suministro
    - **Carbon Footprint**: Huella de carbono 50% menor al promedio de la industria
    - **Water Stewardship**: Uso eficiente y responsable del agua

    ## Proyecto Lithium Salar

    El proyecto, ubicado en el salar de Atacama, utiliza tecnología de extracción directa (DLE) que ofrece ventajas significativas:
    - **Eficiencia**: 90% de recuperación vs. 40-60% en evaporación tradicional
    - **Velocidad**: 24 horas vs. 18 meses en procesos convencionales
    - **Sustentabilidad**: 75% menos uso de agua dulce
    - **Calidad**: Mayor pureza del producto final

    "Esta alianza valida nuestro enfoque en minerales críticos y tecnologías sostenibles", comentó María Fernanda Torres, CFO. "Tesla comparte nuestra visión de una cadena de suministro responsable para la electromovilidad".

    ## Impacto en la Industria

    ### Mercado de Litio
    - Demanda proyectada: crecimiento del 25% anual hasta 2030
    - Déficit esperado: 1M toneladas para 2025
    - Valor estratégico: mineral crítico para soberanía energética

    ### Beneficios para Tesla
    - Suministro asegurado de litio sostenible
    - Reducción de riesgo en cadena de suministro
    - Apoyo a objetivos de sostenibilidad corporativa
    - Costos competitivos a largo plazo

    ## Tecnología DLE Pionera

    La tecnología de Extracción Directa de Litio representa una revolución:
    - **Membranas Selectivas**: Filtran específicamente litio
    - **Minimización de Evaporación**: Menor impacto ambiental
    - **Automatización Completa**: Control de calidad superior
    - **Flexibilidad Operacional**: Adaptación a variaciones de demanda

    El proyecto Lithium Salar comenzó construcción en enero 2024, con primera producción programada para Q3 2025. La inversión total alcanza $320M USD, financiada con recursos propios y crédito sindicado verde.

    La alianza posiciona a Andean Mining como proveedor preferencial para otros fabricantes de vehículos eléctricos, con negociaciones avanzadas con BYD, GM y Stellantis.`,
    category: "Alianzas Estratégicas",
    author: "Departamento de Desarrollo de Negocios",
    publishDate: "2023-12-05",
    readTime: "8 min",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2ae81820-3201-4aab-8720-7cd859822af5.png",
    tags: ["Tesla", "Litio", "Alianza Estratégica", "Vehículos Eléctricos", "Sostenibilidad"],
    featured: false
  }
];

export const newsCategories = [
  "Todas",
  "Operaciones",
  "Sostenibilidad", 
  "Tecnología",
  "Expansión",
  "Alianzas Estratégicas",
  "Responsabilidad Social"
];