// Single source of truth for all projects.
// Add a new project by appending an object to this array — every page picks it up automatically.

export const projects = [
  {
    id: 'zentime',
    slug: 'zentime',
    title: 'ZenTime',
    tagline: 'An AI-powered productivity and mental wellness platform for students.',
    category: 'Productivity Technology',
    status: 'Active Development',
    role: 'Founder & Developer',
    year: '2024 — Present',
    description:
      'An AI-powered productivity and mental wellness platform designed to help students improve focus, build sustainable work habits, and manage their time more effectively.',
    overview:
      'ZenTime is a focused workspace for students. It blends a deep-work timer, intelligent timetable planning, and weekly self-review into a single, calm interface — with an AI layer that learns from a user’s patterns to recommend the most productive way to spend the next hour.',
    problem:
      'Students juggle classes, exams, applications, projects, and wellbeing — usually across five disconnected apps. Existing tools either gamify away depth, or feel like productivity homework. There is no quiet, intelligent companion that treats studying as a craft.',
    architecture: [
      'Next.js + TypeScript frontend with a typed design system',
      'PostgreSQL for users, sessions, and goal-tracking events',
      'LLM service layer (OpenAI / Anthropic) behind a thin orchestration API',
      'Server actions for low-latency state updates',
      'Event-sourced focus sessions to enable analytics & insights'
    ],
    features: [
      'Deep-work focus timer with adaptive session lengths',
      'Weekly goal tracking & retrospective journaling',
      'Intelligent timetable builder',
      'Personalized productivity recommendations from an AI coach',
      'Mental wellness check-ins and break prompts'
    ],
    challenges: [
      'Designing an AI coach that feels supportive — not surveillance-like.',
      'Balancing depth (rich data) with calm (uncluttered UI).',
      'Onboarding students with very different academic systems (IB, A-Levels, etc.).'
    ],
    roadmap: [
      'Public beta with closed cohort of IB students',
      'Calendar integrations (Google, Apple, Notion)',
      'Mobile-first companion app',
      'Long-term productivity insights and study-style profiles'
    ],
    outcomes: [
      'Founder-led product targeting student focus and wellbeing',
      'Built around evidence-based productivity research'
    ],
    technologies: ['Next.js', 'TypeScript', 'AI / LLM', 'PostgreSQL', 'Tailwind'],
    gallery: [
      { title: 'Focus Session', caption: 'Distraction-free deep-work view.' },
      { title: 'Weekly Review', caption: 'Reflection-driven goal tracking.' },
      { title: 'AI Coach', caption: 'Adaptive recommendations panel.' }
    ],
    github: '#',
    demo: '#',
    color: 'from-indigo-500/20 to-blue-500/10',
    accent: '#6366f1'
  },
  {
    id: 'voice-assistant',
    slug: 'voice-assistant',
    title: 'Voice Assistant for the Visually Impaired',
    tagline: 'A voice-first desktop assistant that makes computers truly usable for blind and low-vision users.',
    category: 'Assistive AI',
    status: 'Active Development',
    role: 'Lead Developer',
    year: '2024 — Present',
    description:
      'An intelligent desktop assistant that enables blind and low-vision users to navigate computers using natural language voice commands.',
    overview:
      'A voice-driven layer on top of the operating system. Users can open apps, manage files, read documents, and navigate the system entirely by speech — with a strong emphasis on offline-first reliability for users in low-connectivity contexts.',
    problem:
      'Screen readers remain rigid and command-driven. Modern voice assistants are cloud-locked, English-biased, and brittle for system tasks. Visually impaired users deserve a private, fast, and natural way to operate their computer.',
    architecture: [
      'Local speech-to-text via on-device models',
      'Intent recognition layer mapping utterances to OS operations',
      'OS automation modules per platform (Windows / macOS / Linux)',
      'Optional online LLM fallback for complex commands',
      'Accessibility-first audio feedback engine'
    ],
    features: [
      'Natural language voice navigation',
      'File management via speech',
      'Application launching and switching',
      'Offline-first compatibility',
      'Accessibility-first audio design'
    ],
    challenges: [
      'Achieving low-latency offline transcription on modest hardware.',
      'Handling ambiguous intents safely (no destructive misfires).',
      'Designing an audio interface that is informative but never overwhelming.'
    ],
    roadmap: [
      'Multilingual support starting with Indian languages',
      'Document reading mode with smart navigation',
      'Custom voice shortcuts and macros',
      'Pilot deployment with accessibility partners'
    ],
    outcomes: [
      'Designed around accessibility-first principles',
      'Operates without continuous internet dependency'
    ],
    technologies: ['Python', 'Speech-to-Text', 'NLP', 'OS Automation'],
    gallery: [
      { title: 'Voice Capture', caption: 'Always-listening trigger with privacy controls.' },
      { title: 'Intent Engine', caption: 'Routes speech to OS actions safely.' },
      { title: 'Audio UI', caption: 'Confirmations designed for non-visual flow.' }
    ],
    github: '#',
    demo: '#',
    color: 'from-blue-500/20 to-cyan-500/10',
    accent: '#0ea5e9'
  },
  {
    id: 'qml-platform',
    slug: 'qml-platform',
    title: 'Quantum Machine Learning Platform',
    tagline: 'A playground for practical quantum machine learning — for researchers and the curious alike.',
    category: 'Quantum Computing',
    status: 'Research Prototype',
    role: 'Researcher & Developer',
    year: '2024 — Present',
    description:
      'A platform exploring practical applications of quantum machine learning while making complex concepts more accessible through interactive tools and experiments.',
    overview:
      'A web platform where users can compose hybrid quantum-classical models, run experiments on simulated quantum backends, and learn QML concepts through interactive notebooks and visualizations.',
    problem:
      'Quantum machine learning is locked behind dense papers and ecosystem fragmentation. There is no smooth on-ramp for students and researchers to actually *try* QML without configuring a research environment from scratch.',
    architecture: [
      'Next.js frontend with interactive circuit and tensor visualizations',
      'Python backend powered by PennyLane and Qiskit',
      'Job queue for running quantum simulations asynchronously',
      'Curated notebooks for didactic walkthroughs',
      'Pluggable model registry for hybrid experiments'
    ],
    features: [
      'Interactive QML experiments',
      'Hybrid classical-quantum systems',
      'Educational simulation tools',
      'Experimental algorithm playground',
      'Reproducible notebooks'
    ],
    challenges: [
      'Designing visualizations that stay honest to quantum mechanics.',
      'Keeping simulations performant inside a web environment.',
      'Bridging classical ML intuition with quantum primitives.'
    ],
    roadmap: [
      'Open the platform to public beta',
      'Add hardware backends via cloud quantum providers',
      'Educational track aligned to IB / undergraduate curricula',
      'Benchmarks across QML and classical baselines'
    ],
    outcomes: [
      'Bridges complex QML concepts with intuitive interfaces',
      'Targets researchers, students, and curious builders'
    ],
    technologies: ['Qiskit', 'PennyLane', 'Python', 'Next.js'],
    gallery: [
      { title: 'Circuit Designer', caption: 'Compose hybrid quantum-classical models.' },
      { title: 'Experiment Runner', caption: 'Queue and inspect simulation jobs.' },
      { title: 'Learning Path', caption: 'Guided notebooks from fundamentals to QML.' }
    ],
    github: '#',
    demo: '#',
    color: 'from-purple-500/20 to-indigo-500/10',
    accent: '#8b5cf6'
  },
  {
    id: 'qml-optimizer',
    slug: 'qml-optimizer',
    title: 'QML Optimizer',
    tagline: 'Quantum-assisted optimization for machine learning and computational problem solving.',
    category: 'Quantum Computing Research',
    status: 'In Development',
    role: 'Researcher',
    year: '2025',
    description:
      'A project investigating quantum-assisted optimization methods and their potential applications in machine learning and computational problem solving.',
    overview:
      'A research codebase exploring whether variational quantum algorithms — like QAOA and parameter-shift trained ansätze — can act as competitive optimizers for non-convex machine learning loss landscapes.',
    problem:
      'Many ML problems hinge on hard non-convex optimization. Quantum heuristics promise alternative search dynamics, but empirical evidence for *practical* benefit is sparse and noisy.',
    architecture: [
      'PennyLane variational circuits with PyTorch interop',
      'Benchmark harness against classical optimizers (SGD, Adam, CMA-ES)',
      'Loss-landscape probing utilities',
      'Reproducible experiment configs (Hydra-style)',
      'Future hardware backend hooks'
    ],
    features: [
      'Variational quantum optimization',
      'Benchmarking against classical baselines',
      'Hybrid loss landscape analysis',
      'Configurable ansatz library'
    ],
    challenges: [
      'Barren plateaus in deep parameterized circuits.',
      'Statistically clean comparisons under simulation noise.',
      'Choosing the right problem class to highlight quantum behavior.'
    ],
    roadmap: [
      'Publish initial benchmark report',
      'Apply optimizer to small Hopfield-style energy models',
      'Submit a research paper synthesizing the findings',
      'Open source the experiment harness'
    ],
    outcomes: [
      'Investigates QAOA-style routines for ML tasks',
      'Foundation for an upcoming research paper'
    ],
    technologies: ['PennyLane', 'NumPy', 'PyTorch'],
    gallery: [
      { title: 'Loss Landscape', caption: 'Probing optimizer trajectories.' },
      { title: 'Benchmark Suite', caption: 'Quantum vs classical baselines.' },
      { title: 'Ansatz Library', caption: 'Reusable variational templates.' }
    ],
    github: '#',
    demo: '#',
    color: 'from-violet-500/20 to-purple-500/10',
    accent: '#a855f7'
  },
  {
    id: 'calisthenics',
    slug: 'calisthenics',
    title: 'Calisthenics Progression Platform',
    tagline: 'A structured path from beginner movements to advanced bodyweight skills.',
    category: 'Health Technology',
    status: 'Live',
    role: 'Founder & Developer',
    year: '2024',
    description:
      'A structured training application designed to guide users through progressive bodyweight fitness skill development.',
    overview:
      'A training companion that turns calisthenics — typically a self-directed maze of YouTube videos — into a coherent progression system. Users see exactly where they are, what to train next, and how to recover well.',
    problem:
      'Calisthenics progression is famously opaque. Most beginners plateau because they have no scaffolded path from basics to advanced skills like front levers and planches.',
    architecture: [
      'Next.js + Tailwind on the frontend',
      'MongoDB for users, sessions, and progression state',
      'Skill graph data model encoding prerequisites and progressions',
      'Adaptive plan generator',
      'Recovery & mobility tracking module'
    ],
    features: [
      'Skill progression trees',
      'Adaptive training plans',
      'Mobility and recovery tracking',
      'Logbook and personal records'
    ],
    challenges: [
      'Encoding skill prerequisites without hardcoding rigid linear paths.',
      'Designing progression that respects rest and recovery.',
      'Keeping the experience motivating without resorting to gamification gimmicks.'
    ],
    roadmap: [
      'Coach-facing dashboard for guided users',
      'Form-check integration via video',
      'Community-shared training blocks'
    ],
    outcomes: [
      'Helps users systematically progress toward advanced skills',
      'Built around proven progression frameworks'
    ],
    technologies: ['Next.js', 'MongoDB', 'Tailwind'],
    gallery: [
      { title: 'Skill Tree', caption: 'Visualize the full progression graph.' },
      { title: 'Training Plan', caption: 'Adaptive weekly programming.' },
      { title: 'Logbook', caption: 'Track sessions and personal bests.' }
    ],
    github: '#',
    demo: '#',
    color: 'from-emerald-500/20 to-teal-500/10',
    accent: '#10b981'
  },
  {
    id: 'freelance-studio',
    slug: 'freelance-studio',
    title: 'Freelance Development Studio',
    tagline: 'Polished software for students, researchers, and founders.',
    category: 'Software Development',
    status: 'Ongoing',
    role: 'Founder',
    year: 'Ongoing',
    description:
      'Portfolio websites, startup landing pages, and custom software solutions built for students, researchers, and founders.',
    overview:
      'A small studio practice through which I help students, researchers, and early-stage founders ship polished software — from personal sites to full product MVPs. Every engagement is treated as a craft problem first.',
    problem:
      'Early-stage builders need work that punches above template-tier portfolio quality, but rarely have access to senior product engineering. The studio bridges that gap.',
    architecture: [
      'Component-driven Next.js stacks with TypeScript',
      'Tailwind design systems tuned per client',
      'Framer Motion for polished motion',
      'CMS-ready data layers',
      'Strict performance and accessibility budgets'
    ],
    features: [
      'Researcher and founder portfolios',
      'Startup landing pages',
      'Custom web applications',
      'AI-powered software integrations'
    ],
    challenges: [
      'Translating ambitious visions into shipped products in compressed timelines.',
      'Maintaining a craft bar across many simultaneous engagements.',
      'Standardizing components without making clients feel templated.'
    ],
    roadmap: [
      'Productize the design system as an internal toolkit',
      'Build a small case-study library',
      'Selective ongoing retainers for high-leverage clients'
    ],
    outcomes: [
      'Delivered polished products for clients across disciplines',
      'Continuously expanding portfolio of client work'
    ],
    technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind'],
    gallery: [
      { title: 'Researcher Portfolio', caption: 'A premium personal site for a PhD candidate.' },
      { title: 'Startup Landing', caption: 'High-conversion landing for a YC-stage idea.' },
      { title: 'Product MVP', caption: 'A custom web app shipped end-to-end.' }
    ],
    github: '#',
    demo: '#',
    color: 'from-sky-500/20 to-blue-500/10',
    accent: '#38bdf8'
  }
];

export const categories = [
  'All',
  'Quantum Computing',
  'Quantum Computing Research',
  'Productivity Technology',
  'Assistive AI',
  'Health Technology',
  'Software Development'
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug || p.id === slug) || null;
}

export function getRelatedProjects(slug, limit = 3) {
  const current = getProjectBySlug(slug);
  if (!current) return [];
  const sameCategory = projects.filter((p) => p.slug !== slug && p.category === current.category);
  const others = projects.filter((p) => p.slug !== slug && p.category !== current.category);
  return [...sameCategory, ...others].slice(0, limit);
}

export default projects;
