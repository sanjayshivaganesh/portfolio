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
    title: 'Quantum Platform',
    status: 'Completed',
    category: 'Infrastructure / Quantum Computing',
    problem_statement:
      'Quantum machine learning experiments often become difficult to reproduce because orchestration, circuit construction, dataset handling, and metric logging are spread across ad hoc notebooks. This platform provides an internal execution layer for structuring QML workflows and running experiments consistently.',
    technical_implementation:
      'The platform is organized around reusable experiment definitions rather than one-off scripts. It separates configuration, dataset loading, model or circuit construction, optimizer selection, execution, and result collection into explicit stages. QML workflows can be represented as parameterized jobs, allowing repeated runs with controlled hyperparameters and comparable outputs. The execution layer supports experiment orchestration so that multiple model variants or training settings can be run without rewriting pipeline code. Outputs are structured for downstream analysis, including metric comparison and experiment traceability. The platform functions as infrastructure for later research work rather than as an end-user application.',
    architecture: {
      overview:
        'The system is composed of a workflow definition layer, experiment runner, QML execution adapters, result logging utilities, and analysis-facing artifacts.',
      components: [
        { name: 'Workflow Definitions', description: 'Declarative experiment specifications for datasets, circuits, optimizers, and evaluation settings.' },
        { name: 'Experiment Runner', description: 'Coordinates initialization, repeated execution, parameter sweeps, and result capture.' },
        { name: 'QML Execution Layer', description: 'Interfaces with quantum machine learning routines and hybrid quantum-classical training loops.' },
        { name: 'Artifact Store', description: 'Persists metrics, intermediate outputs, and run metadata for later comparison.' },
      ],
    },
    current_progress:
      'Core orchestration and experiment execution support are completed. Future work would mainly involve expanding adapters, adding stronger provenance metadata, and integrating additional benchmark suites.',
    key_features: [
      'QML workflow orchestration',
      'Structured experiment execution',
      'Reusable experiment definitions',
      'Controlled parameter sweeps',
      'Metric and artifact capture',
    ],
    techStack: ['Python', 'Qiskit', 'PennyLane', 'NumPy', 'Experiment orchestration'],
    output_or_artifacts: ['Internal QML experiment platform', 'Reusable workflow templates', 'Experiment execution artifacts'],
    constraints_or_challenges: [
      'Quantum simulators and hardware backends impose execution-time and shot-count constraints.',
      'Reproducibility requires strict separation between configuration, random seeds, and runtime state.',
    ],
    shortDescription:
      'Internal infrastructure for orchestrating quantum machine learning workflows and executing reproducible experiments.',
    hero: {
      tagline: 'Infrastructure for structured quantum machine learning experiments.',
      outcomeLine: 'Completed internal platform layer for QML workflow orchestration and experiment execution.',
    },
    problem:
      'Quantum machine learning experiments often become difficult to reproduce because orchestration, circuit construction, dataset handling, and metric logging are spread across ad hoc notebooks. This platform provides an internal execution layer for structuring QML workflows and running experiments consistently.',
    context: 'Completed infrastructure project used to support QML experimentation and later research workflows.',
    solution:
      'A reusable platform layer that separates experiment configuration, execution, result collection, and analysis-facing artifacts for quantum machine learning workflows.',
    challenges: [
      {
        title: 'Backend variability',
        explanation:
          'QML runs can behave differently across simulators and hardware-like settings, so the platform must preserve run context and avoid hidden assumptions in execution code.',
      },
      {
        title: 'Experiment traceability',
        explanation:
          'The system has to keep configuration, metrics, and outputs aligned so later research comparisons remain interpretable.',
      },
    ],
    learnings: [
      'Reusable research infrastructure reduces variance introduced by notebook-level implementation differences.',
      'QML experimentation benefits from treating workflows as structured jobs rather than scripts.',
    ],
    futureWork:
      'Extend backend adapters, add richer metadata capture, and connect the platform to the robustness benchmark pipeline.',
    links: linkDefaults,
    role: 'Research Infrastructure Developer',
    year: '2024',
    accent: '#8b5cf6',
    color: 'from-violet-500/20 to-cyan-500/10',
  },
  {
    project_slug: 'qml-optimizer-preprint',
    id: 'qml-optimizer-preprint',
    slug: 'qml-optimizer-preprint',
    title: 'QML Optimizer & Preprint',
    status: 'Completed',
    category: 'Research',
    problem_statement:
      'Hybrid quantum-classical models are sensitive to optimizer behavior, initialization, and noisy objective estimates. This project formalizes a QML optimization method and documents its behavior through experimental validation.',
    technical_implementation:
      'The work defines an optimization mechanism for QML training loops in which parameter updates are evaluated through a controlled hybrid objective pipeline. The method is framed around the interaction between variational circuit parameters, classical optimizer state, and measured model performance. Experimental validation compares optimizer behavior across repeated runs and controlled task settings to evaluate stability, convergence, and performance consistency. The implementation records intermediate metrics so the optimizer can be analyzed as a training process rather than only by final accuracy. Results are organized into preprint-level documentation with method description, experimental setup, observations, and limitations. The output is research documentation, not only an implementation artifact.',
    architecture: {
      overview:
        'The research code is structured as a method layer on top of QML experiment execution, with validation pipelines and preprint documentation as separate outputs.',
      components: [
        { name: 'Optimization Mechanism', description: 'Defines how QML parameters are updated and evaluated during hybrid training.' },
        { name: 'Validation Pipeline', description: 'Runs controlled experiments across task settings and repeated trials.' },
        { name: 'Metric Logger', description: 'Captures convergence behavior, objective values, and final model metrics.' },
        { name: 'Preprint Documentation', description: 'Formalizes the method, experiments, results, and limitations in paper form.' },
      ],
    },
    current_progress:
      'The method, validation experiments, and preprint-level documentation are completed. Remaining work would involve external review, formatting refinements, or follow-up experiments if required for submission.',
    key_features: [
      'Formal QML optimization mechanism',
      'Hybrid quantum-classical training loop analysis',
      'Experimental validation across repeated runs',
      'Convergence and stability tracking',
      'Preprint-level method documentation',
    ],
    techStack: ['Python', 'Qiskit', 'PennyLane', 'NumPy', 'Matplotlib', 'LaTeX'],
    output_or_artifacts: ['Research preprint draft', 'Validation experiment outputs', 'Optimization method documentation'],
    constraints_or_challenges: [
      'QML objective estimates can be noisy, making optimizer comparisons sensitive to run conditions.',
      'Preprint claims must be constrained to validated experiments and explicitly stated assumptions.',
    ],
    shortDescription:
      'Completed research work formalizing and validating a quantum machine learning optimization method in preprint form.',
    hero: {
      tagline: 'A validated QML optimization method documented as a research preprint.',
      outcomeLine: 'Completed optimization mechanism, experimental validation, and preprint-level documentation.',
    },
    problem:
      'Hybrid quantum-classical models are sensitive to optimizer behavior, initialization, and noisy objective estimates. This project formalizes a QML optimization method and documents its behavior through experimental validation.',
    context: 'Completed research project with implementation and preprint-style documentation outputs.',
    solution:
      'A controlled optimization method for QML training loops, validated experimentally and documented at preprint depth.',
    challenges: [
      {
        title: 'Noisy objective evaluation',
        explanation:
          'Quantum measurement and simulator settings can introduce variance, so validation requires repeated trials and careful metric interpretation.',
      },
      {
        title: 'Claim discipline',
        explanation:
          'The research write-up must distinguish observed empirical behavior from broader claims about QML optimization.',
      },
    ],
    learnings: [
      'Optimizer behavior in QML should be evaluated through convergence traces and robustness, not only final task metrics.',
      'Research artifacts become more useful when code, experiment logs, and paper structure are aligned early.',
    ],
    futureWork:
      'Prepare external submission materials and extend the validation suite if reviewer feedback requires additional baselines.',
    links: linkDefaults,
    role: 'Researcher',
    year: '2025',
    accent: '#a855f7',
    color: 'from-purple-500/20 to-blue-500/10',
  },
  {
    project_slug: 'qml-vs-hopfield-networks',
    id: 'qml-vs-hopfield-networks',
    slug: 'qml-vs-hopfield-networks',
    title: 'Quantum ML Research Paper: QML vs Hopfield Networks',
    status: 'In Progress',
    category: 'Research',
    problem_statement:
      'Associative memory systems require reliable pattern retrieval under noise, partial input, and capacity constraints. This research compares quantum machine learning models with Hopfield Networks on associative memory tasks using controlled benchmarking.',
    technical_implementation:
      'The study is structured around comparable task definitions for classical Hopfield Networks and selected QML model variants. Experiments evaluate retrieval accuracy, robustness under corrupted or partial patterns, and convergence behavior during recall or optimization. Benchmarking is designed to isolate model behavior across dataset size, noise level, and memory load. The graph generation pipeline is planned and partially in progress so result tables can be converted into publication-quality plots. Experimental outputs will support a paper draft targeted for arXiv. The implementation is tied to reproducibility infrastructure so benchmark configurations can be rerun and audited.',
    architecture: {
      overview:
        'The research pipeline contains benchmark configuration, model runners, metric computation, graph generation, and paper artifact preparation.',
      components: [
        { name: 'Benchmark Configurations', description: 'Defines datasets, corruption levels, model settings, and repeated-run controls.' },
        { name: 'Hopfield Runner', description: 'Executes classical associative memory retrieval under matched task settings.' },
        { name: 'QML Runner', description: 'Runs quantum or hybrid quantum-classical model variants on the same task family.' },
        { name: 'Evaluation Layer', description: 'Computes retrieval accuracy, robustness, and convergence behavior.' },
        { name: 'Graph Pipeline', description: 'Generates plots for benchmark comparisons and paper figures.' },
      ],
    },
    current_progress:
      'The research framing and benchmarking design are in progress. Remaining work includes completing graph generation, finalizing experimental runs, interpreting results, and preparing the arXiv-targeted manuscript.',
    key_features: [
      'QML versus Hopfield associative memory comparison',
      'Controlled benchmarking setup',
      'Retrieval accuracy evaluation',
      'Robustness testing under pattern corruption',
      'Convergence behavior analysis',
      'Publication-oriented graph generation pipeline',
    ],
    techStack: ['Python', 'Qiskit', 'PennyLane', 'NumPy', 'Matplotlib', 'LaTeX'],
    output_or_artifacts: ['arXiv-targeted manuscript in progress', 'Benchmark datasets and outputs', 'Planned publication figures'],
    constraints_or_challenges: [
      'The comparison must avoid unfairly advantaging either classical or quantum models through mismatched task definitions.',
      'Associative memory metrics require careful interpretation because retrieval quality and convergence behavior are not interchangeable.',
    ],
    shortDescription:
      'In-progress arXiv-targeted study comparing QML models and Hopfield Networks for associative memory retrieval.',
    hero: {
      tagline: 'Benchmarking quantum and classical associative memory models.',
      outcomeLine: 'In-progress research paper targeting arXiv with controlled experiments and publication figures.',
    },
    problem:
      'Associative memory systems require reliable pattern retrieval under noise, partial input, and capacity constraints. This research compares quantum machine learning models with Hopfield Networks on associative memory tasks using controlled benchmarking.',
    context: 'Research paper in progress with an arXiv publication target.',
    solution:
      'A benchmark-driven comparative study measuring retrieval accuracy, robustness, and convergence behavior across Hopfield and QML model families.',
    challenges: [
      {
        title: 'Fair benchmark design',
        explanation:
          'Classical Hopfield retrieval and QML inference have different mechanics, so the task interface and evaluation metrics must be normalized.',
      },
      {
        title: 'Figure reproducibility',
        explanation:
          'Publication graphs need to be generated from reproducible experiment outputs rather than manually assembled summaries.',
      },
    ],
    learnings: [
      'Associative memory comparisons require metrics for both retrieval outcome and recall dynamics.',
      'A graph pipeline is part of the research system, not a cosmetic step after experiments finish.',
    ],
    futureWork:
      'Complete the graph generation pipeline, finish benchmark runs, and convert the results into an arXiv-ready manuscript.',
    links: linkDefaults,
    role: 'Researcher',
    year: '2025 - Present',
    accent: '#22d3ee',
    color: 'from-cyan-500/20 to-violet-500/10',
  },
  {
    project_slug: 'qml-robustness-benchmark',
    id: 'qml-robustness-benchmark',
    slug: 'qml-robustness-benchmark',
    title: 'QML Robustness Benchmark',
    status: 'In Progress',
    category: 'Research / Infrastructure',
    problem_statement:
      'QML experiments are difficult to compare when model settings, datasets, perturbations, and evaluation logic are not standardized. This project builds a reproducibility framework for robustness testing across QML experiments.',
    technical_implementation:
      'The benchmark is config-driven so experiment parameters, model choices, datasets, perturbation settings, and metric definitions are captured outside procedural code. Pipelines are designed to be rerunnable, with clear separation between data preparation, model execution, robustness perturbation, evaluation, and artifact generation. Robustness testing covers variation across models and datasets rather than a single isolated demonstration. The system is intended to support the QML versus Hopfield research paper by providing reproducible experiment infrastructure for its comparative claims. Outputs can be used to generate tables, plots, and run summaries for research documentation. The framework also creates a path for adding future QML models without rewriting the evaluation layer.',
    architecture: {
      overview:
        'The framework is organized as configuration files, reproducible runners, perturbation modules, metric evaluators, and artifact exporters.',
      components: [
        { name: 'Config Layer', description: 'Stores datasets, model settings, perturbation definitions, seeds, and metric selections.' },
        { name: 'Pipeline Runner', description: 'Executes reproducible end-to-end experiments from configuration.' },
        { name: 'Robustness Modules', description: 'Applies controlled perturbations across datasets and model inputs.' },
        { name: 'Evaluation Engine', description: 'Computes robustness, accuracy, and comparison metrics.' },
        { name: 'Artifact Exporter', description: 'Produces structured outputs for papers, plots, and audit trails.' },
      ],
    },
    current_progress:
      'The benchmark framework is in progress with the config-driven design and reproducibility requirements defined. Remaining work includes expanding model coverage, completing robustness modules, and connecting outputs directly to the QML research paper figures.',
    key_features: [
      'Config-driven experiment system',
      'Reproducible QML pipelines',
      'Robustness testing across models',
      'Dataset-level perturbation support',
      'Research-paper artifact generation',
      'Integration path for the QML vs Hopfield study',
    ],
    techStack: ['Python', 'YAML', 'Qiskit', 'PennyLane', 'NumPy', 'Pandas', 'Matplotlib'],
    output_or_artifacts: ['Benchmark framework in progress', 'Experiment configurations', 'Robustness evaluation outputs'],
    constraints_or_challenges: [
      'Config files must capture enough execution detail to make reruns meaningful.',
      'Robustness tests need consistent perturbation semantics across different model types.',
    ],
    shortDescription:
      'Config-driven reproducibility framework for robustness testing across quantum machine learning models and datasets.',
    hero: {
      tagline: 'Reproducible robustness infrastructure for QML experiments.',
      outcomeLine: 'In-progress benchmark framework supporting the QML associative memory research paper.',
    },
    problem:
      'QML experiments are difficult to compare when model settings, datasets, perturbations, and evaluation logic are not standardized. This project builds a reproducibility framework for robustness testing across QML experiments.',
    context: 'Research infrastructure project related to the QML versus Hopfield Networks paper.',
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
      'Complete robustness modules, expand model and dataset coverage, and wire benchmark outputs into the research paper graph pipeline.',
    links: linkDefaults,
    role: 'Research Infrastructure Developer',
    year: '2025 - Present',
    accent: '#14b8a6',
    color: 'from-teal-500/20 to-blue-500/10',
  },
  {
    project_slug: 'open-source-quantum-contributions',
    id: 'open-source-quantum-contributions',
    slug: 'open-source-quantum-contributions',
    title: 'Open Source Contributions: Qiskit / PennyLane',
    status: 'In Progress',
    category: 'Open Source / Engineering',
    problem_statement:
      'Quantum computing libraries require production-quality contributions rather than superficial changes. This project is an active contribution pipeline focused on non-trivial improvements to Qiskit, PennyLane, and related tooling.',
    technical_implementation:
      'The workflow is PR-based, beginning with issue selection, local reproduction, implementation, test updates, and maintainer review. Contributions are treated as valid only when they reach production-level merge quality and are accepted upstream. The focus is on non-trivial work such as bug fixes, test improvements, documentation tied to actual behavior, or library-level enhancements. Each candidate contribution requires understanding the target project architecture and respecting its CI, style, and backward compatibility constraints. Validation is strict: opened PRs, drafts, or unmerged work do not count as completed contribution artifacts. The pipeline is ongoing and prioritizes merged upstream impact over contribution volume.',
    architecture: {
      overview:
        'The contribution pipeline moves from upstream issue discovery through local validation, PR implementation, CI compliance, maintainer review, and merged upstream artifact tracking.',
      components: [
        { name: 'Issue Selection', description: 'Identifies non-trivial, appropriate upstream work in quantum computing repositories.' },
        { name: 'Local Reproduction', description: 'Builds and tests the library locally to verify the problem or requested change.' },
        { name: 'Implementation Branch', description: 'Contains code, tests, and documentation updates aligned with maintainer standards.' },
        { name: 'Review Loop', description: 'Handles CI failures, maintainer feedback, and production-level merge requirements.' },
      ],
    },
    current_progress:
      'The contribution pipeline is active. Work remains ongoing until PRs are merged upstream; only merged PRs are counted as validated artifacts.',
    key_features: [
      'PR-based open-source contribution workflow',
      'Production-level merge requirement',
      'Non-trivial issue and enhancement focus',
      'Local reproduction and test validation',
      'Merged-PR-only validation constraint',
    ],
    techStack: ['Python', 'Qiskit', 'PennyLane', 'Git', 'GitHub Actions', 'pytest'],
    output_or_artifacts: ['Merged upstream PRs when accepted', 'Local reproduction branches', 'Test and documentation patches'],
    constraints_or_challenges: [
      'Unmerged PRs are not counted as completed contributions.',
      'Upstream architecture, maintainer priorities, and CI requirements constrain implementation choices.',
    ],
    shortDescription:
      'Active PR-based contribution pipeline targeting production-level merged changes in quantum computing libraries.',
    hero: {
      tagline: 'Non-trivial upstream contributions to quantum computing libraries.',
      outcomeLine: 'In-progress contribution track where only merged production-level PRs count as validated output.',
    },
    problem:
      'Quantum computing libraries require production-quality contributions rather than superficial changes. This project is an active contribution pipeline focused on non-trivial improvements to Qiskit, PennyLane, and related tooling.',
    context: 'Ongoing open-source engineering effort with a strict merged-PR validation constraint.',
    solution:
      'A disciplined contribution workflow based on issue selection, local reproduction, implementation, tests, CI compliance, review response, and merged upstream acceptance.',
    challenges: [
      {
        title: 'Maintainer-grade quality bar',
        explanation:
          'Changes must fit upstream architecture and pass review, so contribution work includes design alignment as much as code writing.',
      },
      {
        title: 'Validation constraint',
        explanation:
          'Contribution claims are limited to merged PRs, which makes the public artifact dependent on review timelines and maintainer acceptance.',
      },
    ],
    learnings: [
      'Production open source requires reading project history and tests before changing code.',
      'A merged PR is a stronger engineering signal than a large number of unreviewed patches.',
    ],
    futureWork:
      'Continue selecting non-trivial issues, submit production-quality PRs, and record only merged upstream contributions as completed artifacts.',
    links: linkDefaults,
    role: 'Open Source Contributor',
    year: '2025 - Present',
    accent: '#f59e0b',
    color: 'from-amber-500/20 to-sky-500/10',
  },
  {
    project_slug: 'ml-diagnosis-lab',
    id: 'ml-diagnosis-lab',
    slug: 'ml-diagnosis-lab',
    title: 'ML Project: Model Debugging / Diagnosis Lab System',
    status: 'In Progress',
    category: 'ML Systems',
    problem_statement:
      'Model evaluation often stops at aggregate metrics, which hides failure modes, bias, bottlenecks, and data-model mismatch. This system accepts a trained model and dataset and produces structured diagnostic analysis over the ML pipeline.',
    technical_implementation:
      'The system is designed around a pipeline from input artifacts to evaluation, diagnostic modules, and report generation. A trained model and dataset are ingested together so the system can compare expected behavior, observed errors, and data distribution properties. The evaluation engine computes baseline performance metrics and produces slices for deeper analysis. Diagnostic modules detect failure modes, bias patterns, performance bottlenecks, and data versus model mismatch. An interpretability layer exposes model behavior through feature attribution, error clustering, or pipeline-level explanations depending on model type. The generated report is intended to make debugging actionable by separating data issues, model issues, and evaluation artifacts.',
    architecture: {
      overview:
        'Pipeline stages: input -> evaluation engine -> diagnostic modules -> report generation.',
      components: [
        { name: 'Input Layer', description: 'Accepts trained model artifacts, dataset references, labels, metadata, and evaluation configuration.' },
        { name: 'Evaluation Engine', description: 'Runs baseline metrics, slice analysis, predictions, and error extraction.' },
        { name: 'Diagnostic Modules', description: 'Detects failure modes, bias, bottlenecks, and data-model mismatch.' },
        { name: 'Interpretability Layer', description: 'Adds feature attribution, error explanations, and pipeline-level inspection outputs.' },
        { name: 'Report Generation', description: 'Produces a structured diagnostic report with findings and supporting metrics.' },
      ],
    },
    current_progress:
      'The system architecture and diagnostic scope are in progress. Remaining work includes implementing model adapters, diagnostic modules, interpretability outputs, and report formatting.',
    key_features: [
      'Trained model and dataset ingestion',
      'Failure mode detection',
      'Bias detection',
      'Performance bottleneck analysis',
      'Data versus model mismatch detection',
      'Interpretability layer over ML pipelines',
      'Automated diagnostic report generation',
    ],
    techStack: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'SHAP', 'Matplotlib', 'pytest'],
    output_or_artifacts: ['Diagnosis system in progress', 'Diagnostic reports', 'Model evaluation artifacts'],
    constraints_or_challenges: [
      'Model-agnostic diagnosis is constrained by what metadata and prediction interfaces are available.',
      'Bias and mismatch detection require careful dataset slicing to avoid unsupported conclusions.',
    ],
    shortDescription:
      'Automated ML diagnosis system for detecting model failures, bias, bottlenecks, and data-model mismatch.',
    hero: {
      tagline: 'Automated debugging for trained ML models and datasets.',
      outcomeLine: 'In-progress ML systems project structured as input, evaluation, diagnostics, and report generation.',
    },
    problem:
      'Model evaluation often stops at aggregate metrics, which hides failure modes, bias, bottlenecks, and data-model mismatch. This system accepts a trained model and dataset and produces structured diagnostic analysis over the ML pipeline.',
    context: 'In-progress ML systems project focused on interpretability and automated diagnosis.',
    solution:
      'A diagnostic pipeline that ingests model and dataset artifacts, evaluates performance, runs specialized debugging modules, and emits a structured report.',
    challenges: [
      {
        title: 'Model interface variability',
        explanation:
          'Different trained models expose predictions, probabilities, features, and internals differently, so adapters must preserve useful diagnostics without assuming one framework.',
      },
      {
        title: 'Actionable interpretation',
        explanation:
          'The report must distinguish statistically supported findings from exploratory signals.',
      },
    ],
    learnings: [
      'Aggregate performance can hide operationally important failures in specific slices or distributions.',
      'A useful ML diagnosis system has to connect evaluation metrics to data and model behavior.',
    ],
    futureWork:
      'Implement model adapters, expand diagnostic modules, and produce report templates suitable for repeated model audits.',
    links: linkDefaults,
    role: 'ML Systems Developer',
    year: '2025 - Present',
    accent: '#3b82f6',
    color: 'from-blue-500/20 to-emerald-500/10',
  },
  {
    project_slug: 'esg-dataset-annotation-system',
    id: 'esg-dataset-annotation-system',
    slug: 'esg-dataset-annotation-system',
    title: 'Freelance Work: ESG Dataset Annotation System',
    status: 'In Progress',
    category: 'Freelance / Data Systems',
    problem_statement:
      'ESG datasets require consistent labeling, cleaning, validation, and correction before they can support downstream analysis or ML workflows. This freelance project handles real production data work rather than a toy annotation exercise.',
    technical_implementation:
      'The work centers on dataset labeling workflows for ESG-related records, including cleaning inconsistent fields and applying annotation rules. Validation logic is used to identify missing values, inconsistent categories, duplicate records, and labels requiring correction. Correction workflows preserve traceability so changes can be reviewed and the dataset can be improved iteratively. Automation scripts are used where applicable to reduce repetitive cleaning and validation work while keeping manual review available for ambiguous cases. The project provides applied exposure to production data quality constraints, where correctness, consistency, and reviewability matter more than demonstration code. Outputs are shaped for practical downstream use rather than portfolio-only presentation.',
    architecture: {
      overview:
        'The system combines raw data intake, cleaning scripts, labeling workflows, validation checks, correction review, and exportable dataset artifacts.',
      components: [
        { name: 'Data Intake', description: 'Loads ESG dataset records and preserves source fields for review.' },
        { name: 'Cleaning Layer', description: 'Normalizes fields, removes obvious inconsistencies, and prepares records for annotation.' },
        { name: 'Annotation Workflow', description: 'Applies dataset labels according to defined ESG criteria and review rules.' },
        { name: 'Validation and Correction', description: 'Detects invalid, missing, duplicate, or inconsistent annotations and routes them for correction.' },
        { name: 'Export Layer', description: 'Produces corrected dataset outputs for downstream analysis or ML use.' },
      ],
    },
    current_progress:
      'Dataset cleaning, annotation, and correction work are in progress. Remaining work depends on external dataset validation cycles and any revised labeling requirements.',
    key_features: [
      'ESG dataset labeling workflows',
      'Validation and correction logic',
      'Data cleaning and normalization',
      'Automation scripts for repetitive checks',
      'Traceable correction process',
      'Real-world freelance data engineering exposure',
    ],
    techStack: ['Python', 'Pandas', 'CSV/Spreadsheet workflows', 'Data validation scripts', 'Annotation guidelines'],
    output_or_artifacts: ['Cleaned ESG dataset artifacts', 'Annotation outputs', 'Validation and correction logs'],
    constraints_or_challenges: [
      'External production data can contain inconsistent schemas, missing values, ambiguous labels, and evolving annotation requirements.',
      'Client or dataset confidentiality may limit public artifact visibility.',
    ],
    shortDescription:
      'Production data work for ESG dataset cleaning, annotation, validation, and correction in a freelance context.',
    hero: {
      tagline: 'Production ESG dataset annotation and correction workflow.',
      outcomeLine: 'In-progress freelance data systems work with real external validation requirements.',
    },
    problem:
      'ESG datasets require consistent labeling, cleaning, validation, and correction before they can support downstream analysis or ML workflows. This freelance project handles real production data work rather than a toy annotation exercise.',
    context: 'Real external freelance engagement involving applied ML and data engineering constraints.',
    solution:
      'A structured annotation and validation workflow for cleaning ESG records, applying labels, detecting inconsistencies, and producing corrected dataset artifacts.',
    challenges: [
      {
        title: 'Production data ambiguity',
        explanation:
          'ESG records may not map cleanly to labels, so the workflow has to support correction and review rather than simple one-pass labeling.',
      },
      {
        title: 'Confidentiality constraints',
        explanation:
          'Because this is external validation work, public reporting must avoid exposing private dataset details.',
      },
    ],
    learnings: [
      'Applied data engineering depends heavily on validation rules and correction traceability.',
      'Real dataset work requires balancing automation with human review for ambiguous cases.',
    ],
    futureWork:
      'Continue annotation and correction cycles, refine validation scripts, and export downstream-ready dataset versions as requirements stabilize.',
    links: linkDefaults,
    role: 'Freelance Data Engineer',
    year: '2025 - Present',
    accent: '#10b981',
    color: 'from-emerald-500/20 to-slate-500/10',
  },
  {
    project_slug: 'zentora',
    id: 'zentora',
    slug: 'zentora',
    title: 'Zentora',
    status: 'In Progress',
    category: 'Product / AI Systems',
    problem_statement:
      'Visually impaired users need AI assistance that is usable across real environments, not only in controlled demos. Zentora is an accessibility-first assistant designed around cross-platform usability, real-user testing, and iterative feedback.',
    technical_implementation:
      'The product is designed around accessibility-first constraints such as low-friction interaction, clear feedback, minimal visual dependence, and tolerance for noisy real-world input. The system goal is cross-platform usability so assistive workflows can move across devices rather than being locked to a single environment. AI components are intended to support perception, instruction handling, and task assistance while keeping interaction predictable for visually impaired users. NGO and real-user testing are planned as part of the validation process, with feedback loops informing interface behavior, failure handling, and feature prioritization. The development process treats accessibility validation as a core requirement rather than a post-build usability pass. Iteration will be driven by observed user friction and tested assistive value.',
    architecture: {
      overview:
        'The product architecture is planned around accessible input, AI assistance modules, cross-platform interaction surfaces, feedback capture, and iterative release cycles.',
      components: [
        { name: 'Accessible Input Layer', description: 'Supports interaction modes appropriate for visually impaired users, including voice or non-visual workflows.' },
        { name: 'AI Assistance Layer', description: 'Handles user requests, context interpretation, and assistive task support.' },
        { name: 'Cross-Platform Interface', description: 'Targets consistent usability across device or platform contexts.' },
        { name: 'Testing and Feedback Loop', description: 'Uses NGO and real-user testing to validate behavior and prioritize revisions.' },
      ],
    },
    current_progress:
      'Zentora is in progress, with product scope and accessibility validation requirements defined. Remaining work includes implementation, cross-platform testing, NGO or real-user pilots, and iterative refinement based on feedback.',
    key_features: [
      'AI accessibility assistant for visually impaired users',
      'Accessibility-first interaction constraints',
      'Cross-platform usability goals',
      'NGO and real-user testing plan',
      'Iterative feedback loop system',
      'Failure-handling driven product iteration',
    ],
    techStack: ['React', 'AI APIs', 'Speech interfaces', 'Accessibility testing', 'Cross-platform product design'],
    output_or_artifacts: ['Product prototype in progress', 'User testing plan', 'Feedback iteration artifacts'],
    constraints_or_challenges: [
      'Assistive technology must be validated with real users because developer assumptions can miss accessibility failures.',
      'Cross-platform consistency is difficult when input methods, permissions, and accessibility APIs differ.',
    ],
    shortDescription:
      'AI accessibility assistant for visually impaired users, built around cross-platform usability and real-user feedback.',
    hero: {
      tagline: 'Accessibility-first AI assistance for visually impaired users.',
      outcomeLine: 'In-progress product with NGO or real-user testing planned as a core validation path.',
    },
    problem:
      'Visually impaired users need AI assistance that is usable across real environments, not only in controlled demos. Zentora is an accessibility-first assistant designed around cross-platform usability, real-user testing, and iterative feedback.',
    context: 'In-progress product and AI systems project focused on assistive technology.',
    solution:
      'An AI assistant with accessible interaction modes, cross-platform usability goals, and a feedback-driven validation process with NGO or real-user testing.',
    challenges: [
      {
        title: 'Accessibility validation',
        explanation:
          'The product cannot be evaluated only by technical completion; it must be tested with visually impaired users or accessibility partners.',
      },
      {
        title: 'Predictable AI behavior',
        explanation:
          'Assistive AI must handle uncertainty clearly because unpredictable responses can create usability and safety problems.',
      },
    ],
    learnings: [
      'Accessibility-first design changes product requirements at the architecture level, not just the interface layer.',
      'A feedback loop with real users is essential for assistive AI systems.',
    ],
    futureWork:
      'Build the prototype, run NGO or real-user testing, collect structured feedback, and iterate on cross-platform assistive workflows.',
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
    title: 'ZenTime',
    status: 'In Progress',
    category: 'Product / Full-stack',
    problem_statement:
      'Students often manage focus sessions, tasks, schedules, and wellbeing in disconnected tools. ZenTime combines productivity and mental wellness workflows into a React and Firebase PWA intended for real-user iteration.',
    technical_implementation:
      'ZenTime is implemented as a full-stack productivity PWA using React on the client and Firebase for backend services. The product includes a Pomodoro system for focus sessions, a task system for work tracking, and a timetable system for structured scheduling. Authentication is part of the core architecture so user-specific tasks, routines, and progress can persist across sessions. PWA deployment is required so the app can behave like a lightweight installable productivity tool across devices. The mental wellness layer is integrated with productivity workflows rather than treated as a separate static content area. Real-user iteration goals guide feature prioritization, usability improvements, and workflow changes.',
    architecture: {
      overview:
        'The app uses a React PWA frontend, Firebase authentication and persistence, productivity modules, wellness workflows, and deployment configuration for installable use.',
      components: [
        { name: 'React PWA Client', description: 'Provides the installable app interface and offline-aware product shell.' },
        { name: 'Firebase Authentication', description: 'Manages user sign-in and user-specific data access.' },
        { name: 'Task and Timetable Modules', description: 'Stores tasks, schedules, routines, and planning state.' },
        { name: 'Pomodoro System', description: 'Runs focus sessions, breaks, and session state.' },
        { name: 'Iteration Loop', description: 'Uses real-user feedback to refine product workflows.' },
      ],
    },
    current_progress:
      'ZenTime is in progress with the product scope centered on Pomodoro, tasks, timetable, authentication, and PWA deployment. Remaining work includes completing feature integration, deployment hardening, and real-user iteration.',
    key_features: [
      'Pomodoro focus system',
      'Task management',
      'Timetable planning',
      'Firebase authentication',
      'PWA deployment',
      'Mental wellness workflow integration',
      'Real-user iteration goals',
    ],
    techStack: ['React', 'Firebase', 'JavaScript', 'PWA', 'Authentication', 'Firestore'],
    output_or_artifacts: ['Product app in progress', 'PWA deployment target', 'User feedback artifacts'],
    constraints_or_challenges: [
      'The product has to balance productivity depth with a lightweight interface suitable for repeated daily use.',
      'Authentication, persistence, and PWA behavior need to remain reliable across devices.',
    ],
    shortDescription:
      'React and Firebase productivity PWA combining Pomodoro sessions, task planning, timetables, auth, and wellness workflows.',
    hero: {
      tagline: 'Productivity and mental wellness as an installable PWA.',
      outcomeLine: 'In-progress React and Firebase product planned for real-user iteration.',
    },
    problem:
      'Students often manage focus sessions, tasks, schedules, and wellbeing in disconnected tools. ZenTime combines productivity and mental wellness workflows into a React and Firebase PWA intended for real-user iteration.',
    context: 'In-progress full-stack product built with React and Firebase.',
    solution:
      'A PWA that integrates Pomodoro sessions, task tracking, timetable planning, authentication, and wellness-oriented productivity flows.',
    challenges: [
      {
        title: 'Workflow integration',
        explanation:
          'Pomodoro, tasks, timetable, and wellness features have to share state without becoming a cluttered dashboard.',
      },
      {
        title: 'PWA reliability',
        explanation:
          'Installability and cross-device behavior require attention to caching, authentication persistence, and deployment details.',
      },
    ],
    learnings: [
      'Productivity apps need low interaction overhead because users return to them repeatedly throughout a day.',
      'Real-user iteration is necessary to validate whether planning features actually reduce cognitive load.',
    ],
    futureWork:
      'Complete deployment, refine authentication and persistence flows, and use real-user feedback to prioritize product improvements.',
    links: linkDefaults,
    role: 'Founder & Developer',
    year: '2024 - Present',
    accent: '#6366f1',
    color: 'from-indigo-500/20 to-teal-500/10',
  },
  {
    project_slug: 'calisthenics-app',
    id: 'calisthenics-app',
    slug: 'calisthenics-app',
    title: 'Calisthenics App',
    status: 'In Progress',
    category: 'Product / Mobile Fitness',
    problem_statement:
      'Bodyweight training progressions are difficult to track because workouts, timers, and skill milestones are often separated. This app provides a lightweight mobile-first system for workout flow and skill progression tracking.',
    technical_implementation:
      'The app is designed around a workout flow system that guides users through planned bodyweight sessions. Timer-based exercise progression supports holds, rest periods, interval work, and timed skill attempts. Skill progression tracking covers advanced calisthenics goals such as planche progressions, allowing users to record stage, consistency, and progression history. The interface goal is lightweight and mobile-first so sessions can be followed during training without heavy navigation. Data structures are organized around exercises, routines, timers, and skill progress states. The product remains focused on training progression rather than broad social or content features.',
    architecture: {
      overview:
        'The mobile-first architecture centers on workout sessions, timer state, exercise definitions, skill progress records, and lightweight local or backend persistence.',
      components: [
        { name: 'Workout Flow System', description: 'Guides users through ordered exercises, sets, holds, and rest intervals.' },
        { name: 'Timer Engine', description: 'Handles timed exercise progression, rest periods, and interval transitions.' },
        { name: 'Skill Tracker', description: 'Records progression for skills such as planche and related bodyweight movements.' },
        { name: 'Mobile Interface', description: 'Keeps training controls accessible during active workouts.' },
      ],
    },
    current_progress:
      'The app is in progress with scope defined around workout flow, timers, skill progression, and mobile-first usability. Remaining work includes implementation depth, persistence, and testing during actual training sessions.',
    key_features: [
      'Workout flow system',
      'Timer-based exercise progression',
      'Planche and skill progression tracking',
      'Routine and exercise state management',
      'Lightweight mobile-first design',
    ],
    techStack: ['React Native or mobile-first React', 'JavaScript', 'Timer state management', 'Local storage', 'Fitness progression models'],
    output_or_artifacts: ['Mobile fitness app in progress', 'Workout and skill progression data model', 'Training flow prototype'],
    constraints_or_challenges: [
      'Workout screens must remain usable during physical training when attention and interaction time are limited.',
      'Progression tracking must represent skill development without overclaiming training outcomes.',
    ],
    shortDescription:
      'Mobile-first bodyweight training tracker for workout flow, timed exercises, and calisthenics skill progression.',
    hero: {
      tagline: 'Workout flow and skill tracking for bodyweight training.',
      outcomeLine: 'In-progress mobile fitness product focused on timed progression and skills such as planche.',
    },
    problem:
      'Bodyweight training progressions are difficult to track because workouts, timers, and skill milestones are often separated. This app provides a lightweight mobile-first system for workout flow and skill progression tracking.',
    context: 'In-progress product for mobile fitness and calisthenics progression.',
    solution:
      'A mobile-first training app that combines workout flow, exercise timers, and skill progression records for bodyweight training.',
    challenges: [
      {
        title: 'Low-friction active use',
        explanation:
          'The app must be usable mid-workout, so interaction cost and visual complexity need to stay low.',
      },
      {
        title: 'Progression modeling',
        explanation:
          'Skill tracking must capture gradual progress across holds, attempts, and progression stages without becoming too rigid.',
      },
    ],
    learnings: [
      'Fitness tools need stable session flows because users interact with them under physical fatigue.',
      'Timed exercise state is a core product primitive, not a secondary utility.',
    ],
    futureWork:
      'Implement persistence, refine timer transitions, and test workout flows during real training sessions.',
    links: linkDefaults,
    role: 'Product Developer',
    year: '2024 - Present',
    accent: '#ef4444',
    color: 'from-red-500/20 to-emerald-500/10',
  },
  {
    project_slug: 'gcc-startup-internship',
    id: 'gcc-startup-internship',
    slug: 'gcc-startup-internship',
    title: 'Internship: GCC Startup',
    status: 'Not Started',
    category: 'Industry Experience',
    problem_statement:
      'Industry engineering experience is needed to validate technical skills in a real startup environment and build a credible recommendation path. This planned internship is intended to provide exposure to production workflows, team collaboration, and applied software delivery.',
    technical_implementation:
      'The internship has not started, so no implementation claims are made. The expected technical work will depend on the startup assignment and engineering stack. The planned scope is real-world engineering exposure, including reading an existing codebase, contributing to production workflows, handling tasks under review, and learning team delivery practices. A recommendation-building goal is included, but it depends on actual performance and completed work. Once the internship begins, this page should be updated with verified responsibilities, technologies, and shipped artifacts. Until then, the project is represented as planned industry experience rather than completed engineering output.',
    architecture: {
      overview:
        'Not applicable until the internship starts and the assigned engineering system is known.',
      components: [
        { name: 'Planned Engineering Assignment', description: 'Specific system components will be documented only after the internship begins.' },
        { name: 'Review and Delivery Workflow', description: 'Expected exposure to task review, code review, and production-oriented collaboration.' },
      ],
    },
    current_progress:
      'Not started. The next step is beginning the internship and replacing planned-scope language with verified engineering responsibilities and artifacts.',
    key_features: [
      'Planned real-world engineering exposure',
      'Startup environment experience',
      'Recommendation-building objective',
      'Production workflow learning',
      'Future verified artifact tracking',
    ],
    techStack: ['To be determined after internship start'],
    output_or_artifacts: ['Planned internship experience', 'Future verified engineering contributions', 'Potential recommendation outcome'],
    constraints_or_challenges: [
      'No technical implementation should be claimed before the internship begins.',
      'Public details may be limited by company confidentiality.',
    ],
    shortDescription:
      'Planned GCC startup internship for real-world engineering exposure, production workflow learning, and recommendation building.',
    hero: {
      tagline: 'Planned startup engineering experience.',
      outcomeLine: 'Not started; technical details will be added only after verified internship work begins.',
    },
    problem:
      'Industry engineering experience is needed to validate technical skills in a real startup environment and build a credible recommendation path. This planned internship is intended to provide exposure to production workflows, team collaboration, and applied software delivery.',
    context: 'Planned industry experience; no implementation claims are made yet.',
    solution:
      'Begin the internship, contribute to verified engineering work, and document actual responsibilities, stack, and artifacts after they exist.',
    challenges: [
      {
        title: 'No pre-start claims',
        explanation:
          'The page must remain accurate by avoiding invented responsibilities, technologies, or deliverables before the internship begins.',
      },
    ],
    learnings: [
      'To be documented after the internship begins and real engineering work has been completed.',
    ],
    futureWork:
      'Update this page with verified tasks, technologies, shipped work, and recommendation outcomes after the internship starts.',
    links: linkDefaults,
    role: 'Planned Intern',
    year: 'Planned',
    accent: '#94a3b8',
    color: 'from-slate-500/20 to-blue-500/10',
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
  'Industry Experience',
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
