// ============================================================================
// PROJECT CONTENT SCHEMA (strict)
// ----------------------------------------------------------------------------
// Every project MUST conform to this shape. The dynamic case-study page at
// /projects/[slug] is a pure renderer over this data — no project-specific
// strings live inside UI components.
//
// {
//   id, title, shortDescription, category, status,
//   hero: { tagline, outcomeLine },
//   problem, context,
//   solution,
//   architecture: { overview, components: [{ name, description }] },
//   techStack: string[],
//   challenges: [{ title, explanation }],
//   learnings: string[],
//   futureWork,
//   links: { github?, demo?, paper? }
// }
//
// Presentation metadata (slug, accent, color, role, year) is kept separate
// at the bottom of each object; it is *only* consumed by the UI and never
// mixed into the strict content fields above.
//
// CONTENT ACCURACY RULE
// ----------------------------------------------------------------------------
// Fields that have not been explicitly verified with the project owner are
// stored as one of: "Details pending user input" | "To be refined"
// | "Requires verification". These placeholders surface clearly in the UI and
// invite future content edits without touching any component.
// ============================================================================

const PENDING = 'Details pending user input';
const TBR = 'To be refined';

export const projects = [
  // --------------------------------------------------------------------------
  {
    id: 'zentime',
    title: 'ZenTime',
    shortDescription:
      'An AI-powered productivity and mental wellness platform designed to help students improve focus, build sustainable work habits, and manage their time more effectively.',
    category: 'Productivity Technology',
    status: 'Active Development',

    hero: {
      tagline: 'Productivity and mental wellness for students.',
      outcomeLine: 'Founder-led product designed around student focus, habits, and wellbeing.',
    },

    problem:
      'Students juggle classes, exams, applications, projects, and wellbeing across disconnected tools — with no single calm workspace built around how they actually study and rest.',
    context:
      'Built as founder and developer. Initial audience: senior school and International Baccalaureate students.',

    solution:
      'A focused workspace that combines a focus timer, goal tracking, a timetable builder, personalized productivity systems, and mental wellness tools in one coherent interface.',

    architecture: {
      overview:
        `${PENDING} — full architecture will be documented as the system stabilizes.`,
      components: [
        { name: 'Focus Timer', description: 'Distraction-free deep-work sessions.' },
        { name: 'Goal Tracking', description: 'Weekly goals and structured review loops.' },
        { name: 'Timetable Builder', description: 'Structured daily and weekly planning.' },
        { name: 'Productivity System Layer', description: 'Personalized routines and recommendations.' },
        { name: 'Mental Wellness Tools', description: 'Check-ins and break prompts.' },
      ],
    },

    techStack: [], // pending verification

    challenges: [
      {
        title: PENDING,
        explanation:
          'Engineering and product challenges will be documented here as the build progresses.',
      },
    ],

    learnings: [PENDING],

    futureWork: PENDING + '.',

    links: { github: undefined, demo: undefined, paper: undefined },

    // ---- presentation metadata (not part of the content schema) ----
    slug: 'zentime',
    role: 'Founder & Developer',
    year: '2024 — Present',
    accent: '#6366f1',
    color: 'from-indigo-500/20 to-blue-500/10',
  },

  // --------------------------------------------------------------------------
  {
    id: 'voice-assistant',
    title: 'Voice Assistant for the Visually Impaired',
    shortDescription:
      'An intelligent desktop assistant that enables blind and low-vision users to navigate computers using natural language voice commands.',
    category: 'Assistive AI',
    status: 'Active Development',

    hero: {
      tagline: 'A voice-first desktop assistant for blind and low-vision users.',
      outcomeLine: 'Accessibility-first computing layer driven by natural language.',
    },

    problem:
      'Existing screen readers are rigid and command-driven, while mainstream voice assistants are cloud-locked and not designed for full system control. Visually impaired users need a private, fast, and natural way to operate a computer.',
    context:
      'In active development. Designed around accessibility-first principles and offline compatibility for users in low-connectivity contexts.',

    solution:
      'A desktop assistant layer that turns natural language speech into operating-system actions — opening apps, managing files, and navigating the system — while preserving privacy through offline-capable behaviour.',

    architecture: {
      overview:
        `${PENDING} — implementation details will be documented as the system stabilizes.`,
      components: [
        { name: 'Voice Navigation', description: 'Voice-based navigation of the operating system.' },
        { name: 'File Management', description: 'Voice-driven file operations.' },
        { name: 'Application Launching', description: 'Voice-triggered application launching and switching.' },
        { name: 'Offline Mode', description: 'Offline-compatible operation for low-connectivity environments.' },
        { name: 'Accessibility Layer', description: 'Accessibility-first interaction model.' },
      ],
    },

    techStack: [], // pending verification

    challenges: [
      {
        title: PENDING,
        explanation: 'Engineering and accessibility challenges will be documented here as the build progresses.',
      },
    ],

    learnings: [PENDING],

    futureWork: PENDING + '.',

    links: { github: undefined, demo: undefined, paper: undefined },

    slug: 'voice-assistant',
    role: 'Lead Developer',
    year: '2024 — Present',
    accent: '#0ea5e9',
    color: 'from-blue-500/20 to-cyan-500/10',
  },

  // --------------------------------------------------------------------------
  {
    id: 'qml-platform',
    title: 'Quantum Machine Learning Platform',
    shortDescription:
      'A platform exploring practical applications of quantum machine learning while making complex concepts more accessible through interactive tools and experiments.',
    category: 'Quantum Computing',
    status: 'Research Prototype',

    hero: {
      tagline: 'A playground for practical quantum machine learning.',
      outcomeLine: 'Bridges complex QML concepts with interactive, accessible tools.',
    },

    problem:
      'Quantum machine learning remains locked behind dense papers and fragmented tooling. There is no smooth on-ramp for students and researchers to actually experiment with QML without first configuring a full research environment.',
    context:
      'Research prototype. Scope focuses on QML, hybrid systems, educational tools, and experimental algorithms.',

    solution:
      'A platform for composing and exploring hybrid quantum-classical workflows, paired with interactive tools and experiments that make QML accessible to learners and curious researchers.',

    architecture: {
      overview:
        `${PENDING} — internal architecture will be documented as the prototype matures.`,
      components: [
        { name: 'QML Experiments', description: 'Interactive quantum machine learning experiments.' },
        { name: 'Hybrid Systems', description: 'Hybrid classical-quantum workflows.' },
        { name: 'Educational Tools', description: 'Interactive tools for learning QML concepts.' },
        { name: 'Experimental Algorithms', description: 'Sandbox for experimental QML algorithms.' },
      ],
    },

    techStack: [], // pending verification

    challenges: [
      {
        title: PENDING,
        explanation: 'Research and engineering challenges will be documented as the platform develops.',
      },
    ],

    learnings: [PENDING],

    futureWork: PENDING + '.',

    links: { github: undefined, demo: undefined, paper: undefined },

    slug: 'qml-platform',
    role: 'Researcher & Developer',
    year: '2024 — Present',
    accent: '#8b5cf6',
    color: 'from-purple-500/20 to-indigo-500/10',
  },

  // --------------------------------------------------------------------------
  {
    id: 'qml-optimizer',
    title: 'QML Optimizer',
    shortDescription:
      'A project investigating quantum-assisted optimization methods and their potential applications in machine learning and computational problem solving.',
    category: 'Quantum Computing Research',
    status: 'In Development',

    hero: {
      tagline: 'Quantum-assisted optimization for machine learning.',
      outcomeLine: 'Investigating quantum routines for ML and computational problems.',
    },

    problem:
      'Many machine-learning problems hinge on hard non-convex optimization. Quantum heuristics promise alternative search dynamics, but rigorous, empirical evidence of practical benefit is still sparse.',
    context: 'Active research project. Outputs will feed into a future research write-up.',

    solution:
      'A research codebase that investigates quantum-assisted optimization methods and benchmarks their behaviour against classical baselines on machine-learning and computational tasks.',

    architecture: {
      overview:
        `${PENDING} — detailed methodology will be documented in the accompanying write-up.`,
      components: [
        { name: 'Quantum Optimization Routines', description: 'Quantum-assisted optimization methods under investigation.' },
        { name: 'ML Applications', description: 'Application of methods to machine learning tasks.' },
        { name: 'Computational Benchmarks', description: 'Application to computational problem solving.' },
      ],
    },

    techStack: [], // pending verification

    challenges: [
      {
        title: PENDING,
        explanation: 'Research, statistical, and implementation challenges will be documented as the project progresses.',
      },
    ],

    learnings: [PENDING],

    futureWork: PENDING + '.',

    links: { github: undefined, demo: undefined, paper: undefined },

    slug: 'qml-optimizer',
    role: 'Researcher',
    year: '2025',
    accent: '#a855f7',
    color: 'from-violet-500/20 to-purple-500/10',
  },

  // --------------------------------------------------------------------------
  {
    id: 'calisthenics',
    title: 'Calisthenics Progression Platform',
    shortDescription:
      'A structured training application designed to guide users through progressive bodyweight fitness skill development.',
    category: 'Health Technology',
    status: 'Live',

    hero: {
      tagline: 'A structured path through bodyweight skill development.',
      outcomeLine: 'Helps users systematically progress through bodyweight skills.',
    },

    problem:
      'Calisthenics progression is opaque for most beginners — there is no scaffolded path from basic movements toward advanced bodyweight skills.',
    context: 'Live application. Built as a structured training companion.',

    solution:
      'A structured training application that guides users through progressive bodyweight fitness skill development.',

    architecture: {
      overview:
        `${PENDING} — full architecture will be documented as the product evolves.`,
      components: [
        { name: 'Progression Engine', description: 'Structured progression through bodyweight skills.' },
      ],
    },

    techStack: [], // pending verification

    challenges: [
      {
        title: PENDING,
        explanation: 'Product and training-science challenges will be documented as the platform evolves.',
      },
    ],

    learnings: [PENDING],

    futureWork: PENDING + '.',

    links: { github: undefined, demo: undefined, paper: undefined },

    slug: 'calisthenics',
    role: 'Founder & Developer',
    year: '2024',
    accent: '#10b981',
    color: 'from-emerald-500/20 to-teal-500/10',
  },

  // --------------------------------------------------------------------------
  {
    id: 'freelance-studio',
    title: 'Freelance Development Studio',
    shortDescription:
      'Portfolio websites, startup landing pages, and custom software solutions built for students, researchers, and founders.',
    category: 'Software Development',
    status: 'Ongoing',

    hero: {
      tagline: 'Polished software for students, researchers, and founders.',
      outcomeLine: 'Ongoing studio practice delivering polished software work.',
    },

    problem:
      'Early-stage builders need work that exceeds template-tier portfolio quality but rarely have access to senior product engineering.',
    context: 'Ongoing studio practice serving students, researchers, and early-stage founders.',

    solution:
      'A small studio practice through which polished software is shipped on a per-engagement basis — including portfolio websites, startup landing pages, and custom software solutions.',

    architecture: {
      overview:
        `${TBR} — engagement-by-engagement; this page summarizes recurring deliverable types.`,
      components: [
        { name: 'Portfolio Websites', description: 'Premium portfolios for individuals and teams.' },
        { name: 'Startup Landing Pages', description: 'High-conversion landing pages.' },
        { name: 'Custom Software Solutions', description: 'Bespoke software work for clients.' },
      ],
    },

    techStack: [], // engagement-dependent

    challenges: [
      {
        title: PENDING,
        explanation: 'Per-engagement learnings and challenges will be documented over time.',
      },
    ],

    learnings: [PENDING],

    futureWork: PENDING + '.',

    links: { github: undefined, demo: undefined, paper: undefined },

    slug: 'freelance-studio',
    role: 'Founder',
    year: 'Ongoing',
    accent: '#38bdf8',
    color: 'from-sky-500/20 to-blue-500/10',
  },
];

export const categories = [
  'All',
  'Quantum Computing',
  'Quantum Computing Research',
  'Productivity Technology',
  'Assistive AI',
  'Health Technology',
  'Software Development',
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
