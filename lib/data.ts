export type RoleLensId = "all" | "mod" | "compliance" | "web3" | "osint";

export type RoleLens = {
  id: RoleLensId;
  label: string;
  badge: string;
  pitch: string;
  accent: string;
  tags: string[];
};

export const roleLenses: RoleLens[] = [
  {
    id: "all",
    label: "All Focus Areas",
    badge: "Hybrid Operator",
    pitch:
      "A high-tempo operator combining Web3 native knowledge, deep brand-protection & marketplace compliance, community defense, and OSINT digital forensics.",
    accent: "from-sky-500 to-indigo-500",
    tags: ["Web3 Builder", "Compliance Analyst", "Community Lead", "OSINT Investigator"],
  },
  {
    id: "mod",
    label: "Community Mod & Ops",
    badge: "Web3 Community & Anti-Scam",
    pitch:
      "Experienced in managing Discord & Telegram communities, mitigating phishing raids, deploying custom moderation bots, enforcing server guidelines, and maintaining high engagement with 24/7 responsiveness.",
    accent: "from-amber-400 to-orange-500",
    tags: ["Raid Mitigation", "Telegram Bots", "Discord Safety", "AMA / User Support", "Sentiment Tracking"],
  },
  {
    id: "compliance",
    label: "Compliance & Trust/Safety",
    badge: "Enforcement & Brand Protection",
    pitch:
      "Proven track record holding final removal authority at Amazon for IP & trademark infringement, executing high-volume SOP investigations, managing Brand Registry workflows, and leading end-to-end Corsearch brand-protection filings.",
    accent: "from-violet-400 to-purple-600",
    tags: ["IP / Trademark Infringement", "Listing Takedowns", "SOP Enforcement", "Amazon Brand Registry", "Evidence Chain of Custody"],
  },
  {
    id: "web3",
    label: "Web3 & DeFi Native",
    badge: "Protocol & On-Chain Builder",
    pitch:
      "Deeply crypto-native. Built and deployed Vara.fi (full-stack collateralized DeFi lending protocol on Arc testnet), algorithmic trading bots on Lighter DEX, AI agents on Bot.fun, Daml/Canton contracts, and decentralized testnet swarms.",
    accent: "from-cyan-400 to-blue-600",
    tags: ["Solidity", "DeFi Protocols", "Wagmi / Viem", "Smart Contracts", "Daml / Canton", "Algorithmic Bots"],
  },
  {
    id: "osint",
    label: "OSINT & Digital Investigations",
    badge: "Intelligence & Forensics",
    pitch:
      "Open-source intelligence investigator specializing in counterfeit network mapping, seller entity attribution, automated test-buy reconciliation (1,000+ cases), blockchain wallet forensics, and data scraping via Playwright & Python.",
    accent: "from-emerald-400 to-teal-600",
    tags: ["Entity Attribution", "Test-Buy Forensics", "On-Chain Flow Analysis", "Playwright Scraping", "Infrastructure Recon"],
  },
];

export const impactMetrics = [
  {
    number: "1,000+",
    label: "Test-Buy Records Reconciled",
    desc: "Built Python + Playwright scraper turning weeks of manual case auditing into <1 hr.",
    category: "OSINT / Automation",
  },
  {
    number: "100%",
    label: "SOP Enforcement Authority",
    desc: "Held final removal authority for IP infringement & counterfeit queues at Amazon.",
    category: "Compliance & T&S",
  },
  {
    number: "24/7",
    label: "On-Chain & Bot Deployment",
    desc: "Shipped live DeFi lending market (Vara.fi) and real-time algorithmic trading bots.",
    category: "Web3 & Engineering",
  },
  {
    number: "0-Tolerance",
    label: "Community Raid & Scam Defense",
    desc: "Proactive anti-phishing, Telegram bot automation, and high-tempo community moderation.",
    category: "Community Moderation",
  },
];

export type Pillar = {
  id: RoleLensId;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  skills: string[];
  responsibilities: string[];
};

export const pillars: Pillar[] = [
  {
    id: "mod",
    title: "Community Moderation & Ops",
    badge: "Community Shield",
    tagline: "Cultivating vibrant, safe, and spam-free Web3 communities",
    description:
      "Web3 communities live and die by their communication channels. I bring hands-on experience moderating fast-paced Telegram and Discord groups, preventing social engineering scams, setting up bot infrastructure, and representing project values.",
    skills: ["Telegram Bot API", "Discord Automod & Webhooks", "Anti-Phishing Triage", "User Onboarding", "Escalation Playbooks"],
    responsibilities: [
      "24/7 active chat monitoring, raid shielding, and swift neutralisation of malicious links/impersonators.",
      "Building and configuring custom automation bots (e.g., Python Telegram bots for content delivery and announcements).",
      "Drafting and enforcing clear community guidelines, FAQ repositories, and support ticket triage.",
      "Bridging feedback between community members, governance stakeholders, and technical core teams.",
    ],
  },
  {
    id: "compliance",
    title: "Compliance & Trust & Safety",
    badge: "Policy & Enforcement",
    tagline: "Rigorous brand protection, marketplace integrity, and risk mitigation",
    description:
      "Backed by enterprise experience at Amazon and Corsearch. Experienced in navigating complex intellectual property laws, trademark infringements, seller verification, and high-stakes evidence dossiers.",
    skills: ["Amazon Brand Registry", "Trademark & Copyright Law", "Listing Removal Authority", "Evidence Dossiers", "SOP Optimization"],
    responsibilities: [
      "Investigating illicit marketplace sellers, unauthorized distributors, and counterfeit merchandise networks.",
      "Holding final listing removal authority upon thorough examination of trademark registrations and rights owner claims.",
      "Executing covert test buys, documenting chain-of-custody evidence, and submitting formal enforcement filings.",
      "Maintaining high-accuracy compliance scores while exceeding daily queue SLAs.",
    ],
  },
  {
    id: "web3",
    title: "Web3 & Protocol Engineering",
    badge: "Crypto Native",
    tagline: "End-to-end DeFi lending, smart contracts, and decentralized systems",
    description:
      "Not just a spectator — an active builder in crypto. Deep understanding of EVM networks, collateralized lending math, liquidation health factors, decentralized privacy, and algorithmic order execution.",
    skills: ["Solidity", "Hardhat", "React / Wagmi / RainbowKit", "Daml / Canton Ledger", "DEX Trading SDKs", "Testnet Validation"],
    responsibilities: [
      "Architected and deployed Vara.fi: an open liquidity market on Arc testnet for depositing collateral, borrowing USDC, and liquidations.",
      "Developed algorithmic perpetuals trading bots with ICT/SMC institutional order flow logic on Lighter DEX.",
      "Deployed autonomous trading AI agents on Bot.fun arena with active treasury management.",
      "Operated distributed testnet validator and swarm nodes (Gensyn RL swarm with CUDA/GPU VPS orchestration).",
    ],
  },
  {
    id: "osint",
    title: "OSINT & Digital Investigations",
    badge: "Threat Intelligence",
    tagline: "Uncovering clandestine networks through open-source forensics",
    description:
      "Specialized in transforming disparate data points into actionable intelligence dossiers. Experienced in tracing seller networks across marketplaces, analyzing on-chain transaction trails, and automating intelligence gathering.",
    skills: ["Entity Attribution", "On-Chain Flow Tracing", "Playwright & Python Scrapers", "Domain / Whois Recon", "Data Forensics"],
    responsibilities: [
      "Mapping multi-seller syndicates through shared merchant IDs, IP ranges, bank details, and WHOIS records.",
      "Engineered automated script auditing 1,000+ test-buy records against case systems, cutting turnaround by 98%.",
      "Tracing crypto fund movements across EVM block explorers to identify associated wallet clusters and deposit addresses.",
      "Building reproducible data pipelines to aggregate open-source intelligence for legal and enforcement action.",
    ],
  },
];

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  roleCategory: RoleLensId[];
  metrics?: string;
  live?: { href: string; label?: string };
  github?: string;
};

export const about = {
  education: "B.Tech in Civil Engineering, JNTU-K (2020–2024)",
  paragraphs: [
    "I'm Shaik Sharooq — online I go by Suhan Gwei. I operate at the intersection of Trust & Safety, Web3 ecosystems, compliance enforcement, and OSINT digital investigations.",
    "By day, I lead brand-protection investigations and marketplace compliance, having held final removal authority at Amazon and conducting covert test-buy operations at Corsearch. After hours, I engineer full-stack DeFi lending markets, build automated Telegram & algorithmic trading bots, and contribute to decentralized protocols.",
    "I treat modern AI tooling as force multipliers: automating redundant case workflows, analyzing adversarial attack vectors, and shipping production-grade solutions at 10x velocity.",
  ],
  facts: [
    { label: "Based in", value: "Guntur, Andhra Pradesh, India" },
    { label: "Role Focus", value: "Community Mod · Compliance · Web3 · OSINT" },
    { label: "Education", value: "B.Tech Civil, JNTU-K · 2020–2024" },
    { label: "Languages", value: "English · Hindi · Telugu" },
    { label: "Availability", value: "Immediate / Remote Worldwide" },
  ],
};

export const experience = [
  {
    role: "Investigation Support Analyst",
    org: "Corsearch",
    period: "Present",
    current: true,
    roles: ["compliance", "osint", "mod"],
    summary:
      "Lead brand-protection investigations end-to-end, protecting global enterprise IP from counterfeiters and unauthorized syndicates.",
    points: [
      "Conduct in-depth OSINT reconnaissance across global marketplaces, social platforms, and rogue domains to identify illicit seller syndicates.",
      "Execute covert test buys, secure chain-of-custody evidence, and assemble comprehensive legal enforcement packages.",
      "Automated critical case tracking and test-buy reconciliation with custom Python scripts, eliminating repetitive manual verification.",
      "Liaise with brand representatives and legal counsel to translate complex evidentiary findings into decisive enforcement filings.",
    ],
  },
  {
    role: "Investigation Associate, Enforcement",
    org: "Amazon",
    period: "June 2025 — Sept 2026",
    current: false,
    roles: ["compliance", "osint"],
    summary:
      "Exercised final listing removal authority for high-volume trademark and copyright enforcement queues across Amazon global marketplaces.",
    points: [
      "Evaluated complex IP infringement complaints, trademark registrations, and seller counter-notices against strict SOP standards.",
      "Held authorized removal authority on violating ASINs, counterfeit offers, and deceptive seller accounts.",
      "Consistently achieved top-tier quality scores while processing high-volume queues under strict SLA deadlines.",
      "Leveraged Amazon Brand Registry mechanisms and advanced Excel modeling to isolate patterns of repeat bad actors.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Vara.fi",
    blurb:
      "Open liquidity market — a full-stack DeFi lending protocol live on the Arc testnet. Users deposit MCOL collateral, borrow USDC, repay with interest, and liquidate unhealthy positions on-chain.",
    tags: ["Solidity", "Hardhat", "React", "Wagmi", "RainbowKit", "Arc Testnet", "DeFi"],
    roleCategory: ["web3"],
    metrics: "Live lending protocol with real-time collateral liquidation engine",
    live: { href: "https://vara-fi.vercel.app", label: "Live Protocol" },
    github: "https://github.com/sqsuhan/vara.fi",
  },
  {
    title: "Test-Buy Reconciliation Automation",
    blurb:
      "Forensic OSINT & compliance pipeline: Python + Playwright script that ingested 1,000+ test-buy reference numbers from Excel, queried each within internal case systems, and produced actionable exception reports with timelines.",
    tags: ["Python", "Playwright", "OSINT", "Compliance", "Excel Forensics"],
    roleCategory: ["osint", "compliance"],
    metrics: "Reduced weeks of manual investigative verification to under 60 minutes",
  },
  {
    title: "Telegram Multi-Format Content Bot",
    blurb:
      "Production-ready Telegram bot handling automated media fetching and distribution with python-telegram-bot + yt-dlp + ffmpeg. Features per-user rate limiting, automated temp cleanup, and error-resilient async handlers.",
    tags: ["Python", "Telegram Bot API", "yt-dlp", "AsyncIO", "Community Tooling"],
    roleCategory: ["mod", "osint"],
    metrics: "Zero-maintenance automated bot with rate limiting and media processing",
    github: "https://github.com/sqsuhan/yt-tg-bot",
  },
  {
    title: "Lighter ICT/SMC Trading Strategy Bot",
    blurb:
      "Algorithmic perpetual DEX trading bot built on the Lighter SDK in TypeScript. Executes 1-hour directional bias with 5-minute change-of-delivery entries, multi-market risk sizing, dry-run testing, and Telegram execution alerts.",
    tags: ["TypeScript", "Lighter SDK", "DEX", "Algorithmic Trading", "Telegram Alerts"],
    roleCategory: ["web3"],
    metrics: "Automated 24/7 on-chain order routing with instant Telegram telemetry",
  },
  {
    title: "Aizensosuke Autonomous Trading Agent",
    blurb:
      "Autonomous on-chain AI trading agent deployed on Bot.fun arena. Operates with custom agent persona, independent treasury management, and algorithmic execution.",
    tags: ["AI Agent", "Bot.fun", "Web3", "On-Chain Treasury"],
    roleCategory: ["web3"],
    metrics: "24/7 autonomous on-chain trading entity",
    live: { href: "https://bot.fun", label: "Agent Arena" },
  },
  {
    title: "Canton Network Daml Smart Contracts",
    blurb:
      "Enterprise smart contract engineering on the Canton Network. Built Daml templates, JSON Ledger API client flows for querying and creating multi-party contracts, and privacy-preserving workflows.",
    tags: ["Daml", "Canton Network", "Smart Contracts", "Haskell", "Enterprise Web3"],
    roleCategory: ["web3", "compliance"],
    metrics: "Multi-party privacy-preserving smart contract settlement flows",
    github: "https://github.com/sqsuhan/canton-network",
  },
  {
    title: "Gensyn RL Swarm Testnet Orchestration",
    blurb:
      "Operational runbooks and automated setup scripts for joining the Gensyn decentralized AI RL compute testnet swarm: CUDA drivers, headless VPS/GPU deployment, daemon screen sessions, and node monitoring.",
    tags: ["Shell", "Gensyn", "CUDA", "Node Runner", "Distributed Compute"],
    roleCategory: ["web3"],
    metrics: "Headless GPU swarm node operations with automated health telemetry",
    github: "https://github.com/sqsuhan/gensyn-testnet",
  },
  {
    title: "Counterfeit & IP Case Management Tracker",
    blurb:
      "Consolidated multi-tier case management tracker uniting suspect profiling, evidence links, status progression, test-buy records, and enforcement milestones into a single actionable dashboard.",
    tags: ["Case Management", "Brand Protection", "Investigations", "Reporting"],
    roleCategory: ["compliance", "osint"],
    metrics: "Standardized evidence custody and audit trails for high-volume filings",
  },
  {
    title: "ani-cli Upstream Diagnostic & Patch Tool",
    blurb:
      "Automated Linux utility script resolving upstream video scraper breakages. Detects breaking changes, pulls latest repository patches, and reconfigures local binary paths seamlessly.",
    tags: ["Shell", "Linux", "Automation", "CLI Tooling"],
    roleCategory: ["osint"],
    metrics: "One-line automated diagnostics and upstream patching",
    github: "https://github.com/sqsuhan/ani-cli-fix",
  },
];

export const moreGithub: Project[] = [
  {
    title: "Red-Leaf",
    blurb: "HTML experiment and small web build.",
    tags: ["HTML"],
    roleCategory: ["web3"],
    github: "https://github.com/sqsuhan/Red-Leaf",
  },
  {
    title: "Projects",
    blurb: "Java coursework and practice repos.",
    tags: ["Java"],
    roleCategory: ["web3"],
    github: "https://github.com/sqsuhan/Projects",
  },
  {
    title: "DOOM-style Game",
    blurb: "Python FPS fork I customized — retro, fast, first-person.",
    tags: ["Python", "Fork"],
    roleCategory: ["web3"],
    github: "https://github.com/sqsuhan/DOOM-style-Game-main",
  },
];

export const skillGroups = [
  {
    name: "Community Moderation & Ops",
    role: "mod",
    accent: "text-amber-400 border-amber-500/20 bg-amber-500/10",
    tags: [
      "Discord & Telegram Management",
      "Anti-Raid / Scam Defense",
      "Telegram Bot API",
      "Community Guidelines & SOPs",
      "User Onboarding & FAQ Curation",
      "Incident Escalation & Crisis PR",
      "Ticket System Triage",
      "Sentiment & Health Monitoring",
    ],
  },
  {
    name: "Compliance & Trust / Safety",
    role: "compliance",
    accent: "text-purple-400 border-purple-500/20 bg-purple-500/10",
    tags: [
      "Amazon Brand Registry",
      "IP / Trademark Infringement",
      "Removal Authority & ASIN Takedowns",
      "Covert Test-Buy Operations",
      "Counterfeit Syndicate Tracking",
      "Evidence Custody & Reporting",
      "Marketplace Policy Audit",
      "High-Volume SLA Execution",
    ],
  },
  {
    name: "OSINT & Threat Intelligence",
    role: "osint",
    accent: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
    tags: [
      "Entity & Merchant Attribution",
      "Blockchain Transaction Tracing",
      "Playwright / Python Scrapers",
      "Domain / WHOIS Reconnaissance",
      "Digital Footprint Analysis",
      "Test-Buy Reconciliation",
      "Etherscan & Solscan Forensics",
      "Evidence Dossier Compilation",
    ],
  },
  {
    name: "Web3 & Protocol Engineering",
    role: "web3",
    accent: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10",
    tags: [
      "Solidity & Smart Contracts",
      "DeFi Lending & Liquidation Logic",
      "Hardhat & Wagmi / Viem",
      "Daml & Canton Privacy Network",
      "Algorithmic Trading Bot SDKs",
      "Testnet Node Swarms (Gensyn)",
      "Web3 Wallet Integrations",
      "Tokenomics & DAO Governance",
    ],
  },
  {
    name: "DevOps, Automation & Scripting",
    role: "all",
    accent: "text-sky-400 border-sky-500/20 bg-sky-500/10",
    tags: [
      "Python Automation",
      "Linux / Bash Scripting",
      "Playwright Headless Browser",
      "Git & GitHub Workflows",
      "VPS / GPU Node Deployment",
      "AI-Assisted Vibe Coding",
      "Next.js & Modern Web UIs",
      "REST & JSON-RPC APIs",
    ],
  },
];
