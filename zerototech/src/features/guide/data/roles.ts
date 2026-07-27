import type { RoleCardData } from "../types";

/**
 * Datos de los roles IT explicados de forma cercana.
 * Cada uno describe un día típico, herramientas y cómo buscar trabajo.
 */
export const rolesData: RoleCardData[] = [
  // --- SOPORTE ---
  {
    id: "role-soporte-helpdesk",
    category: "soporte",
    roleName: "Analista de Help Desk",
    emoji: "🎧",
    dailyLife:
      "Arrancás el día revisando tickets de usuarios que tienen problemas: una notebook que no prende, un mail que no llega, una impresora rebelde. Investigás, resolvés y le explicás al usuario qué pasó. Es como ser detective digital.",
    tools: ["Jira / Zendesk", "Windows/Linux", "Active Directory", "TeamViewer"],
    linkedInTip: "Buscá: 'Help Desk Analyst', 'IT Support Technician', 'Soporte Técnico N1'",
  },
  {
    id: "role-soporte-sysadmin",
    category: "soporte",
    roleName: "SysAdmin Junior",
    emoji: "🖥️",
    dailyLife:
      "Tu día es mantener servidores saludables, instalar actualizaciones, gestionar cuentas de usuarios y asegurarte de que nada se caiga. Cuando algo falla a las 3am... sí, puede que te llamen. Pero el resto del tiempo es resolver puzzles técnicos.",
    tools: ["PowerShell / Bash", "Active Directory", "VMware", "Monitoring (Nagios/Zabbix)"],
    linkedInTip: "Buscá: 'Junior SysAdmin', 'Administrador de Sistemas', 'IT Administrator'",
  },

  // --- CLOUD ---
  {
    id: "role-cloud-engineer",
    category: "cloud",
    roleName: "Cloud Engineer Junior",
    emoji: "☁️",
    dailyLife:
      "Creás y mantenés infraestructura en la nube: servidores virtuales, bases de datos, redes. Todo con código (Infrastructure as Code). Es como jugar con Lego pero los bloques son servicios de AWS o Azure.",
    tools: ["AWS / Azure / GCP", "Terraform", "Docker", "Linux", "CI/CD pipelines"],
    linkedInTip: "Buscá: 'Junior Cloud Engineer', 'DevOps Trainee', 'Cloud Support Associate'",
  },
  {
    id: "role-cloud-devops",
    category: "cloud",
    roleName: "DevOps Trainee",
    emoji: "🔄",
    dailyLife:
      "Tu misión es que el código de los programadores llegue a producción rápido y sin romperse. Armás pipelines de despliegue, automatizás pruebas y monitoreas que todo funcione 24/7.",
    tools: ["GitHub Actions / Jenkins", "Docker / Kubernetes", "Terraform", "Grafana"],
    linkedInTip: "Buscá: 'DevOps Junior', 'Site Reliability Engineer Intern', 'Platform Engineer Trainee'",
  },

  // --- CIBERSEGURIDAD ---
  {
    id: "role-ciber-analyst",
    category: "ciberseguridad",
    roleName: "Analista SOC Junior",
    emoji: "🕵️",
    dailyLife:
      "Monitoreás alertas de seguridad todo el día: ¿alguien intentó entrar sin permiso? ¿Hay tráfico sospechoso? Investigás incidentes y escribís reportes. Es como ser guardia de seguridad digital, pero mucho más interesante.",
    tools: ["SIEM (Splunk/QRadar)", "Wireshark", "OSINT tools", "Firewalls"],
    linkedInTip: "Buscá: 'SOC Analyst L1', 'Junior Security Analyst', 'Analista de Ciberseguridad'",
  },
  {
    id: "role-ciber-pentester",
    category: "ciberseguridad",
    roleName: "Pentester Junior",
    emoji: "🏴‍☠️",
    dailyLife:
      "Te pagan por intentar hackear empresas (legalmente). Buscás vulnerabilidades en sus sistemas, escribís reportes con lo que encontraste y les ayudás a mejorar su seguridad. Cada día es un reto nuevo.",
    tools: ["Kali Linux", "Burp Suite", "Nmap", "Metasploit", "Python"],
    linkedInTip: "Buscá: 'Junior Penetration Tester', 'Ethical Hacker', 'Security Consultant Intern'",
  },

  // --- UX/UI ---
  {
    id: "role-ux-designer",
    category: "ux-ui",
    roleName: "Diseñador/a UX Junior",
    emoji: "🎨",
    dailyLife:
      "Investigás cómo piensan y sienten los usuarios: hacés entrevistas, creás wireframes, probás prototipos y medís si la gente entiende la interfaz. Tu trabajo es que usar una app se sienta fácil y agradable.",
    tools: ["Figma", "Miro / FigJam", "Maze (testing)", "Notion"],
    linkedInTip: "Buscá: 'UX Designer Junior', 'Product Designer Trainee', 'Diseñador de Experiencia'",
  },
  {
    id: "role-ui-designer",
    category: "ux-ui",
    roleName: "UI Designer",
    emoji: "✨",
    dailyLife:
      "Diseñás cómo se ven las pantallas: colores, tipografía, íconos, espaciados. Creás sistemas de diseño para que toda la app sea visualmente coherente. Es donde el arte se encuentra con la tecnología.",
    tools: ["Figma", "Adobe Illustrator", "Design tokens", "Storybook"],
    linkedInTip: "Buscá: 'UI Designer', 'Visual Designer', 'Diseñador de Interfaces'",
  },

  // --- DESARROLLO ---
  {
    id: "role-dev-frontend",
    category: "desarrollo",
    roleName: "Frontend Developer Junior",
    emoji: "💻",
    dailyLife:
      "Construís lo que el usuario ve y toca: botones, formularios, animaciones, páginas. Traducís diseños de Figma a código real con HTML, CSS y JavaScript. Cada vez que algo se ve lindo en una web, hubo un frontend detrás.",
    tools: ["HTML/CSS/JS", "React / Vue", "Git & GitHub", "VS Code", "Chrome DevTools"],
    linkedInTip: "Buscá: 'Junior Frontend Developer', 'Desarrollador Web', 'React Developer Trainee'",
  },
  {
    id: "role-dev-backend",
    category: "desarrollo",
    roleName: "Backend Developer Junior",
    emoji: "⚙️",
    dailyLife:
      "Programás la lógica que no se ve: bases de datos, APIs, autenticación, reglas de negocio. Cuando alguien hace login o compra algo online, el backend es quien procesa todo por detrás.",
    tools: ["Node.js / Python / Java", "SQL (PostgreSQL)", "REST APIs", "Git", "Docker"],
    linkedInTip: "Buscá: 'Junior Backend Developer', 'Desarrollador Backend', 'API Developer'",
  },
];
