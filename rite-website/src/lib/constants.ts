import {
    Cpu,
    HardHat,
    Zap,
    Wrench,
    Briefcase,
    Monitor,
    BookOpen,
    FlaskConical,
    Dumbbell,
    Building2,
    UtensilsCrossed,
    Bus,
    type LucideIcon,
} from "lucide-react";

/* ──────────────────── NAV ──────────────────── */
export interface NavItem {
    label: string;
    href: string;
    children?: NavItem[];
}

export const NAV_ITEMS: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
        label: "Programs",
        href: "/programs",
        children: [
            { label: "B.Tech CSE", href: "/programs/btech-cse" },
            { label: "B.Tech Civil", href: "/programs/btech-civil" },
            { label: "B.Tech EE", href: "/programs/btech-ee" },
            { label: "B.Tech Mechanical", href: "/programs/btech-mech" },
            { label: "MBA", href: "/programs/mba" },
            { label: "MCA", href: "/programs/mca" },
        ],
    },
    { label: "Admissions", href: "/admissions" },
    { label: "Placements", href: "/placements" },
    { label: "Contact", href: "/contact" },
];

/* ──────────────────── HERO STATS ──────────────────── */
export interface StatItem {
    value: number;
    suffix: string;
    label: string;
}

export const HERO_STATS: StatItem[] = [
    { value: 12, suffix: "+", label: "Years" },
    { value: 1200, suffix: "+", label: "Placements" },
    { value: 120, suffix: "+", label: "Faculty" },
    { value: 15, suffix: "+", label: "Courses" },
];

/* ──────────────────── PROGRAMS ──────────────────── */
export interface Program {
    icon: LucideIcon;
    title: string;
    slug: string;
    description: string;
}

export const PROGRAMS: Program[] = [
    {
        icon: Cpu,
        title: "B.Tech Computer Science",
        slug: "btech-cse",
        description:
            "Master cutting‑edge technologies — AI, cloud computing, and full‑stack development.",
    },
    {
        icon: HardHat,
        title: "B.Tech Civil Engineering",
        slug: "btech-civil",
        description:
            "Design sustainable infrastructure with modern construction & geotechnical practices.",
    },
    {
        icon: Zap,
        title: "B.Tech Electrical Engineering",
        slug: "btech-ee",
        description:
            "Explore power systems, renewable energy, and smart grid technologies.",
    },
    {
        icon: Wrench,
        title: "B.Tech Mechanical Engineering",
        slug: "btech-mech",
        description:
            "Innovate in manufacturing, robotics, and thermal‑fluid sciences.",
    },
    {
        icon: Briefcase,
        title: "MBA",
        slug: "mba",
        description:
            "Develop strategic leadership skills with industry‑integrated management education.",
    },
    {
        icon: Monitor,
        title: "MCA",
        slug: "mca",
        description:
            "Build expertise in software development, data science, and IT management.",
    },
];

/* ──────────────────── FACILITIES ──────────────────── */
export interface Facility {
    icon: LucideIcon;
    title: string;
    description: string;
    image: string;
}

export const FACILITIES: Facility[] = [
    {
        icon: BookOpen,
        title: "Central Library",
        description: "50,000+ books, e‑journals, and a digital resource centre.",
        image: "/images/library.jpg",
    },
    {
        icon: FlaskConical,
        title: "Modern Laboratories",
        description: "State‑of‑the‑art labs for every engineering discipline.",
        image: "/images/lab.jpg",
    },
    {
        icon: Dumbbell,
        title: "Sports Complex",
        description: "Indoor & outdoor arenas for cricket, badminton, basketball & more.",
        image: "/images/sports.jpg",
    },
    {
        icon: Building2,
        title: "Hostel & Accommodation",
        description: "Separate hostels for boys & girls with 24/7 security and Wi‑Fi.",
        image: "/images/hostel.jpg",
    },
    {
        icon: UtensilsCrossed,
        title: "Cafeteria",
        description: "Hygienic multi‑cuisine canteen serving nutritious meals.",
        image: "/images/cafeteria.jpg",
    },
    {
        icon: Bus,
        title: "Transport",
        description: "Fleet of buses covering major routes across Odisha.",
        image: "/images/transport.jpg",
    },
];

/* ──────────────────── COMPANIES ──────────────────── */
export const COMPANY_NAMES: string[] = [
    "TCS",
    "Infosys",
    "Wipro",
    "HCL Tech",
    "Tech Mahindra",
    "Capgemini",
    "Cognizant",
    "Accenture",
    "L&T",
    "Godrej",
    "Tata Steel",
    "JSW",
    "NALCO",
    "Vedanta",
    "Mindtree",
    "Mphasis",
];

/* ──────────────────── NEWS ──────────────────── */
export interface NewsItem {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    category: string;
}

export const NEWS_ITEMS: NewsItem[] = [
    {
        id: 1,
        title: "RITE Students Excel in Smart India Hackathon 2025",
        excerpt:
            "A team of six B.Tech CSE students secured the first runner‑up position at the national‑level hackathon.",
        date: "2025-12-10",
        category: "Achievement",
    },
    {
        id: 2,
        title: "Annual Tech Fest — InnoVision 2025",
        excerpt:
            "Three days of robotics, quizzes, coding contests & industry talks. Registrations open!",
        date: "2025-11-25",
        category: "Event",
    },
    {
        id: 3,
        title: "MoU Signed with TCS for Campus Recruitment",
        excerpt:
            "RITE partners with TCS to offer assured placement drives and pre‑placement training.",
        date: "2025-11-01",
        category: "Placement",
    },
    {
        id: 4,
        title: "New AI & Machine Learning Lab Inaugurated",
        excerpt:
            "Equipped with GPU workstations and cloud access, the lab opens new horizons for research.",
        date: "2025-10-15",
        category: "Campus",
    },
    {
        id: 5,
        title: "NAAC Re‑accreditation with B+ Grade",
        excerpt:
            "RITE reaffirms its commitment to academic quality with NAAC B+ accreditation.",
        date: "2025-09-20",
        category: "Recognition",
    },
    {
        id: 6,
        title: "International Seminar on Sustainable Energy",
        excerpt:
            "Experts from IIT Delhi and foreign universities share insights on green‑energy innovation.",
        date: "2025-09-05",
        category: "Event",
    },
];

/* ──────────────────── TESTIMONIALS ──────────────────── */
export interface Testimonial {
    id: number;
    name: string;
    course: string;
    year: string;
    quote: string;
    rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        name: "Priya Mohanty",
        course: "B.Tech CSE",
        year: "2024",
        quote:
            "RITE gave me the perfect platform to grow. The faculty and placement cell helped me land my dream job at TCS!",
        rating: 5,
    },
    {
        id: 2,
        name: "Rahul Das",
        course: "B.Tech Mechanical",
        year: "2023",
        quote:
            "The hands‑on exposure in the workshops and labs prepared me for the real engineering world. Truly grateful.",
        rating: 5,
    },
    {
        id: 3,
        name: "Sneha Pattnaik",
        course: "MBA",
        year: "2024",
        quote:
            "Industry visits, case‑study sessions, and amazing mentors made my MBA journey at RITE unforgettable.",
        rating: 4,
    },
    {
        id: 4,
        name: "Amit Kumar Behera",
        course: "B.Tech EE",
        year: "2023",
        quote:
            "From labs to placements, RITE never lets you down. The campus life and friends here are for a lifetime.",
        rating: 5,
    },
    {
        id: 5,
        name: "Lipsa Nayak",
        course: "MCA",
        year: "2024",
        quote:
            "The coding culture and hackathon participation boosted my confidence. I'm now a full‑stack developer at Infosys!",
        rating: 5,
    },
];

/* ──────────────────── FOOTER ──────────────────── */
export const QUICK_LINKS = [
    { label: "About RITE", href: "/about" },
    { label: "Admissions", href: "/admissions" },
    { label: "Placements", href: "/placements" },
    { label: "Campus Life", href: "/campus-life" },
    { label: "Research", href: "/research" },
    { label: "Contact Us", href: "/contact" },
];

export const PROGRAM_LINKS = [
    { label: "B.Tech CSE", href: "/programs/btech-cse" },
    { label: "B.Tech Civil", href: "/programs/btech-civil" },
    { label: "B.Tech EE", href: "/programs/btech-ee" },
    { label: "B.Tech Mechanical", href: "/programs/btech-mech" },
    { label: "MBA", href: "/programs/mba" },
    { label: "MCA", href: "/programs/mca" },
];

/* ──────────────────── RANKINGS / ACCREDITATIONS ──────────────────── */
export interface RankingItem {
    body: string;
    detail: string;
    year: string;
    highlight?: string;
}

export const RANKINGS: RankingItem[] = [
    {
        body: "NAAC",
        detail: "Accredited with B+ Grade by the National Assessment and Accreditation Council",
        year: "2024",
        highlight: "B+",
    },
    {
        body: "AICTE",
        detail: "Approved by the All India Council for Technical Education, New Delhi",
        year: "2024–25",
    },
    {
        body: "BPUT",
        detail: "Affiliated to Biju Patnaik University of Technology, Odisha",
        year: "Since 2012",
    },
    {
        body: "ISO 9001:2015",
        detail: "Certified for Quality Management Systems in Technical Education",
        year: "2023",
    },
    {
        body: "NIRF",
        detail: "Participating institution in the National Institutional Ranking Framework",
        year: "2024",
    },
    {
        body: "NBA",
        detail: "Programs progressing towards National Board of Accreditation standards",
        year: "2024",
    },
];

/* ──────────────────── USP / WHY CHOOSE US ──────────────────── */
export interface UspItem {
    title: string;
    description: string;
    stats: string;
}

export const USP_ITEMS: UspItem[] = [
    {
        title: "Industry Partnerships",
        description:
            "MOUs with leading companies like TCS, Infosys, and L&T ensure our curriculum stays aligned with real‑world industry demands and opens direct recruitment pipelines.",
        stats: "15+ MoUs",
    },
    {
        title: "Research Culture",
        description:
            "Faculty and students actively publish in national and international journals. Incentive schemes and dedicated labs nurture an environment of innovation.",
        stats: "200+ Papers",
    },
    {
        title: "Holistic Development",
        description:
            "From technical clubs and hackathons to cultural fests and sports tournaments, RITE builds well‑rounded professionals ready for any challenge.",
        stats: "20+ Clubs",
    },
    {
        title: "Modern Curriculum",
        description:
            "Outcome‑Based Education (OBE) framework with electives in AI, IoT, Cloud Computing, and Data Science keeps students ahead of the technology curve.",
        stats: "OBE Framework",
    },
];

/* ──────────────────── ANNOUNCEMENTS ──────────────────── */
export interface Announcement {
    id: number;
    title: string;
    date: string;
    isNew: boolean;
    type: "admission" | "exam" | "event" | "general";
}

export const ANNOUNCEMENTS: Announcement[] = [
    {
        id: 1,
        title: "B.Tech Admissions 2026‑27 — Applications Now Open",
        date: "2026-02-10",
        isNew: true,
        type: "admission",
    },
    {
        id: 2,
        title: "End Semester Exam Schedule — Even Sem 2025‑26 Released",
        date: "2026-02-05",
        isNew: true,
        type: "exam",
    },
    {
        id: 3,
        title: "International Seminar on AI & Sustainable Tech — March 2026",
        date: "2026-01-28",
        isNew: false,
        type: "event",
    },
    {
        id: 4,
        title: "Scholarship Applications for Meritorious Students — Last Date: 15 Mar",
        date: "2026-01-20",
        isNew: false,
        type: "admission",
    },
    {
        id: 5,
        title: "Annual Sports Meet — Registrations Open",
        date: "2026-01-15",
        isNew: false,
        type: "event",
    },
    {
        id: 6,
        title: "MCA Entrance Test 2026 — Notification Released",
        date: "2026-01-10",
        isNew: false,
        type: "admission",
    },
    {
        id: 7,
        title: "Workshop on Embedded Systems & IoT — Dept. of EE",
        date: "2026-01-05",
        isNew: false,
        type: "event",
    },
];

