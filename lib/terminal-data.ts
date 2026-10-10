export type TerminalEntry = {
  command: string;
  output: string | string[];
  type?: "info" | "success" | "warn" | "accent";
};

export const defaultTerminalHistory: TerminalEntry[] = [
  {
    command: "intel --status",
    type: "accent",
    output: [
      "╔══════════════════════════════════════════════════════════════════╗",
      "║  SUHAN INTEL CONSOLE v2.4 // OSINT · COMPLIANCE · WEB3 · MOD    ║",
      "║  Operator: Shaik Sharooq (Suhan Gwei) · Status: ACTIVE (2026)   ║",
      "╚══════════════════════════════════════════════════════════════════╝",
      "✓ Identity verified: Brand-Protection Specialist & Web3 Protocol Builder",
      "✓ Clearance: Amazon Final Removal Authority & Enterprise Brand Protection",
      "✓ Systems Ready: Telegram Bots · DeFi Contracts · Playwright OSINT Scrapers",
      "",
      "Type 'help' or click quick chips below to query intelligence dossiers.",
    ],
  },
];

export const terminalCommands: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  • whoami       : Identity, background & operational clearance",
    "  • mod          : Community moderation, anti-raid & bot architecture",
    "  • compliance   : IP enforcement, Amazon removal authority & SOP audits",
    "  • web3         : DeFi lending, smart contracts, trading bots & swarms",
    "  • osint        : Threat intelligence, scraping, test-buys & wallet forensics",
    "  • stats        : Quantifiable track record and metrics",
    "  • contact      : Secure communication channels (Email, TG, X, LinkedIn)",
    "  • clear        : Reset console screen",
  ],
  whoami: [
    "[OPERATOR PROFILE]",
    "• Handle: Suhan Gwei (Shaik Sharooq)",
    "• Focus : Community Lead | Compliance & T&S | Web3 Native | OSINT Analyst",
    "• Origin: Guntur, Andhra Pradesh, India (Open to global remote / relocate)",
    "• Philosophy: 'Vibe coder' shipping high-integrity solutions with AI acceleration",
    "• Current Role: Investigation Support Analyst @ Corsearch",
    "• Prior Role  : Investigation Associate (Enforcement) @ Amazon",
  ],
  mod: [
    "[COMMUNITY MODERATION & BOT OPS]",
    "• Platforms: Telegram, Discord, X Community, DAO Forums",
    "• Anti-Raid & Scam Defense: Proactive link filtering, automated captcha, impersonator eradication",
    "• Bot Engineering: Custom python-telegram-bot infrastructure, rate-limit safeguards, media parsers",
    "• User Sentiment: High-availability community support, FAQ documentation, crisis escalation",
    "• Culture: Web3-native degen & professional crossover — knows how crypto communities tick",
  ],
  compliance: [
    "[COMPLIANCE & BRAND ENFORCEMENT]",
    "• Amazon Experience: Exercised final removal authority for IP and trademark infringement queues",
    "• Corsearch Ops: Conducted covert test buys and end-to-end evidence dossiers for tier-1 brands",
    "• SOP Mastery: High-volume case processing with strict SLA compliance and zero-error tolerances",
    "• Case Management: Standardized evidence chains of custody, test-buy tracking & legal packages",
  ],
  web3: [
    "[WEB3 & PROTOCOL ENGINEERING]",
    "• Vara.fi: Live decentralized lending protocol on Arc testnet (Solidity, Hardhat, Wagmi)",
    "• Algorithmic Bots: ICT/SMC institutional order-flow trading bot on Lighter DEX SDK",
    "• AI Agents: Autonomous on-chain trading entity (Aizensosuke) on Bot.fun",
    "• Enterprise Web3: Daml smart contract & JSON Ledger API development on Canton Network",
    "• Node Infrastructure: Gensyn RL compute swarm runner with GPU VPS & CUDA orchestration",
  ],
  osint: [
    "[OSINT & DIGITAL INVESTIGATION WORKFLOW]",
    "• Entity Attribution: Identifying real-world owners behind rogue marketplace seller storefronts",
    "• 1,000+ Test Buys: Ingested and reconciled bulk test-buy references via Python + Playwright",
    "• On-Chain Tracing: Transaction tracking across Etherscan, Solscan, and multi-chain explorers",
    "• Domain / WHOIS: Unmasking mirror domains, DNS historical changes, and illicit retail networks",
    "• Data Pipelines: Custom scraping scripts with anti-bot bypass and structured CSV/Excel exports",
  ],
  stats: [
    "[QUANTIFIABLE METRICS]",
    "• 1,000+ test-buy records reconciled automatically from weeks to <1 hr",
    "• 100% SOP adherence on high-stakes Amazon listing removal decisions",
    "• 24/7 continuous uptime on autonomous DeFi contracts & Telegram bots",
    "• 12+ public and private Git repositories shipped",
  ],
  contact: [
    "[COMMUNICATION CHANNELS]",
    "• Email   : sksharooq456@gmail.com",
    "• Telegram: @suhan_gwei (https://t.me/suhan_gwei)",
    "• Discord : suhan_gwei",
    "• GitHub  : https://github.com/sqsuhan",
    "• X       : https://x.com/suhan_gwei",
    "• LinkedIn: https://linkedin.com/in/sharooq-shaik",
  ],
};
