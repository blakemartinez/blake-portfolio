export interface Project {
  name: string;
  desc: string;
  url: string | null;
  githubUrl: string | null;
  stack: string[];
  favorite?: boolean;
}

export const projects: Project[] = [
  {
    name: "readME",
    desc: "Reading progress tracker with personal ratings",
    url: "https://readme-list.vercel.app/",
    githubUrl: "https://github.com/blakemartinez/readME",
    stack: ["TypeScript"],
  },
  {
    name: "record-map",
    desc: "Interactive network graph of my Discogs vinyl collection — clusters albums by musical similarity using UMAP + Louvain community detection",
    url: "https://record-map.vercel.app/",
    githubUrl: null,
    stack: ["D3.js", "Python", "UMAP", "Discogs API", "Transformers"],
    favorite: true,
  },
  {
    name: "played-at",
    desc: "Tracking who played at which music festival",
    url: "https://played-at.vercel.app",
    githubUrl: "https://github.com/blakemartinez/played-at",
    stack: ["Astro"],
  },
  {
    name: "lets-master-set",
    desc: "tracking my tyranitar master set :D",
    url: "https://lets-master-set.vercel.app",
    githubUrl: "https://github.com/blakemartinez/lets-master-set",
    stack: ["TypeScript"],
  },
  {
    name: "wow-pocket-watcher",
    desc: "Discord bot that tracks WoW grind sessions — auto-posts item level upgrades, quest completions, achievement points, and server leaderboards after each session",
    url: null,
    githubUrl: null,
    stack: ["Python", "Discord API", "Battle.net API"],
    favorite: true,
  },
  {
    name: "disk-usage-analyzer",
    desc: "CLI disk usage analyzer — learning Rust",
    url: null,
    githubUrl: "https://github.com/blakemartinez/disk-usage-analyzer",
    stack: ["Rust"],
  },
  {
    name: "who-hit-a-homerun-today",
    desc: "Tracks daily MLB home runs",
    url: "https://who-hit-a-homerun-today.vercel.app/",
    githubUrl: "https://github.com/blakemartinez/who-hit-a-homerun-today",
    stack: ["Python"],
  },
];
