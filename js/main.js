// Dictionary with EN (Default), NL and ES translations
const translations = {
    en: {
        navOverview: "Overview",
        navProjects: "Projects",
        navSkills: "Skills Matrix",
        navContact: "Contact Me",
        heroBadge: "Available for OT, Industrial Automation & Applied AI Roles",
        heroTitle: "Systems Engineer & Industrial Automation Specialist",
        heroDesc: "Bridging physical operational technology with modern computer science. Specialized in deterministic PLC control architectures, VFD speed regulation, HMI design, and real-time Edge Computer Vision for industrial environments.",
        badgeOT: "⚡ Industrial Control Systems (PLC / VFD / HMI)",
        badgeAI: "👁️ Edge Computer Vision & Quality Control",
        badgeLoc: "📍 Enschede, Netherlands",
        btnTouch: "Get In Touch",
        dirTitle: "Portfolio Directory",
        dirSubtitle: "Featured Engineering & Field Projects",
        dirDesc: "A selection of deployed industrial control systems and computer vision inspection research.",
        
        // Project Badges
        badgeCaseStudy: "Applied R&D / Case Study",
        badgeField: "Field Implementation",

        // Project 1
        p1Title: "Photovoltaic Defect Inspection System",
        p1Desc: "Subsurface microcrack detection on EL solar cell images using optimized CNNs and custom post-inference decision thresholds.",
        p1KpiLabel: "Key Performance Metric:",
        p1KpiVal: "70% Defect Recall @ 94.9ms Latency",
        btnViewDetails: "View Project Details",

        // Project 2
        p2Title: "Automated Stone-Cutting PLC & HMI System",
        p2Desc: "Complete PLC control retrofit, VFD motor control, and custom interactive HMI screens for dual-blade stone cutting machinery.",
        p2KpiLabel: "Target Positioning Accuracy:",
        p2KpiVal: "±0.5 cm Control & Safety Interlocks",
        btnViewField: "View Field Implementation",

        // Project 3
        p3Title: "Sequential Chiller Pump Management",
        p3Desc: "Automated 3-pump startup sequencer designed to eliminate electrical current surges and balance equipment runtime.",
        p3KpiLabel: "Control System Architecture:",
        p3KpiVal: "3-Pump Duty Rotation & Auto-Failover",

        // Skills Section
        skillsTitle: "Core Competencies",
        skillsSubtitle: "Engineering Skills Matrix",
        col1Title: "Industrial Automation (OT)",
        col2Title: "Software & Applied AI (IT)",
        col3Title: "Systems & Operations"
    },
    nl: {
        navOverview: "Overzicht",
        navProjects: "Projecten",
        navSkills: "Vaardigheden",
        navContact: "ContactOpnemen",
        heroBadge: "Beschikbaar voor OT, Industriële Automatisering & Toegepaste AI",
        heroTitle: "Systems Engineer & Specialist Industriële Automatisering",
        heroDesc: "Slaan van de brug tussen fysieke operationele technologie en moderne computerwetenschappen. Gespecialiseerd in deterministische PLC-besturingsarchitecturen, VFD-snelheidsregeling, HMI-ontwerp en realtime Edge Computer Vision.",
        badgeOT: "⚡ Industriële Besturingssystemen (PLC / VFD / HMI)",
        badgeAI: "👁️ Edge Computer Vision & Kwaliteitscontrole",
        badgeLoc: "📍 Enschede, Nederland",
        btnTouch: "Neem Contact Op",
        dirTitle: "Portfolio Map",
        dirSubtitle: "Uitgelichte Engineering & Praktijkprojecten",
        dirDesc: "Een selectie van geïmplementeerde industriële besturingssystemen en onderzoek naar computer vision-inspectie.",
        
        badgeCaseStudy: "Toegepast R&D / Casestudy",
        badgeField: "Veldimplementatie",

        p1Title: "Inspectiesysteem voor Photovoltaïsche Defecten",
        p1Desc: "Detectie van microscheuren op EL-zonnecelafbeeldingen met behulp van geoptimaliseerde CNN's en drempelwaarden.",
        p1KpiLabel: "Belangrijkste Prestatie-indicator:",
        p1KpiVal: "70% Defect Recall @ 94.9ms Latentie",
        btnViewDetails: "Bekijk Projectdetails",

        p2Title: "Gevautomatiseerd Steenzaag PLC & HMI Systeem",
        p2Desc: "Volledige PLC-besturingsretrofit, VFD-motorregeling en interactieve HMI-schermen voor zaagmachines.",
        p2KpiLabel: "Doel Positioneernauwkeurigheid:",
        p2KpiVal: "±0.5 cm Besturing & Veiligheidsvergrendelingen",
        btnViewField: "Bekijk Veldimplementatie",

        p3Title: "Sequentieel Beheersysteem voor Koelwaterpompen",
        p3Desc: "Geautomatiseerde opstartsequencer voor 3 pompen om piekstroom te voorkomen en draaiuren te balanceren.",
        p3KpiLabel: "Architectuur Besturingssysteem:",
        p3KpiVal: "3-Pomp Rotatie & Automatische Failover",

        skillsTitle: "Kerncompetenties",
        skillsSubtitle: "Engineering Vaardighedenmatrix",
        col1Title: "Industriële Automatisering (OT)",
        col2Title: "Software & Toegepaste AI (IT)",
        col3Title: "Systemen & Operations"
    },
    es: {
        navOverview: "Resumen",
        navProjects: "Proyectos",
        navSkills: "Habilidades",
        navContact: "Contacto",
        heroBadge: "Disponible para Roles de OT, Automatización Industrial e IA Aplicada",
        heroTitle: "Ingeniero de Sistemas y Especialista en Automatización Industrial",
        heroDesc: "Conectando la tecnología operacional física con la ciencia de la computación moderna. Especializado en arquitecturas de control PLC deterministas, regulación VFD, HMI y Visión por Computador en Tiempo Real.",
        badgeOT: "⚡ Sistemas de Control Industrial (PLC / VFD / HMI)",
        badgeAI: "👁️ Visión por Computador en el Borde y Control de Calidad",
        badgeLoc: "📍 Enschede, Países Bajos",
        btnTouch: "Ponerse en Contacto",
        dirTitle: "Directorio de Portafolio",
        dirSubtitle: "Proyectos Destacados de Ingeniería y Campo",
        dirDesc: "Una selección de sistemas de control industrial desplegados e investigación en inspección por visión artificial.",
        
        badgeCaseStudy: "I+D Aplicado / Caso de Estudio",
        badgeField: "Implementación en Campo",

        p1Title: "Sistema de Inspección de Defectos Fotovoltaicos",
        p1Desc: "Detección de microfisuras en imágenes EL de celdas solares usando CNNs optimizadas y umbrales personalizados.",
        p1KpiLabel: "Métrica Clave de Rendimiento:",
        p1KpiVal: "70% Recall de Defectos @ 94.9ms Latencia",
        btnViewDetails: "Ver Detalles del Proyecto",

        p2Title: "Sistema PLC y HMI para Cortadora de Piedra",
        p2Desc: "Modernización de control PLC, control de motores VFD y pantallas HMI interactivas para maquinaria de corte.",
        p2KpiLabel: "Precisión de Posicionamiento:",
        p2KpiVal: "±0.5 cm Control e Enclavamientos de Seguridad",
        btnViewField: "Ver Implementación en Campo",

        p3Title: "Gestión Secuencial de Bombas de Chiller",
        p3Desc: "Secuenciador de arranque automatizado para 3 bombas diseñado para eliminar picos de corriente y equilibrar el uso.",
        p3KpiLabel: "Arquitectura del Sistema:",
        p3KpiVal: "Rotación de Trabajo de 3 Bombas y Conmutación Automática",

        skillsTitle: "Competencias Principales",
        skillsSubtitle: "Matriz de Habilidades de Ingeniería",
        col1Title: "Automatización Industrial (OT)",
        col2Title: "Software e IA Aplicada (IT)",
        col3Title: "Sistemas y Operaciones"
    }
};

// Function to switch language
function setLanguage(lang) {
    localStorage.setItem('preferred_lang', lang);

    // Update active button visual state
    ['en', 'nl', 'es'].forEach(l => {
        const btn = document.getElementById(`btn-${l}`);
        if (btn) {
            if (l === lang) {
                btn.className = "px-2 py-1 rounded bg-cyan-500 text-slate-950 font-bold transition-all";
            } else {
                btn.className = "px-2 py-1 rounded bg-slate-800 text-slate-400 hover:text-white transition-all";
            }
        }
    });

    // Replace text content based on data-i18n attributes
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
}

// Modal Toggle Logic
function openModal(id) {
    document.getElementById(id).classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
}

function closeModal(id) {
    document.getElementById(id).classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
}

// Initialize default language on page load (Default: EN)
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred_lang') || 'en';
    setLanguage(savedLang);

    // Close modal on background click
    window.onclick = function(event) {
        if (event.target.classList.contains('bg-slate-950/85')) {
            event.target.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        }
    };
});