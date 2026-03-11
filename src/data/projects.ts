export interface Project {
  name: string;
  desc: string;
  url: string | null;
  stack: string[];
}

export const projects: Project[] = [
  {
    name: "StudyPy",
    desc: "Spotify API study session tracker — custom playlist generation based on energy/mood inputs",
    url: "https://studypyapp.herokuapp.com/",
    stack: ["Python", "Spotify API"],
  },
  {
    name: "readME",
    desc: "Reading progress tracker with personal ratings",
    url: "https://blakemartinez.github.io/readME/",
    stack: ["JavaScript"],
  },
  {
    name: "PEAP",
    desc: "Spotify listening stats viewer + custom playlist creator (WIP)",
    url: null,
    stack: ["Python"],
  },
  {
    name: "Discord Bot",
    desc: "Music management and server messaging bot built on the Discord API",
    url: null,
    stack: ["Python"],
  },
];
