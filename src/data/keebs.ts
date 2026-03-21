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
    name: "build 2",
    case: "—",
    switches: "—",
    keycaps: "—",
    sound: "—",
    photo: "keebs/black_keyboard.jpg",
    youtubeUrl: "https://youtube.com/shorts/7UYOwZ-T3Ow?si=ueqBW7VOzyR57XvD",
    placeholder: true,
  },
  {
    name: "build 3",
    case: "—",
    switches: "—",
    keycaps: "—",
    sound: "—",
    photo: "keebs/red_white.jpg",
    placeholder: true,
  },
];
