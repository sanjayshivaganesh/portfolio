// ============================================================================
// PROJECT CONTENT SCHEMA
// ----------------------------------------------------------------------------
// The dynamic case-study page at /projects/[slug] renders this data directly.
// Each object also carries the structured portfolio fields requested for use on
// project pages, index cards, and homepage previews.
// ============================================================================

const linkDefaults = { github: undefined, demo: undefined, paper: undefined };

const projectRecords = [
  {
    project_slug: 'quantum-platform',
    id: 'quantum-platform',
    slug: 'quantum-platform',
    title: 'Quantum Machine Learning Platform',
    status: 'Completed',
    category: 'Infrastructure / Quantum Computing',
    problem_statement:
      'Learners and practitioners need a structured way to study Quantum Machine Learning beyond scattered notebooks and papers. This educational platform brings interactive notebooks, mathematical explanations, theory modules, practical implementations, and example experiments into one accessible site.',
    technical_implementation:
      'The platform is organized as a live educational surface for Quantum Machine Learning. Interactive Jupyter notebooks support hands-on experimentation, while theory modules and mathematical explanations provide conceptual grounding. Practical implementations and example experiments connect formal QML ideas to runnable workflows. The existing product is complete and publicly accessible; additional content and improvements can continue to be introduced over time without treating the current platform as unfinished.',
    architecture: {
      overview:
        'The platform combines educational theory modules, interactive notebooks, practical implementation examples, and a deployed web surface for public access.',
      components: [
        { name: 'Theory Modules', description: 'Structured explanations of Quantum Machine Learning concepts and mathematics.' },
        { name: 'Interactive Notebooks', description: 'Jupyter-based environments for exploring QML ideas hands-on.' },
        { name: 'Practical Implementations', description: 'Runnable examples that connect theory to applied workflows.' },
        { name: 'Deployed Web Surface', description: 'Publicly accessible platform hosting the educational experience.' },
      ],
    },
    current_progress:
      'The platform is complete, live, and accessible. Improvements and additional content will continue to be introduced over time.',
    key_features: [
      'Interactive Jupyter notebooks',
      'Mathematical explanations',
      'Theory modules',
      'Practical implementations',
      'Example experiments',
      'Live public deployment',
    ],
    techStack: ['Python', 'Jupyter', 'PennyLane', 'Qiskit', 'Web deployment'],
    output_or_artifacts: ['Live educational platform', 'Interactive notebooks', 'Theory and implementation modules'],
    constraints_or_challenges: [
      'Educational clarity must be balanced with technical accuracy for a fast-moving research area.',
      'Ongoing content additions should not be confused with incompleteness of the existing platform.',
    ],
    shortDescription:
      'Educational Quantum Machine Learning platform with interactive notebooks, theory modules, and practical implementations.',
    hero: {
      tagline: 'An educational platform for Quantum Machine Learning.',
      outcomeLine: 'Completed and live; additional content and improvements may continue over time.',
    },
    problem:
      'Learners and practitioners need a structured way to study Quantum Machine Learning beyond scattered notebooks and papers. This educational platform brings interactive notebooks, mathematical explanations, theory modules, practical implementations, and example experiments into one accessible site.',
    context: 'Completed educational product that remains open to ongoing content improvements.',
    solution:
      'A live platform combining interactive notebooks, mathematical explanations, theory modules, practical implementations, and example experiments.',
    challenges: [
      {
        title: 'Educational depth',
        explanation:
          'The material has to remain rigorous enough for serious QML study while staying approachable for learners.',
      },
      {
        title: 'Living content',
        explanation:
          'The platform can keep improving without implying that the currently shipped experience is unfinished.',
      },
    ],
    learnings: [
      'Interactive notebooks are most useful when paired with clear mathematical and conceptual framing.',
      'A completed educational platform can still evolve through continued content additions.',
    ],
    futureWork:
      'Continue introducing additional content and refinements while keeping the live platform accessible.',
    links: { ...linkDefaults, demo: 'https://qml-platform.vercel.app/' },
    role: 'Developer & Educator',
    year: '2024 – 2025',
    accent: '#8b5cf6',
    color: 'from-violet-500/20 to-cyan-500/10',
  },
  {
    project_slug: 'qml-optimizer-preprint',
    id: 'qml-optimizer-preprint',
    slug: 'qml-optimizer-preprint',
    title: 'Hybrid Quantum-Classical Scheduling Optimizer',
    status: 'Completed',
    category: 'Research',
    problem_statement:
      'Task scheduling systems often rely on classical optimisation alone. This project investigates whether variational quantum algorithms and quantum machine learning techniques can improve intelligent scheduling decisions relative to classical optimisation baselines.',
    technical_implementation:
      'The system uses a hybrid quantum-classical architecture for intelligent task scheduling. Variational quantum circuits are implemented with PennyLane and evaluated alongside classical optimisation baselines. Scheduling and prioritisation algorithms are benchmarked experimentally so performance can be compared carefully. Outputs include an open-source implementation, technical documentation, and a research manuscript describing the methodology and results. Claims about quantum advantage are limited to what the experiments support.',
    architecture: {
      overview:
        'The project combines variational quantum circuits, classical optimisation baselines, scheduling logic, and experimental benchmarking.',
      components: [
        { name: 'Hybrid Architecture', description: 'Coordinates classical and quantum components for scheduling decisions.' },
        { name: 'Variational Quantum Circuits', description: 'PennyLane-based circuits used within the hybrid optimisation loop.' },
        { name: 'Classical Baselines', description: 'Classical optimisation methods used for controlled comparison.' },
        { name: 'Scheduling Algorithms', description: 'Prioritisation and scheduling logic evaluated experimentally.' },
        { name: 'Benchmarking Layer', description: 'Measures and documents comparative performance.' },
      ],
    },
    current_progress:
      'Implementation is complete. Open-source code, technical documentation, and research manuscript materials are available.',
    key_features: [
      'Hybrid quantum-classical architecture',
      'Variational quantum circuits with PennyLane',
      'Classical optimisation baselines',
      'Scheduling and prioritisation algorithms',
      'Experimental benchmarking and performance evaluation',
    ],
    techStack: ['Python', 'PennyLane', 'NumPy', 'Optimisation libraries', 'LaTeX'],
    output_or_artifacts: ['Open-source implementation', 'Technical documentation', 'Research manuscript'],
    constraints_or_challenges: [
      'Comparative claims must remain limited to experimentally supported results.',
      'Hybrid scheduling evaluation requires careful baseline design.',
    ],
    shortDescription:
      'Hybrid quantum-classical optimisation system for intelligent task scheduling, with open-source implementation and research documentation.',
    hero: {
      tagline: 'Investigating quantum-assisted approaches to intelligent task scheduling.',
      outcomeLine: 'Implementation complete, with open-source code and research documentation available.',
    },
    problem:
      'Task scheduling systems often rely on classical optimisation alone. This project investigates whether variational quantum algorithms and quantum machine learning techniques can improve intelligent scheduling decisions relative to classical optimisation baselines.',
    context: 'Completed research and implementation project comparing hybrid and classical scheduling approaches.',
    solution:
      'A hybrid quantum-classical scheduling system with PennyLane variational circuits, classical baselines, and experimental benchmarking.',
    challenges: [
      {
        title: 'Fair comparison',
        explanation:
          'Quantum and classical methods must be evaluated under comparable scheduling conditions so results remain interpretable.',
      },
      {
        title: 'Claim discipline',
        explanation:
          'The work does not claim that the quantum approach outperforms classical optimisation unless that conclusion is supported by the experimental results.',
      },
    ],
    learnings: [
      'Hybrid scheduling research benefits from strong classical baselines and transparent evaluation criteria.',
      'Open-source release makes experimental methods easier to inspect and extend.',
    ],
    futureWork:
      'Continue refining documentation and experimental reporting around the completed implementation.',
    links: { ...linkDefaults, github: 'https://github.com/sanjayshivaganesh/qaoa-optimizer' },
    role: 'Researcher & Developer',
    year: '2025',
    accent: '#a855f7',
    color: 'from-purple-500/20 to-blue-500/10',
  },
  {
    project_slug: 'qml-vs-hopfield-networks',
    id: 'qml-vs-hopfield-networks',
    slug: 'qml-vs-hopfield-networks',
    title: 'Hybrid Quantum-Classical Associative Memory Research',
    status: 'Completed',
    category: 'Research',
    problem_statement:
      'Comparing Classical Hopfield Networks and a Hybrid Quantum-Classical Associative Memory Model: Recall Accuracy, Noise Robustness, and Storage Capacity. Associative memory systems require reliable pattern retrieval under noise and capacity constraints, motivating a controlled comparison between classical and hybrid quantum-classical approaches.',
    technical_implementation:
      'This independent research project compares hybrid quantum-classical neural networks against classical Hopfield Networks for associative memory tasks. The experimental programme covers recall accuracy analysis, noise robustness evaluation, and storage capacity comparison, with benchmarking implemented using PennyLane. Results are interpreted through statistical analysis. Outputs include a full research paper, an open-source implementation, and a complete experimental framework with reproducible results. The paper is live on Zenodo. CJSJ submission results are awaited, and PJPCR submission is ongoing. Research and implementation are complete; journal or conference acceptance decisions remain pending.',
    architecture: {
      overview:
        'The research pipeline contains benchmark configuration, classical and hybrid model runners, metric computation, statistical analysis, and publication artifacts.',
      components: [
        { name: 'Benchmark Configurations', description: 'Defines datasets, noise levels, capacity settings, and repeated-run controls.' },
        { name: 'Hopfield Runner', description: 'Executes classical associative memory retrieval under matched task settings.' },
        { name: 'Hybrid Quantum-Classical Runner', description: 'Runs the hybrid associative memory model for comparable evaluation.' },
        { name: 'Evaluation Layer', description: 'Computes recall accuracy, noise robustness, and storage capacity metrics.' },
        { name: 'Statistical Analysis', description: 'Interprets experimental results and supports manuscript reporting.' },
      ],
    },
    current_progress:
      'Research and implementation are complete. The paper is live on Zenodo. CJSJ submission results are awaited, and PJPCR submission is ongoing. Acceptance has not been claimed.',
    key_features: [
      'Classical Hopfield versus hybrid quantum-classical comparison',
      'Recall accuracy analysis',
      'Noise robustness evaluation',
      'Storage capacity comparison',
      'PennyLane experimental benchmarking',
      'Statistical analysis and interpretation',
      'Full paper, open-source implementation, and reproducible framework',
    ],
    techStack: ['Python', 'PennyLane', 'NumPy', 'Matplotlib', 'LaTeX'],
    output_or_artifacts: [
      'Full research paper (live on Zenodo)',
      'Open-source implementation',
      'Complete experimental framework with reproducible results',
    ],
    constraints_or_challenges: [
      'Publication or submission decisions for CJSJ and PJPCR remain pending and must not be described as acceptance.',
      'Fair comparison requires matched task definitions across classical and hybrid models.',
    ],
    shortDescription:
      'Completed independent research comparing hybrid quantum-classical associative memory with classical Hopfield Networks on recall, noise robustness, and storage capacity.',
    hero: {
      tagline: 'Comparing classical and hybrid quantum-classical associative memory.',
      outcomeLine: 'Research complete; paper live on Zenodo, with CJSJ and PJPCR decisions still pending.',
    },
    problem:
      'Comparing Classical Hopfield Networks and a Hybrid Quantum-Classical Associative Memory Model across recall accuracy, noise robustness, and storage capacity.',
    context: 'Completed independent research with Zenodo availability and ongoing publication submissions.',
    solution:
      'A controlled experimental study with PennyLane benchmarking, statistical analysis, an open-source implementation, and a full research paper.',
    challenges: [
      {
        title: 'Fair benchmark design',
        explanation:
          'Classical Hopfield retrieval and hybrid quantum-classical inference have different mechanics, so task interfaces and evaluation metrics must be normalized.',
      },
      {
        title: 'Publication status discipline',
        explanation:
          'Completed research and a live Zenodo paper are distinct from journal or conference acceptance, which remains pending for CJSJ and PJPCR.',
      },
    ],
    learnings: [
      'Associative memory comparisons require separate metrics for recall quality, noise robustness, and capacity.',
      'Reproducible experimental frameworks strengthen research claims independently of submission outcomes.',
    ],
    futureWork:
      'Await CJSJ results, continue the PJPCR submission process, and refine presentation materials as review feedback arrives.',
    links: linkDefaults,
    role: 'Researcher',
    year: '2025',
    accent: '#22d3ee',
    color: 'from-cyan-500/20 to-violet-500/10',
  },
  {
    project_slug: 'state-space-hopfield-retrieval',
    id: 'state-space-hopfield-retrieval',
    slug: 'state-space-hopfield-retrieval',
    title: 'A State-Space Analysis of Retrieval Landscapes in Classical and Quantum Hopfield Associative Memory',
    status: 'Completed',
    category: 'Research',
    problem_statement:
      'A State-Space Analysis of Retrieval Landscapes in Classical and Quantum Hopfield Associative Memory. Retrieval behaviour in associative memory systems is shaped by landscape structure, motivating computational experiments that characterize classical and quantum Hopfield state spaces.',
    technical_implementation:
      'This independent research project investigates the retrieval landscapes of classical and quantum Hopfield associative memory systems through computational experiments and state-space analysis. It is distinct from the hybrid quantum-classical associative memory comparison study. Outputs include a full research paper, an open-source implementation, and a complete experimental framework with reproducible results. Research and implementation are complete, and the work has been submitted to INSEF. No award or further-stage advancement is claimed.',
    architecture: {
      overview:
        'The research pipeline covers state-space experiment design, classical and quantum Hopfield runners, landscape analysis, and reproducible research artifacts.',
      components: [
        { name: 'Experiment Design', description: 'Defines state-space probes, retrieval settings, and controlled computational trials.' },
        { name: 'Classical Hopfield Analysis', description: 'Characterizes retrieval landscapes in classical associative memory systems.' },
        { name: 'Quantum Hopfield Analysis', description: 'Examines retrieval landscapes in quantum Hopfield associative memory systems.' },
        { name: 'Reproducible Framework', description: 'Supports open-source implementation and repeatable experimental runs.' },
      ],
    },
    current_progress:
      'Research and implementation are complete. The project has been submitted to INSEF. No acceptance, award, or further-stage advancement is claimed.',
    key_features: [
      'State-space analysis of retrieval landscapes',
      'Classical Hopfield associative memory experiments',
      'Quantum Hopfield associative memory experiments',
      'Full research paper',
      'Open-source implementation',
      'Complete experimental framework with reproducible results',
      'INSEF submission completed',
    ],
    techStack: ['Python', 'PennyLane', 'NumPy', 'Matplotlib', 'LaTeX'],
    output_or_artifacts: [
      'Full research paper',
      'Open-source implementation',
      'Complete experimental framework with reproducible results',
      'INSEF submission',
    ],
    constraints_or_challenges: [
      'INSEF submission does not imply acceptance, award, or advancement unless separately established.',
      'This project must remain distinct from the hybrid quantum-classical associative memory comparison study.',
    ],
    shortDescription:
      'Completed independent research analyzing retrieval landscapes in classical and quantum Hopfield associative memory; submitted to INSEF.',
    hero: {
      tagline: 'Mapping retrieval landscapes in classical and quantum Hopfield systems.',
      outcomeLine: 'Research and implementation complete; submitted to INSEF.',
    },
    problem:
      'A State-Space Analysis of Retrieval Landscapes in Classical and Quantum Hopfield Associative Memory.',
    context: 'Completed independent research project submitted to INSEF, separate from the hybrid associative memory comparison study.',
    solution:
      'Computational experiments and state-space analysis supported by a full paper, open-source implementation, and reproducible experimental framework.',
    challenges: [
      {
        title: 'Landscape interpretability',
        explanation:
          'State-space analysis must connect computational observations to retrieval behaviour without overstating theoretical conclusions.',
      },
      {
        title: 'Submission status discipline',
        explanation:
          'An INSEF submission is recorded accurately without implying award outcomes or further-stage advancement.',
      },
    ],
    learnings: [
      'Retrieval landscape structure provides a complementary lens to accuracy-only associative memory benchmarks.',
      'Keeping related research projects separate preserves clarity about methods, outputs, and submission status.',
    ],
    futureWork:
      'Respond to any INSEF process updates and refine presentation of the completed experimental framework as needed.',
    links: linkDefaults,
    role: 'Researcher',
    year: '2025',
    accent: '#38bdf8',
    color: 'from-sky-500/20 to-indigo-500/10',
  },
  {
    project_slug: 'qml-robustness-benchmark',
    id: 'qml-robustness-benchmark',
    slug: 'qml-robustness-benchmark',
    title: 'QML Robustness Benchmark Framework',
    status: 'Completed',
    category: 'Research / Infrastructure',
    problem_statement:
      'QML experiments are difficult to compare when model settings, datasets, perturbations, and evaluation logic are not standardized. This project provides reproducible research infrastructure for benchmarking robustness in Quantum Machine Learning experiments.',
    technical_implementation:
      'The framework standardises experimental configuration, perturbation testing, evaluation metrics, and artefact generation, enabling reproducible comparisons of QML models across datasets and robustness scenarios. It supports config-driven experiment execution, reproducible end-to-end benchmarking pipelines, dataset and perturbation management, robustness evaluation across multiple QML models, and automatic generation of figures, tables, and research artefacts. The design is extensible to support the Hybrid Quantum-Classical Associative Memory research project and future QML architectures. The framework is complete and available on GitHub.',
    architecture: {
      overview:
        'The framework is organized as configuration files, reproducible runners, perturbation modules, metric evaluators, and artifact exporters.',
      components: [
        { name: 'Config Layer', description: 'Stores datasets, model settings, perturbation definitions, seeds, and metric selections.' },
        { name: 'Pipeline Runner', description: 'Executes reproducible end-to-end experiments from configuration.' },
        { name: 'Robustness Modules', description: 'Applies controlled perturbations across datasets and model inputs.' },
        { name: 'Evaluation Engine', description: 'Computes robustness, accuracy, and comparison metrics.' },
        { name: 'Artifact Exporter', description: 'Produces figures, tables, and structured research artefacts.' },
      ],
    },
    current_progress:
      'The framework is complete and available on GitHub.',
    key_features: [
      'Config-driven experiment execution',
      'Reproducible end-to-end benchmarking pipelines',
      'Dataset and perturbation management',
      'Robustness evaluation across multiple QML models',
      'Automatic generation of figures, tables, and research artefacts',
      'Extensible design for related QML research and future architectures',
    ],
    techStack: ['Python', 'YAML', 'Qiskit', 'PennyLane', 'NumPy', 'Pandas', 'Matplotlib'],
    output_or_artifacts: ['Completed benchmark framework', 'Experiment configurations', 'Robustness evaluation outputs'],
    constraints_or_challenges: [
      'Config files must capture enough execution detail to make reruns meaningful.',
      'Robustness tests need consistent perturbation semantics across different model types.',
    ],
    shortDescription:
      'Completed reproducible research infrastructure for benchmarking robustness in Quantum Machine Learning experiments.',
    hero: {
      tagline: 'Reproducible robustness infrastructure for QML experiments.',
      outcomeLine: 'Complete and available on GitHub.',
    },
    problem:
      'QML experiments are difficult to compare when model settings, datasets, perturbations, and evaluation logic are not standardized. This project builds a reproducibility framework for robustness testing across QML experiments.',
    context: 'Completed research infrastructure that supports related QML associative memory work and future architectures.',
    solution:
      'A config-driven benchmark system for rerunnable QML robustness experiments across models, datasets, perturbations, and evaluation metrics.',
    challenges: [
      {
        title: 'Configuration completeness',
        explanation:
          'The benchmark has to encode seeds, datasets, perturbations, model settings, and metric definitions without becoming too rigid to extend.',
      },
      {
        title: 'Cross-model comparability',
        explanation:
          'Robustness tests must be meaningful across models with different input representations and training mechanics.',
      },
    ],
    learnings: [
      'Reproducibility infrastructure is necessary for credible research claims in QML benchmarking.',
      'Config-driven pipelines make graph generation and audit trails substantially easier to maintain.',
    ],
    futureWork:
      'Extend model and dataset coverage as related research needs evolve.',
    links: linkDefaults,
    role: 'Research Infrastructure Developer',
    year: '2025',
    accent: '#14b8a6',
    color: 'from-teal-500/20 to-blue-500/10',
  },
  {
    project_slug: 'open-source-quantum-contributions',
    id: 'open-source-quantum-contributions',
    slug: 'open-source-quantum-contributions',
    title: 'Open Source & Technical Writing',
    status: 'Not Started',
    category: 'Open Source / Engineering',
    problem_statement:
      'Open-source quantum computing libraries and technical writing on AI, quantum computing, and machine learning remain planned activities. Relevant pull requests still need to be identified, and the technical-writing activity has not yet started.',
    technical_implementation:
      'This entry covers planned contributions to open-source quantum computing libraries on GitHub and a technical blog focused on artificial intelligence, quantum computing, and machine learning. No contributions have yet been made as part of this planned activity, and no blog posts have been published under this project description. Progress will begin once candidate upstream issues are identified and writing work is initiated.',
    architecture: {
      overview:
        'Planned activity spanning upstream open-source contribution workflows and technical writing outputs.',
      components: [
        { name: 'Upstream Issue Discovery', description: 'Identify appropriate contribution opportunities in quantum computing libraries.' },
        { name: 'Contribution Workflow', description: 'Future PR-based implementation, testing, and review once work begins.' },
        { name: 'Technical Blog', description: 'Planned writing on AI, quantum computing, and machine learning.' },
      ],
    },
    current_progress:
      'Not yet started. Relevant open-source pull requests still need to be identified. Contributions have not yet been made, and the technical-writing activity has not yet started.',
    key_features: [
      'Planned open-source contributions to quantum computing libraries',
      'Planned technical blog on AI, quantum computing, and machine learning',
      'Contribution opportunities still to be identified',
    ],
    techStack: ['Python', 'Qiskit', 'PennyLane', 'Git', 'Technical writing'],
    output_or_artifacts: ['No completed artifacts yet under this planned activity'],
    constraints_or_challenges: [
      'No completed open-source contributions or published blog posts are claimed for this entry.',
      'Candidate upstream work still needs to be identified before contributions can begin.',
    ],
    shortDescription:
      'Planned open-source contributions to quantum computing libraries and a technical blog on AI, quantum computing, and machine learning — not yet started.',
    hero: {
      tagline: 'Planned open-source contributions and technical writing.',
      outcomeLine: 'Not yet started; pull requests and writing work remain to be initiated.',
    },
    problem:
      'Open-source quantum computing libraries and technical writing on AI, quantum computing, and machine learning remain planned activities that have not yet begun.',
    context: 'Portfolio entry retained as a planned activity with no completed contributions claimed.',
    solution:
      'A future contribution and writing pipeline once suitable upstream issues are identified and writing work begins.',
    challenges: [
      {
        title: 'Issue selection',
        explanation:
          'Relevant open-source pull requests still need to be identified before contribution work can start.',
      },
      {
        title: 'Accurate status reporting',
        explanation:
          'This entry must remain marked as not started until contributions or published writing exist.',
      },
    ],
    learnings: [
      'Planned portfolio activities should remain visible without implying completed impact.',
    ],
    futureWork:
      'Identify relevant upstream issues, begin production-quality contribution work, and start the technical blog.',
    links: linkDefaults,
    role: 'Open Source Contributor & Writer',
    year: 'Planned',
    accent: '#f59e0b',
    color: 'from-amber-500/20 to-sky-500/10',
  },
  {
    project_slug: 'ml-diagnosis-lab',
    id: 'ml-diagnosis-lab',
    slug: 'ml-diagnosis-lab',
    title: 'ML Model Failure Analysis Lab',
    status: 'Completed',
    category: 'ML Systems',
    problem_statement:
      'Model evaluation often stops at aggregate metrics, which hides failure modes, robustness issues, and reliability problems. This interactive machine learning benchmarking and diagnostics platform evaluates the performance, robustness, and reliability of supervised learning models across diverse datasets.',
    technical_implementation:
      'The platform supports multi-model benchmarking, including Logistic Regression, Random Forest, and Gradient Boosting. Automated evaluation covers F1-score, ROC-AUC, calibration, and related performance metrics. Diagnostic modules address model failure analysis and subgroup error patterns, with robustness testing under noisy and distribution-shifted data. Comparative visualisations and diagnostic reports support model evaluation and interpretability. The project is complete and available on GitHub.',
    architecture: {
      overview:
        'Pipeline stages: dataset and model evaluation, diagnostic modules, robustness testing, and comparative reporting.',
      components: [
        { name: 'Multi-Model Benchmarking', description: 'Evaluates Logistic Regression, Random Forest, Gradient Boosting, and related supervised models.' },
        { name: 'Evaluation Engine', description: 'Computes F1-score, ROC-AUC, calibration, and related metrics.' },
        { name: 'Failure Diagnostics', description: 'Surfaces model failure modes and subgroup error analysis.' },
        { name: 'Robustness Testing', description: 'Assesses behaviour under noisy and distribution-shifted data.' },
        { name: 'Diagnostic Reporting', description: 'Produces comparative visualisations and diagnostic reports.' },
      ],
    },
    current_progress:
      'The project is complete and available on GitHub.',
    key_features: [
      'Multi-model benchmarking (Logistic Regression, Random Forest, Gradient Boosting)',
      'Automated evaluation with F1-score, ROC-AUC, calibration, and related metrics',
      'Model failure diagnostics and subgroup error analysis',
      'Robustness testing under noisy and distribution-shifted data',
      'Comparative visualisations and diagnostic reports',
    ],
    techStack: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'pytest'],
    output_or_artifacts: ['Completed diagnosis platform', 'Diagnostic reports', 'Model evaluation artifacts'],
    constraints_or_challenges: [
      'Model-agnostic diagnosis is constrained by available metadata and prediction interfaces.',
      'Bias and mismatch detection require careful dataset slicing to avoid unsupported conclusions.',
    ],
    shortDescription:
      'Completed interactive ML benchmarking and diagnostics platform for evaluating model performance, robustness, and reliability.',
    hero: {
      tagline: 'Benchmarking and diagnosing supervised learning model failures.',
      outcomeLine: 'Complete and available on GitHub.',
    },
    problem:
      'Model evaluation often stops at aggregate metrics, which hides failure modes, robustness issues, and reliability problems across datasets.',
    context: 'Completed ML systems project focused on benchmarking, diagnostics, and interpretability.',
    solution:
      'An interactive benchmarking and diagnostics platform covering multi-model evaluation, failure analysis, robustness testing, and comparative reporting.',
    challenges: [
      {
        title: 'Actionable interpretation',
        explanation:
          'Reports must distinguish statistically supported findings from exploratory signals.',
      },
      {
        title: 'Robustness under shift',
        explanation:
          'Meaningful diagnostics require controlled noise and distribution-shift scenarios rather than aggregate scores alone.',
      },
    ],
    learnings: [
      'Aggregate performance can hide operationally important failures in specific slices or distributions.',
      'A useful ML diagnosis system connects evaluation metrics to data and model behaviour.',
    ],
    futureWork:
      'Maintain and extend diagnostic coverage as new model families or datasets are added.',
    links: linkDefaults,
    role: 'ML Systems Developer',
    year: '2025',
    accent: '#3b82f6',
    color: 'from-blue-500/20 to-emerald-500/10',
  },
  {
    project_slug: 'esg-dataset-annotation-system',
    id: 'esg-dataset-annotation-system',
    slug: 'esg-dataset-annotation-system',
    title: 'ESG Intelligence Platform',
    status: 'Completed',
    category: 'Freelance / Data Systems',
    problem_statement:
      'Corporate sustainability reports are difficult to assess consistently for ESG quality and potential greenwashing. This AI-powered ESG analysis platform processes sustainability reports and surfaces signals that may indicate greenwashing risk.',
    technical_implementation:
      'The platform combines automated ESG scoring with machine-learning-based and rule-based document analysis to generate sustainability insights. Interactive dashboards present findings for exploration. The system is designed to identify potential greenwashing indicators rather than claim perfect detection accuracy. The project is complete and deployed.',
    architecture: {
      overview:
        'The system combines document intake, ESG scoring, ML and rule-based analysis, insight generation, and interactive dashboards.',
      components: [
        { name: 'Document Analysis', description: 'Processes corporate sustainability reports for ESG-relevant signals.' },
        { name: 'ESG Scoring', description: 'Produces automated ESG scores from analysed report content.' },
        { name: 'ML and Rule-Based Analysis', description: 'Combines learned and rule-driven methods to surface sustainability insights.' },
        { name: 'Interactive Dashboards', description: 'Presents analysis outputs for exploration.' },
      ],
    },
    current_progress:
      'The project is complete and deployed.',
    key_features: [
      'Automated ESG scoring',
      'Machine-learning-based and rule-based document analysis',
      'Sustainability insights',
      'Interactive dashboards',
      'Live deployed platform',
    ],
    techStack: ['Python', 'Machine learning', 'Rule-based analysis', 'Dashboarding', 'Web deployment'],
    output_or_artifacts: ['Deployed ESG analysis platform', 'Scoring and insight outputs', 'Interactive dashboards'],
    constraints_or_challenges: [
      'The platform identifies potential greenwashing signals and does not claim perfect detection accuracy.',
      'Sustainability report language can be ambiguous, so analysis outputs require careful interpretation.',
    ],
    shortDescription:
      'Completed and deployed AI-powered ESG analysis platform for sustainability report scoring and potential greenwashing signals.',
    hero: {
      tagline: 'AI-powered analysis of corporate sustainability reports.',
      outcomeLine: 'Complete and deployed.',
    },
    problem:
      'Corporate sustainability reports are difficult to assess consistently for ESG quality and potential greenwashing.',
    context: 'Completed and deployed product for ESG document analysis and sustainability insights.',
    solution:
      'An AI-powered platform combining automated ESG scoring, ML and rule-based document analysis, sustainability insights, and interactive dashboards.',
    challenges: [
      {
        title: 'Ambiguous sustainability language',
        explanation:
          'Corporate reporting can obscure impact claims, so the system surfaces potential greenwashing indicators rather than asserting definitive detection.',
      },
      {
        title: 'Balanced analysis methods',
        explanation:
          'Combining machine-learning and rule-based approaches helps cover both pattern recognition and explicit criteria checks.',
      },
    ],
    learnings: [
      'ESG analysis benefits from both learned signals and explicit rules.',
      'Deployed dashboards make sustainability insights easier to inspect than static reports alone.',
    ],
    futureWork:
      'Continue refining scoring and analysis as reporting practices evolve.',
    links: { ...linkDefaults, demo: 'https://esgproject.netlify.app/' },
    role: 'Developer',
    year: '2025',
    accent: '#10b981',
    color: 'from-emerald-500/20 to-slate-500/10',
  },
  {
    project_slug: 'zentora',
    id: 'zentora',
    slug: 'zentora',
    title: 'Accessibility Assistant — Zentora AI',
    status: 'In Progress',
    category: 'Product / AI Systems',
    problem_statement:
      'Visually impaired users need AI assistance that can analyse screen content and explain interface changes in context, with the longer-term goal of integrating alongside screen readers such as NVDA.',
    technical_implementation:
      'Zentora is an AI assistant designed to improve digital accessibility for visually impaired users. Basic application functionality is working. The system aims to analyse screen content and provide contextual explanations of interface changes, with intended integration alongside screen readers such as NVDA. Further development and testing are currently blocked by lack of access to a Windows system. Remaining work includes Windows and NVDA validation, outreach to NGOs, and investigation of appropriate pricing. Estimated implementation timeline is eight weeks once development can proceed. Full NVDA integration and Windows testing have not been completed.',
    architecture: {
      overview:
        'The product architecture centres on screen-content analysis, contextual explanation, accessibility-oriented interaction, and planned screen-reader integration.',
      components: [
        { name: 'Screen Content Analysis', description: 'Analyses interface content to support contextual explanations.' },
        { name: 'Contextual Explanation Layer', description: 'Aims to describe interface changes in accessible language.' },
        { name: 'Screen Reader Integration Goal', description: 'Intended to work alongside tools such as NVDA once Windows testing is possible.' },
        { name: 'Validation and Outreach', description: 'Requires Windows access, NGO outreach, and pricing investigation before further progress.' },
      ],
    },
    current_progress:
      'In progress; development currently on hold. Basic application functionality is working, but further development and testing are blocked by lack of access to a Windows system. Remaining work includes NGO outreach, pricing investigation, and an estimated eight weeks of implementation once development can resume. Full NVDA integration and Windows testing are not complete.',
    key_features: [
      'AI assistant for visually impaired users',
      'Screen content analysis goals',
      'Contextual explanations of interface changes',
      'Intended NVDA and screen-reader integration',
      'Basic application functionality working',
      'Development temporarily on hold pending Windows access',
    ],
    techStack: ['React', 'AI APIs', 'Accessibility testing', 'Screen-reader integration planning'],
    output_or_artifacts: ['Working basic application functionality', 'On-hold development roadmap', 'Validation and outreach plan'],
    constraints_or_challenges: [
      'Further development and testing are blocked without Windows system access.',
      'Full NVDA integration and Windows testing have not been completed.',
    ],
    shortDescription:
      'AI accessibility assistant for visually impaired users — basic functionality working; development currently on hold pending Windows access.',
    hero: {
      tagline: 'Accessibility-first AI assistance for visually impaired users.',
      outcomeLine: 'In progress and temporarily on hold; basic functionality works, full NVDA/Windows validation remains.',
    },
    problem:
      'Visually impaired users need AI assistance that can analyse screen content and explain interface changes in context, with the goal of integrating alongside screen readers such as NVDA.',
    context: 'Ongoing product that is temporarily on hold while Windows access, testing, outreach, and pricing work remain.',
    solution:
      'An AI assistant with working basic functionality, designed for contextual interface explanations and eventual screen-reader integration.',
    challenges: [
      {
        title: 'Windows and NVDA validation',
        explanation:
          'Further development and testing cannot proceed meaningfully without Windows access for screen-reader validation.',
      },
      {
        title: 'Real-world readiness',
        explanation:
          'NGO outreach and pricing investigation remain part of the path from working basics to a validated assistive product.',
      },
    ],
    learnings: [
      'Assistive products require platform-specific testing early, especially for screen-reader integration.',
      'Basic functionality and completed validation are distinct milestones and should be reported separately.',
    ],
    futureWork:
      'Resume development once Windows access is available, complete NVDA-oriented testing, conduct NGO outreach, and investigate pricing over an estimated eight-week implementation window.',
    links: linkDefaults,
    role: 'Founder & Developer',
    year: '2025 - Present',
    accent: '#0ea5e9',
    color: 'from-sky-500/20 to-emerald-500/10',
  },
  {
    project_slug: 'zentime',
    id: 'zentime',
    slug: 'zentime',
    title: 'Productivity Intelligence Platform — Zentime',
    status: 'Completed',
    category: 'Product / Full-stack',
    problem_statement:
      'Students and professionals often manage prioritisation, scheduling, timetables, and focus sessions across disconnected tools. Zentime combines algorithmic task prioritisation, algorithmic scheduling, AI timetable generation, and Pomodoro functionality in one productivity application.',
    technical_implementation:
      'Zentime is a productivity application released publicly as a Progressive Web Application. Core product capabilities include algorithmic task prioritisation, algorithmic scheduling, AI timetable generation, and Pomodoro functionality. The application and website are complete. Remaining work focuses on marketing, including outreach to productivity influencers and gathering real-world usage feedback. No claims are made about significant user adoption, revenue, or marketing success.',
    architecture: {
      overview:
        'The product combines a PWA client, prioritisation and scheduling algorithms, AI timetable generation, Pomodoro workflows, and a completed marketing website surface.',
      components: [
        { name: 'Task Prioritisation', description: 'Algorithmic prioritisation of work items.' },
        { name: 'Scheduling Engine', description: 'Algorithmic scheduling support for planned work.' },
        { name: 'AI Timetable Generation', description: 'Generates timetables to structure productive time.' },
        { name: 'Pomodoro System', description: 'Supports focus sessions and related productivity rhythms.' },
        { name: 'Public PWA Release', description: 'Application and website released publicly; marketing remains ongoing.' },
      ],
    },
    current_progress:
      'Application and website are complete. Remaining focus is marketing, including outreach to productivity influencers and gathering real-world usage feedback.',
    key_features: [
      'Algorithmic task prioritisation',
      'Algorithmic scheduling',
      'AI timetable generation',
      'Pomodoro functionality',
      'Public Progressive Web Application release',
      'Completed product website',
    ],
    techStack: ['React', 'Firebase', 'JavaScript', 'PWA', 'Authentication'],
    output_or_artifacts: ['Completed PWA application', 'Completed product website', 'Ongoing marketing and feedback efforts'],
    constraints_or_challenges: [
      'Core product completion is distinct from marketing traction or adoption outcomes.',
      'Real-world usage feedback is still being gathered through outreach.',
    ],
    shortDescription:
      'Completed productivity PWA combining algorithmic prioritisation, scheduling, AI timetable generation, and Pomodoro — marketing remains ongoing.',
    hero: {
      tagline: 'Productivity intelligence as a publicly released PWA.',
      outcomeLine: 'Application and website complete; marketing and feedback gathering remain.',
    },
    problem:
      'Prioritisation, scheduling, timetables, and focus sessions are often fragmented across tools. Zentime unifies them in one productivity application.',
    context: 'Completed product with ongoing distribution and marketing efforts.',
    solution:
      'A publicly released Progressive Web Application combining algorithmic task prioritisation, algorithmic scheduling, AI timetable generation, and Pomodoro functionality.',
    challenges: [
      {
        title: 'Product versus distribution',
        explanation:
          'Shipping a complete application and website is separate from achieving marketing reach or validated adoption.',
      },
      {
        title: 'Feedback collection',
        explanation:
          'Real-world usage feedback depends on outreach and distribution rather than additional core feature development.',
      },
    ],
    learnings: [
      'A completed productivity product still requires deliberate marketing and feedback loops after release.',
      'Algorithmic prioritisation and scheduling are most useful when paired with simple focus workflows such as Pomodoro.',
    ],
    futureWork:
      'Continue marketing outreach to productivity influencers and gather real-world usage feedback.',
    links: linkDefaults,
    role: 'Founder & Developer',
    year: '2024 - 2025',
    accent: '#6366f1',
    color: 'from-indigo-500/20 to-teal-500/10',
  },
  {
    project_slug: 'calisthenics-app',
    id: 'calisthenics-app',
    slug: 'calisthenics-app',
    title: 'Calisthenics Skill Development App',
    status: 'Completed',
    category: 'Product / Mobile Fitness',
    problem_statement:
      'Bodyweight skill progressions are difficult to follow without structured guidance. This iOS application guides users through structured calisthenics progressions using a skill-tree model and has been published on the Apple App Store.',
    technical_implementation:
      'The application uses a skill-tree model to guide users through structured calisthenics progressions. Core application functionality is implemented and the product has been published on the Apple App Store. Scheduling bugs still need to be resolved, with an estimated one-week implementation timeline for addressing the remaining issues. The project is functionally complete but still requires final bug fixes.',
    architecture: {
      overview:
        'The iOS architecture centres on skill-tree progressions, workout guidance, scheduling, and App Store distribution.',
      components: [
        { name: 'Skill Tree System', description: 'Guides users through structured calisthenics progressions.' },
        { name: 'Training Guidance', description: 'Supports planned bodyweight skill development sessions.' },
        { name: 'Scheduling Layer', description: 'Handles training schedules; remaining bugs still require fixes.' },
        { name: 'App Store Release', description: 'Published iOS application with functionally complete core experience.' },
      ],
    },
    current_progress:
      'Functionality is complete and the app is published on the Apple App Store. Scheduling bugs still need to be resolved, with an estimated one-week timeline for remaining fixes.',
    key_features: [
      'Structured calisthenics progressions',
      'Skill-tree development model',
      'iOS application published on the App Store',
      'Core functionality complete',
      'Remaining scheduling bug fixes',
    ],
    techStack: ['iOS', 'Swift or mobile app stack', 'Skill progression models', 'App Store distribution'],
    output_or_artifacts: ['Published App Store application', 'Skill-tree progression system', 'Outstanding scheduling bug-fix work'],
    constraints_or_challenges: [
      'Scheduling bugs remain unresolved despite functionally complete core features.',
      'Publication does not imply that all known bugs have been fixed.',
    ],
    shortDescription:
      'Published iOS calisthenics skill-tree app — functionally complete, with scheduling bug fixes still remaining.',
    hero: {
      tagline: 'Skill-tree guidance for calisthenics progressions.',
      outcomeLine: 'Functionality complete and published; scheduling bug fixes remain.',
    },
    problem:
      'Bodyweight skill progressions are difficult to follow without structured guidance across stages and milestones.',
    context: 'Published iOS product that is functionally complete while final scheduling bugs are still being addressed.',
    solution:
      'An App Store-published iOS application that guides users through structured calisthenics progressions using a skill-tree model.',
    challenges: [
      {
        title: 'Remaining scheduling bugs',
        explanation:
          'Core functionality is complete, but scheduling issues still require an estimated one week of fix work.',
      },
      {
        title: 'Progression clarity',
        explanation:
          'Skill-tree guidance must remain clear during training without overclaiming athletic outcomes.',
      },
    ],
    learnings: [
      'Publishing a functionally complete app can still leave narrowly scoped bugs that matter to day-to-day use.',
      'Skill-tree models help structure long-horizon bodyweight progressions.',
    ],
    futureWork:
      'Resolve remaining scheduling bugs over an estimated one-week implementation window.',
    links: linkDefaults,
    role: 'Product Developer',
    year: '2024 - 2025',
    accent: '#ef4444',
    color: 'from-red-500/20 to-emerald-500/10',
  },
];

export const projects = projectRecords.map((project) => ({
  ...project,
  tech_stack: project.tech_stack || project.techStack || [],
}));

export const categories = [
  'All',
  'Infrastructure / Quantum Computing',
  'Research',
  'Research / Infrastructure',
  'Open Source / Engineering',
  'ML Systems',
  'Freelance / Data Systems',
  'Product / AI Systems',
  'Product / Full-stack',
  'Product / Mobile Fitness',
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug || p.id === slug || p.project_slug === slug) || null;
}

export function getRelatedProjects(slug, limit = 3) {
  const current = getProjectBySlug(slug);
  if (!current) return [];
  const sameCategory = projects.filter((p) => p.slug !== slug && p.category === current.category);
  const others = projects.filter((p) => p.slug !== slug && p.category !== current.category);
  return [...sameCategory, ...others].slice(0, limit);
}

export default projects;
