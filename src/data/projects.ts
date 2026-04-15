export interface Project {
  name: string;
  desc: string;
  note?: { text: string; url: string };
  url: string | null;
  githubUrl: string | null;
  stack: string[];
  favorite?: boolean;
  screenshot?: string;
  browserFrame?: boolean;
}

export const projects: Project[] = [
  {
    name: "ai-pulse",
    desc: "A sentiment observatory for AI tools — tracks where every tool sits in its hype cycle. Ingests from 8 sources (HN, Reddit, GitHub, arXiv, blogs, npm/PyPI, YouTube, Twitter), runs hybrid sentiment analysis with a rules engine + Claude fallback, and classifies tools into lifecycle phases. Trying to find signal in a very noisy, fast-moving landscape.",
    url: null,
    githubUrl: null,
    stack: ["TypeScript", "Hono", "Drizzle", "Supabase", "Upstash", "Claude API"],
    favorite: true,
  },
  {
    name: "who-hit-a-homerun-today",
    desc: "Tracks daily MLB home runs. I am a huge baseball fan (Go Rangers!) and really like getting into the numbers & stats for visualizations.",
    url: "https://homeruntoday.blakemartinez.dev/",
    githubUrl: "https://github.com/blakemartinez/who-hit-a-homerun-today",
    stack: ["Next.js", "Tailwind CSS", "MLB Stats API"],
    favorite: true,
    screenshot: "/screenshots/who-hit-homerun-today.png",
    browserFrame: true,
  },
  {
    name: "who-missed-a-call-today",
    desc: "MLB ABS (Automated Ball-Strike) challenge tracker — every challenged pitch, whether the umpire got overturned, and pitch location data. Spin-off of who-hit-a-homerun-today built when the ABS challenge system launched Opening Day 2026.",
    url: "https://missedcalltoday.blakemartinez.dev",
    githubUrl: "https://github.com/blakemartinez/who-missed-a-call-today",
    stack: ["Next.js", "Tailwind CSS", "MLB Stats API"],
    favorite: true,
    browserFrame: true,
  },
  {
    name: "who-scored-a-goal-today",
    desc: "Live World Cup 2026 goal tracker — same concept as who-hit-a-homerun-today but for football. See every goal scored today with scorer, minute, assist, and match context.",
    url: "https://goaltoday.blakemartinez.dev",
    githubUrl: "https://github.com/blakemartinez/who-scored-a-goal-today",
    stack: ["Next.js", "Tailwind CSS", "football-data.org API"],
    favorite: true,
    browserFrame: true,
  },
  {
    name: "record-map",
    desc: "Interactive network graph of my Discogs vinyl collection — clusters albums by musical similarity using UMAP + Louvain community detection",
    note: { text: "btw check out my discogs collection here", url: "https://www.discogs.com/user/endingparty/collection" },
    url: "https://record-map.vercel.app/",
    githubUrl: null,
    stack: ["D3.js", "Python", "UMAP", "Discogs API", "Transformers"],
    favorite: true,
    screenshot: "/screenshots/record-map.png",
    browserFrame: true,
  },
  {
    name: "crates",
    desc: "What Discogs could be if they listened. Took 15 real complaints from Reddit, forums, and Trustpilot and built the fixes using their own API — smart search, collection insights, fee calculator, Collection Wrapped, and more. Built in a weekend to prove a point.",
    url: "https://crates-nu.vercel.app",
    githubUrl: null,
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Discogs API"],
    favorite: true,
    browserFrame: true,
  },
  {
    name: "wow-pocket-watcher",
    desc: "Discord bot that tracks WoW grind sessions — auto-posts item level upgrades, quest completions, achievement points, and server leaderboards after each session. This was a need once my friend had the itch to grind in wee hours and I needed a way to keep track of his progress.",
    url: null,
    githubUrl: null,
    stack: ["Python", "Discord API", "Battle.net API"],
    favorite: true,
    screenshot: "/screenshots/wow-pocket-watcher.png",
  },
  {
    name: "readME",
    desc: "Reading progress tracker with personal ratings. (p.s. i have been slacking on this one)",
    url: "https://readme-list.vercel.app/",
    githubUrl: "https://github.com/blakemartinez/readME",
    stack: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    screenshot: "/screenshots/readMe.png",
    browserFrame: true,
  },
  {
    name: "played-at",
    desc: "Tracking who played at which music festival. I've been to ACL 3 times now and curiousity got the best of me.",
    url: "https://playedat.blakemartinez.dev",
    githubUrl: "https://github.com/blakemartinez/played-at",
    stack: ["Astro"],
    screenshot: "/screenshots/played-at.png",
    browserFrame: true,
  },
  {
    name: "lets-master-set",
    desc: "tracking my tyranitar master set :D (This will be a work in progress for a very long time... t-tars are expensive)",
    url: "https://lets-master-set.vercel.app",
    githubUrl: "https://github.com/blakemartinez/lets-master-set",
    stack: ["Next.js", "TypeScript", "Prisma", "TCGPlayer API"],
    screenshot: "/screenshots/lets-master-set.png",
    browserFrame: true,
  },
  {
    name: "disk-usage-analyzer",
    desc: "CLI disk usage analyzer — learning Rust :P",
    url: null,
    githubUrl: "https://github.com/blakemartinez/disk-usage-analyzer",
    stack: ["Rust"],
  },
];
