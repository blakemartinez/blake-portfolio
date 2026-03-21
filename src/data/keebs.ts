export interface Keeb {
  name: string;
  case: string;
  switches: string;
  keycaps: string;
  sound: string;
  photo?: string;
  youtubeUrl?: string;
  placeholder?: boolean;
}

export const keebs: Keeb[] = [
  {
    name: "daily driver",
    case: "KBD67 Lite",
    switches: "Gateron Yellow Ink V2",
    keycaps: "Winmix 9009 Dye Sub PBT",
    sound: "thocky",
  },
  {
    name: "build 2",
    case: "—",
    switches: "—",
    keycaps: "—",
    sound: "—",
    placeholder: true,
  },
  {
    name: "build 3",
    case: "—",
    switches: "—",
    keycaps: "—",
    sound: "—",
    placeholder: true,
  },
];
