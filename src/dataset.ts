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
    },
    {
      id: "Wingware",
      name: "Wingware",
      photo: require("Assets/sponsors/wingware.png"),
      link: "https://wingware.com"
    },
    {
      id: "Amboss",
      name: "Amboss",
      photo: require("Assets/sponsors/amboss.png"),
      link: "https://www.amboss.com"
    },
    {
      id: "Python San Sebastian",
      name: "Python San Sebastian",
      photo: require("Assets/sponsors/pyss.png"),
      link: "https://pyss.org"
    }
  ],
  [
    {
      id: "CONTACT Software",
      name: "CONTACT Software",
      photo: require("Assets/sponsors/contact.jpg"),
      link: "https://www.contact-software.com/en/"
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
    name: "Matteo Guzzo",
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
  {
    name: "Łukasz Langa",
    photo: require("Assets/speakers/langa.jpg"),
    job: "Job B",
    social: "https://twitter.com/llanga"
  },
  {
    name: "Ben Nuttall",
    photo: require("Assets/speakers/ben.jpeg"),
    job: "Job B",
    social: "https://twitter.com/ben_nuttall"
  },
  {
    name: "Mark Smith",
    photo: require("Assets/speakers/marksmith.jpg"),
    job: "Job B",
    social: "https://twitter.com/Judy2k"
  },
  {
    name: "Disconnect3d",
    photo: require("Assets/speakers/disconnected.jpg"),
    job: "Job B",
    social: "https://twitter.com/disconnect3d_pl"
  },
  {
    name: "Markus Holtermann",
    photo: require("Assets/speakers/markus.jpg"),
    job: "Job B",
    social: "https://twitter.com/m_holtermann"
  },
  {
    name: "Vincent D. Warmerdam",
    photo: require("Assets/speakers/vincent.jpg"),
    job: "Job B",
    social: "https://twitter.com/fishnets88"
  },
  {
    name: "Alexander Hultnér",
    photo: require("Assets/speakers/alexander.jpg"),
    job: "Job B",
    social: "https://twitter.com/ahultner"
  },
  {
    name: "Marielle Dado",
    photo: require("Assets/speakers/marielle.png"),
    job: "Job B",
    social: "https://twitter.com/marielli"
  },
  {
    name: "Cheuk Ting Ho",
    photo: require("Assets/speakers/cheuk.jpg"),
    job: "Job B",
    social: "https://twitter.com/cheukting_ho"
  },
  {
    name: "Raphael Pierzina",
    photo: require("Assets/speakers/hackebrot.jpg"),
    job: "Job B",
    social: "https://twitter.com/hackebrot"
  },
  {
    name: "Jeremy Tuloup",
    photo: require("Assets/speakers/jtpio.jpg"),
    job: "Job B",
    social: "https://twitter.com/jtpio"
  },
  {
    name: "Laurent Picard",
    photo: require("Assets/speakers/laurent.jpg"),
    job: "Job B",
    social: "https://twitter.com/PicardParis"
  },
  {
    name: "Artur Czepiel",
    photo: require("Assets/speakers/artur.jpg"),
    job: "Job B",
    social: "https://twitter.com/artcz"
  },
  {
    name: "Alisa",
    photo: require("Assets/speakers/alisa.jpg"),
    job: "Job B",
    social: "https://twitter.com/FatDataUnicorn"
  },
  {
    name: "Ian Ozsvald",
    photo: require("Assets/speakers/ian.jpeg"),
    job: "Job B",
    social: "https://twitter.com/ianozsvald"
  },
  {
    name: "Dana Arsovska",
    photo: require("Assets/speakers/dana.jpeg"),
    job: "Job B",
    social: ""
  },
  {
    name: "Iaroslav Shepilov",
    photo: "https://via.placeholder.com/150",
    job: "Job B",
    social: ""
  },
  {
    name: "Mircea Chira",
    photo: "https://via.placeholder.com/150",
    job: "Job B",
    social: ""
  },
  {
    name: "Maciej Majewski",
    photo: require("Assets/speakers/majewski.jpg"),
    job: "Job B",
    social: ""
  },
  {
    name: "Adrin Jalali",
    photo: require("Assets/speakers/adrin.jpg"),
    job: "Job A",
    social: "https://twitter.com/adrinjalali"
  },
  {
    name: "Bruno Rocha",
    photo: require("Assets/speakers/bruno.jpg"),
    job: "Job B",
    social: "https://twitter.com/rochacbruno"
  },
  {
    name: "Veronica Hanus",
    photo: require("Assets/speakers/veronica.jpg"),
    job: "Job B",
    social: "https://twitter.com/veronica_hanus"
  },
  {
    name: "Cory Jez",
    photo: require("Assets/speakers/cory.jpg"),
    job: "Job B",
    social: "https://twitter.com/bballmaths"
  },
  {
    name: "Vinícius Gubiani Ferreira",
    photo: require("Assets/speakers/vinicius.jpg"),
    job: "Job B",
    social: ""
  },
  {
    name: "Max Humber",
    photo: require("Assets/speakers/max.png"),
    job: "Job B",
    social: "https://twitter.com/maxhumber"
  },
  {
    name: "Daniel Jordán",
    photo: "https://via.placeholder.com/150",
    job: "Job B",
    social: ""
  },
  {
    name: "Jocelyn Matthews",
    photo: "https://via.placeholder.com/150",
    job: "Job B",
    social: ""
  },
  {
    name: "Moshe Zadka",
    photo: require("Assets/speakers/moshe.jpg"),
    job: "Job A",
    social: "https://twitter.com/moshezadka"
  },
  {
    name: "Jason C. McDonald",
    photo: require("Assets/speakers/jason.png"),
    job: "Job B",
    social: "https://twitter.com/codemouse92"
  },
  {
    name: "Ken Youens-Clark",
    photo: require("Assets/speakers/ken.jpg"),
    job: "Job B",
    social: "https://twitter.com/kycl4rk"
  },
  {
    name: "Anais Dotis-Georgiou",
    photo: require("Assets/speakers/anais.png"),
    job: "Job B",
    social: "https://twitter.com/AnaisDotis"
  },
  {
    name: "Aly Sivji",
    photo: require("Assets/speakers/aly.jpeg"),
    job: "Job B",
    social: "https://twitter.com/CaiusSivjus"
  },
  {
    name: "Ajay Thorve",
    photo: require("Assets/speakers/ajay.jpg"),
    job: "Job B",
    social: "https://twitter.com/AjayTh123"
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
    title: "On the Meaning of Version Numbers",
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
    time: "10:00",
    title: "Composition over inheritance in Python 🧀🍅🧄🥦",
    type: Types.TALK,
    speaker: 26
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
  {
    time: "13:00",
    title: "An AsyncIO Web app in 10 minutes with Starlette",
    type: Types.TALK,
    speaker: 17
  },
  {
    time: "13:12",
    title: "piwheels: a Python package repository for Raspberry Pi",
    type: Types.TALK,
    speaker: 18
  },
  {
    time: "13:24",
    title: "Everything You Know About MongoDB is Wrong",
    type: Types.TALK,
    speaker: 19
  },
  {
    time: "13:36",
    title: "sudo python is a trap, use isolate mode",
    type: Types.TALK,
    speaker: 20
  },
  {
    time: "13:48",
    title: "All Hands on Deck - Handling Security Issues",
    type: Types.TALK,
    speaker: 21
  },
  {
    time: "14:00",
    title: "Roman Numbers > API Design >> Word Embeddings",
    type: Types.TALK,
    speaker: 22
  },
  {
    time: "14:12",
    title: "Give your data classes super powers with pydantic",
    type: Types.TALK,
    speaker: 23
  },
  {
    time: "14:24",
    title: "How to Teach Python to Beginners: A Guide for Python Experts",
    type: Types.TALK,
    speaker: 24
  },
  {
    time: "14:36",
    title: "How to be Pythonic? Design a Query Language in Python",
    type: Types.TALK,
    speaker: 25
  },
  {
    time: "14:48",
    title: "Break",
    type: Types.BREAK
  },
  {
    time: "15:00",
    title: "Control JupyterLab from Python notebooks",
    type: Types.TALK,
    speaker: 27
  },
  {
    time: "15:12",
    title: "Building smarter solutions with no expertise in machine learning",
    type: Types.TALK,
    speaker: 28
  },
  {
    time: "15:24",
    title: "Connecting more dots",
    type: Types.TALK,
    speaker: 29
  },
  {
    time: "15:36",
    title: "Burnout/depression in quarantine",
    type: Types.TALK,
    speaker: 30
  },
  {
    time: "15:48",
    title: "Flying Pandas - Dask, Modin & Vaex",
    type: Types.TALK,
    speaker: 31
  },
  {
    time: "16:00",
    title: "Serverless Functions in Python: A Simple Introduction",
    type: Types.TALK,
    speaker: 32
  },
  {
    time: "16:12",
    title: "Script server: dynamic web UI for scripts",
    type: Types.TALK,
    speaker: 33
  },
  {
    time: "16:24",
    title: "Introduction to web scraping with scrapy!",
    type: Types.TALK,
    speaker: 34
  },
  {
    time: "16:36",
    title: "TONIC - Autonomous, Visual-SLAM based robot in Python",
    type: Types.TALK,
    speaker: 35
  },
  {
    time: "16:48",
    title: "How to write a custom scikit-learn estimator",
    type: Types.TALK,
    speaker: 36
  },
  {
    time: "17:00",
    title: "Pizza!",
    type: Types.LUNCH
  },
  {
    time: "18:00",
    title: "Configuration Management with Dynaconf",
    type: Types.TALK,
    speaker: 37
  },
  {
    time: "18:12",
    title: "To comment or not? A data-driven look at attitudes toward code comments",
    type: Types.TALK,
    speaker: 38
  },
  {
    time: "18:24",
    title: "Scraping and analyzing PGA Tour golf data with Python",
    type: Types.TALK,
    speaker: 39
  },
  {
    time: "18:36",
    title: "pybr i18n: Bringing python for those who do not speak english",
    type: Types.TALK,
    speaker: 40
  },
  {
    time: "18:48",
    title: "Getting Started with Web Scraping",
    type: Types.TALK,
    speaker: 41
  },
  {
    time: "19:00",
    title: "Random Matrix Music Maker",
    type: Types.TALK,
    speaker: 42
  },
  {
    time: "19:12",
    title: "Python Bindings for a Decentralized Cloud Object Storage network",
    type: Types.TALK,
    speaker: 43
  },
  {
    time: "19:24",
    title: "Everything You Wished You Didn't Have to Know about Numbers in Python",
    type: Types.TALK,
    speaker: 44
  },
  {
    time: "19:36",
    title: "Functional Meets Objects",
    type: Types.TALK,
    speaker: 45
  },
  {
    time: "19:48",
    title: "Teaching test-driven development with pytest",
    type: Types.TALK,
    speaker: 46
  },
  {
    time: "20:00",
    title: "Break",
    type: Types.BREAK
  },
  {
    time: "20:12",
    title: "TimeSeries Databases and Pandas DataFrames ",
    type: Types.TALK,
    speaker: 47
  },
  {
    time: "20:24",
    title: "Life without `pip install` 😱",
    type: Types.TALK,
    speaker: 48
  },
  {
    time: "20:36",
    title: "GPU accelerated Crossfilter Vizualizations in Python",
    type: Types.TALK,
    speaker: 49
  },
  {
    time: "20:48",
    title: "Closing",
    type: Types.OTHER
  },
];
