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
    photo: "keebs/daily_driver.jpg",
    youtubeUrl: "https://youtube.com/shorts/ZuIrtPKqh8Q?si=SDN61cyxo8KQGBBm",
  },
  {
    name: "work driver",
    case: "Keychron K2",
    switches: "Durock Silent T1 Shrimp",
    keycaps: "Dark Grey Cherry Profile",
    sound: "silent tactile",
    photo: "keebs/black_keyboard.jpg",
    youtubeUrl: "https://youtube.com/shorts/7UYOwZ-T3Ow?si=ueqBW7VOzyR57XvD",
  },
  {
    name: "don't let him cook",
    case: "Random Alibaba 60%",
    switches: "Cherry MX Reds",
    keycaps: "Cheap Side Print Keycaps",
    sound: "silent clacky",
    photo: "keebs/red_white.jpg",
  },
];
