/* ═══════════════════════════════════════════
   DATA.JS — PORTFOLIO BRAIN
═══════════════════════════════════════════ */

const PORTFOLIO_INFO = {
  name:       "Muhammad Saqib Ali",
  shortName:  "MSA",
  title:      "Software Developer & AI Student",
  university: "Aror University of Art, Architecture, Design & Heritage",
  degree:     "BS Artificial Intelligence",
  location:   "Sukkur, Pakistan",
  email:      "saqibsoomro384@gmail.com",
  phone:      "03113762428",
  whatsapp:   "03113762428",
  github:     "https://github.com/Saqib-AI-dev",
  linkedin:   "https://www.linkedin.com/in/muhammad-saqib-9a281a3b7/",
  resumeFile: "resume.pdf",
  photo:      "profile.jpeg",
  aiAvatar:   "ai-avatar.png",
  available:  true,
};

/* ─── HERO ROLES ─────────────────────────── */
const ROLES = [
  { icon: "fab fa-java",    text: "Java Applications"  },
  { icon: "fab fa-react",   text: "Web Experiences"    },
  { icon: "fas fa-brain",   text: "AI Solutions"       },
  { icon: "fas fa-robot",   text: "Intelligent Systems"},
  { icon: "fab fa-python",  text: "Python & ML"        },
];

/* ─── HERO STATS ─────────────────────────── */
const STATS = [
  { number: 5, label: "Projects"       },
  { number: 1, label: "Years Learning" },
  { number: 4, label: "Certificates"   },
];

/* tabs: "programming" | "web" | "tools" | "ai" */
const SKILLS = [
  { name: "Java",             icon: "fab fa-java",           percent: 80, tab: "programming" },
  { name: "C++",              icon: "fas fa-code",           percent: 75, tab: "programming" },
  { name: "Python",           icon: "fab fa-python",         percent: 0,  tab: "programming" },
  { name: "SQL / MySQL",      icon: "fas fa-database",       percent: 30, tab: "programming" },
  { name: "HTML5",            icon: "fab fa-html5",          percent: 88, tab: "web"         },
  { name: "CSS3",             icon: "fab fa-css3-alt",       percent: 82, tab: "web"         },
  { name: "JavaScript",       icon: "fab fa-js-square",      percent: 65, tab: "web"         },
  { name: "Java Swing (GUI)", icon: "fas fa-window-restore", percent: 78, tab: "tools"       },
  { name: "NetBeans IDE",     icon: "fas fa-laptop-code",    percent: 85, tab: "tools"       },
  { name: "MySQL Workbench",  icon: "fas fa-server",         percent: 55, tab: "tools"       },
  { name: "Git & GitHub",     icon: "fab fa-git-alt",        percent: 85, tab: "tools"       },
  { name: "VS Code",          icon: "fas fa-code",           percent: 90, tab: "tools"       },
  { name: "Machine Learning", icon: "fas fa-brain",          percent: 0,  tab: "ai"          },
  { name: "Deep Learning",    icon: "fas fa-network-wired",  percent: 0,  tab: "ai"          },
  { name: "NLP",              icon: "fas fa-comment-dots",   percent: 0,  tab: "ai"          },
  { name: "Data Science",     icon: "fas fa-chart-line",     percent: 0,  tab: "ai"          },
];

/* categories: "java" | "web" | "cpp" | "ai" */
const PROJECTS = [
  {
    id:       1,
    title:    "Real Estate Management System",
    field:    "Software Engineering · GUI",
    desc:     "Property listing and management desktop application with Java GUI. Add, view, search and manage real estate properties with an intuitive interface.",
    icon:     "fas fa-building",
    stack:    ["Java", "Java Swing", "OOP"],
    category: "java",
    github:   "https://github.com/Saqib-AI-dev/Real-Estate-System",
    live:     "",
  },
  {
    id:       2,
    title:    "Travel Sphere Website",
    field:    "Web Development · Frontend",
    desc:     "Tour guide website showcasing travel destinations and travel information. Responsive layout, destination cards, and clean modern design.",
    icon:     "fas fa-globe",
    stack:    ["HTML5", "CSS3"],
    category: "web",
    github:   "https://github.com/Saqib-AI-dev/Travel_Sphere-tour-guide-website",
    live:     "https://travelsphere-ten.vercel.app/home.html",
  },
  {
    id:       3,
    title:    "Daily Expense Tracker",
    field:    "Console App · C++",
    desc:     "Console-based application for tracking daily expenses. Add, view, and categorize expenses with running total calculations.",
    icon:     "fas fa-wallet",
    stack:    ["C++", "OOP", "File I/O"],
    category: "cpp",
    github:   "https://github.com/Saqib-AI-dev/Daily-Expense-Traker_C-plus-plus-Console-based",
    live:     "",
  },
  {
    id:       4,
    title:    "Developer Portfolio Website",
    field:    "Web Development · Frontend",
    desc:     "This portfolio — built from scratch with HTML, CSS and JavaScript. Features animations, particle effects, terminal typing, dark theme and full responsiveness.",
    icon:     "fas fa-laptop-code",
    stack:    ["HTML5", "CSS3", "JavaScript"],
    category: "web",
    github:   "https://github.com/Saqib-AI-dev/Saqib-Portfolio-Website",
    live:     "https://saqib-portfolio-kappa.vercel.app/",
  },
  {
    id:       5,
    title:    "Hotel Reservation System",
    field:    "Software Engineering · Database",
    desc:     "Full hotel room booking and reservation system with MySQL database. Handles room availability, booking records and guest management. Built as an internship project.",
    icon:     "fas fa-hotel",
    stack:    ["Java", "Java Swing", "MySQL", "JDBC"],
    category: "java",
    github:   "https://github.com/Saqib-AI-dev/Hotel-reservation-system",
    live:     "",
  },
];

const EXPERIENCE = [
  {
    id:    1,
    icon:  "fas fa-university",
    year:  "2025 – 2029",
    title: "BS Artificial Intelligence",
    place: "Aror University of Art, Architecture, Design & Heritage",
    desc:  "Currently studying Machine Learning, Deep Learning, Data Science, Computer Vision and NLP — combining technical skills with a creative, design-centered environment.",
    tags:  ["Machine Learning", "Deep Learning", "Data Science", "NLP"],
    badge: "Currently Enrolled",
  },
  {
    id:    2,
    icon:  "fas fa-hotel",
    year:  "2026",
    title: "Hotel Reservation System",
    place: "Personal Project",
    desc:  "Designed and built a complete Hotel Reservation System from scratch — handling room availability, booking records and guest management with a Java Swing GUI and MySQL database.",
    tags:  ["Java", "MySQL", "Java Swing", "JDBC"],
    badge: "Completed",
  },
  {
    id:    3,
    icon:  "fas fa-laptop-code",
    year:  "2025 – 2026",
    title: "Independent Project Development",
    place: "Self-Directed Learning",
    desc:  "Built multiple desktop and web applications including a Real Estate System, Daily Expense Tracker and Travel website — strengthening Java, C++ and web development skills.",
    tags:  ["Java", "C++", "HTML/CSS"],
    badge: "Ongoing",
  },
  {
    id:    4,
    icon:  "fas fa-certificate",
    year:  "2023 – 2026",
    title: "Professional Certifications",
    place: "Google & Online Platforms",
    desc:  "Earned industry-recognized certifications covering AI, business intelligence and web fundamentals — building real-world knowledge alongside university studies.",
    tags:  ["Google AI", "Business Intelligence", "Web Dev"],
    badge: "4 Certificates",
  },
];

/* ─── CERTIFICATIONS ────────────────────── */
const CERTIFICATIONS = [
  {
    id:     1,
    title:  "Google AI Essentials",
    issuer: "Google",
    icon:   "fab fa-google",
    color:  "#4285F4",
    year:   "2025",
    desc:   "Fundamentals of Artificial Intelligence and practical AI tools by Google.",
    badge:  "Google",
  },
  {
    id:     2,
    title:  "Google Business Intelligence",
    issuer: "Google",
    icon:   "fas fa-chart-bar",
    color:  "#34A853",
    year:   "2026",
    desc:   "Data analytics, dashboards and business intelligence using Google tools.",
    badge:  "Google",
  },
  {
    id:     3,
    title:  "Foundation Certificate",
    issuer: "Aror University",
    icon:   "fas fa-university",
    color:  "#b44fff",
    year:   "2025",
    desc:   "Official university foundation certification recognizing academic achievement.",
    badge:  "University",
  },
  {
    id:     4,
    title:  "English Language Course",
    issuer: "Language Institute",
    icon:   "fas fa-language",
    color:  "#ff2d9b",
    year:   "2024",
    desc:   "Professional English language proficiency for academic and business communication.",
    badge:  "Language",
  },
];
