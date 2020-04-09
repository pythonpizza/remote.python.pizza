import Speaker from "@/Types/Speaker";
import Sponsor from "@/Types/Sponsor";
import Schedule, { Types } from "@/Types/Schedule";

export const SPONSORS: Sponsor[][] = [
  [
    {
      id: "HipoLabs",
      name: "Hipo",
      photo: require("Assets/sponsors/hipolabs.png"),
      link: "https://hipolabs.com"
    }
  ]
];

export const SPEAKERS: Speaker[] = [
  {
    name: "Hynek Schlawack",
    photo: "https://hynek.me/img/avatar.jpg",
    job: "Job A",
    social: "https://hynek.me/"
  },
  {
    name: "Manav",
    photo: require("Assets/speakers/manav.jpg"),
    job: "Job B",
    social: "https://twitter.com/sigmapie8"
  },
  {
    name: "Wei Lee",
    photo: require("Assets/speakers/lee.jpg"),
    job: "Job B",
    social: "https://twitter.com/clleew"
  },
  {
    name: "Mridu Bhatnagar",
    photo: require("Assets/speakers/mridu.jpg"),
    job: "Job B",
    social: "https://twitter.com/Mridu__"
  },
  {
    name: "Jayesh Bapu Ahire",
    photo: require("Assets/speakers/jayesh.jpg"),
    job: "Job B",
    social: "https://twitter.com/Jayesh_Ahire1"
  },
  {
    name: "Chin Hwee Ong",
    photo: require("Assets/speakers/ong.jpg"),
    job: "Job B",
    social: "https://twitter.com/ongchinhwee"
  },
  {
    name: "Olga Matoula",
    photo: require("Assets/speakers/olga.jpg"),
    job: "Job B",
    social: "https://twitter.com/olgamatoula"
  },
  {
    name: "Daniel Pope",
    photo: require("Assets/speakers/daniel.jpg"),
    job: "Job B",
    social: "https://twitter.com/lordmauve"
  },
  {
    name: "Matte Guzzo",
    photo: require("Assets/speakers/guzzo.jpg"),
    job: "Job A",
    social: "https://twitter.com/_teoguso"
  },
  {
    name: "Norbert Karpen",
    photo: "https://via.placeholder.com/150",
    job: "Job B",
    social: ""
  },
  {
    name: "Pablo S Blum de Aguiar",
    photo: require("Assets/speakers/pablo.jpg"),
    job: "Job B",
    social: "https://twitter.com/scorphus"
  },
  {
    name: "Geir Arne Hjelle",
    photo: require("Assets/speakers/geir.jpeg"),
    job: "Job B",
    social: "https://twitter.com/gahjelle"
  },
  {
    name: "Ellen König",
    photo: require("Assets/speakers/ellen.png"),
    job: "Job B",
    social: "https://twitter.com/ellen_koenig"
  },
  {
    name: "Konrad Hałas",
    photo: require("Assets/speakers/konrad.jpg"),
    job: "Job B",
    social: "https://twitter.com/konradhalas"
  },
  {
    name: "Anastasiia Tymoshchuk",
    photo: require("Assets/speakers/anastasiia.jpg"),
    job: "Job B",
    social: "https://twitter.com/anastasiatymo"
  },
  {
    name: "Miroslav Šedivý",
    photo: require("Assets/speakers/miroslav.jpg"),
    job: "Job B",
    social: "https://twitter.com/eumiro"
  },
  {
    name: "Alexander Hendorf",
    photo: require("Assets/speakers/alex.png"),
    job: "Job B",
    social: "https://twitter.com/hendorf"
  },
];

export const SCHEDULE: Schedule[] = [
  {
    time: "08:00",
    title: "Welcome and opening",
    type: Types.OTHER
  },
  {
    time: "08:12",
    title: "On The Meaning of Version Numbers",
    type: Types.TALK,
    speaker: 0
  },
  {
    time: "08:24",
    title: "Route Onions With Python",
    type: Types.TALK,
    speaker: 1
  },
  {
    time: "08:36",
    title: "commitizen-tools: What can we gain from crafting a git message convention?",
    type: Types.TALK,
    speaker: 2
  },
  {
    time: "08:48",
    title: "Memory address in python",
    type: Types.TALK,
    speaker: 3
  },
  {
    time: "09:00",
    title: "Fake News' Foe: Fighting fake news with Python,  ML and twilio",
    type: Types.TALK,
    speaker: 4
  },
  {
    time: "09:12",
    title: "Just-in-Time with Numba",
    type: Types.TALK,
    speaker: 5
  },
  {
    time: "09:24",
    title: "Social distancing from your system’s dependencies in a healthy way",
    type: Types.TALK,
    speaker: 6
  },
  {
    time: "09:36",
    title: "Game maths in 10 minutes",
    type: Types.TALK,
    speaker: 7
  },
  {
    time: "09:48",
    title: "Break",
    type: Types.BREAK
  },
  {
    time: "10:12",
    title: "Python development for Windows",
    type: Types.TALK,
    speaker: 8
  },
  {
    time: "10:24",
    title: "Ice Crystal Impact Analysis using Tkinter, Multiprocessing, OpenCV and Matplotlib",
    type: Types.TALK,
    speaker: 9
  },
  {
    time: "10:36",
    title: "Python Gotchas",
    type: Types.TALK,
    speaker: 10
  },
  {
    time: "10:48",
    title: "Import Anything: Playing with Python's Import System",
    type: Types.TALK,
    speaker: 11
  },
  {
    time: "11:00",
    title: "Do you want your tech profitable, ethical, useful or reliable?",
    type: Types.TALK,
    speaker: 12
  },
  {
    time: "11:12",
    title: "Dependency injection in Python",
    type: Types.TALK,
    speaker: 13
  },
  {
    time: "11:24",
    title: "The hidden truth of soft skills: make them work for you",
    type: Types.TALK,
    speaker: 14
  },
  {
    time: "11:36",
    title: "Python, let's go home. Quickly.",
    type: Types.TALK,
    speaker: 15
  },
  {
    time: "11:48",
    title: "Ten Things You Should Know About Spacy",
    type: Types.TALK,
    speaker: 16
  },
  {
    time: "12:00",
    title: "Pizza!",
    type: Types.LUNCH
  },
];
