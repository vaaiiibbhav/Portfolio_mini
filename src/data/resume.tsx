import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Vaibhav Verma",
  initials: "VV",
  url: "https://github.com/vaaiiibbhav",
  location: "Bhopal, India",

  description:
    "Third-year B.Tech Computer Science student with hands-on expertise in Full-Stack Development (MERN) and Machine Learning.",

  summary:
    "Delivered production-ready projects including a feature-rich fitness tracker (FitPal), brain tumor detection system using PyTorch and BRATS dataset (NeuroVision), OSINT-based facial identification, and equipment parameter analytics. Proficient in React.js, Node.js, Express, MongoDB, Python, REST APIs, Git, and modern tooling.",

  avatarUrl: "/pfp.jpg",

  skills: [
    "Python",
    "Java",
    "C++",
    "JavaScript",
    "SQL",
    "ReactJS",
    "NextJS",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "PyTorch",
    "TensorFlow",
    "HTML5",
    "CSS3",
    "Git",
  ],

  services: [
    {
      title: "Full-Stack Development",
      description:
        "Building production-ready web applications using the MERN stack (MongoDB, Express, React, Node.js) and modern UI tools.",
      icon: "⚡",
    },
    {
      title: "Machine Learning",
      description:
        "Developing deep learning models for image processing and data analysis using PyTorch, TensorFlow, and Python.",
      icon: "🧠",
    },
    {
      title: "Frontend Development",
      description:
        "Creating responsive and interactive user interfaces with React.js, Tailwind CSS, and GSAP.",
      icon: "🎨",
    },
    {
      title: "Backend Development",
      description:
        "Designing robust server-side logic and RESTful APIs using Node.js, Express, and MongoDB Atlas.",
      icon: "🛠",
    },
  ],

  availability: {
    status: "Available",
    message: "Open to internships and software engineering opportunities",
  },

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home", external: false },
    {
      href: "https://medium.com/@vaaiiibbhav",
      icon: NotebookIcon,
      label: "Blog",
      external: true,
    },
  ],

  contact: {
    email: "vaibhav.23bce11700@vitbhopal.ac.in",

    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/vaaiiibbhav",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vaibhav-verma-905a1b270/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:vaibhav.23bce11700@vitbhopal.ac.in",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    // Work experience entries will be added once real internship/role details are available.
  ],

  education: [
    {
      school: "Vellore Institute of Technology",
      href: "https://vitbhopal.ac.in",
      degree: "B. Tech in Computer Science Engineering",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Vellore_Institute_of_Technology_seal_2017.svg/250px-Vellore_Institute_of_Technology_seal_2017.svg.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Aster Public School",
      href: "https://grnoida.asterinstitutions.com/",
      degree: "CBSE Boards 12th (PCM)",
      logoUrl: "/asterlogo.png",
      start: "2022",
      end: "2023",
    },
  ],

  pprojects: [
    {
      title: "Urban Grocer",
      href: "https://urban-grocer-grocery-delivery-platf.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "A full-featured grocery delivery platform with real-time inventory, cart management, and seamless checkout experience. Built with a modern tech stack and deployed on Vercel.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/vaaiiibbhav/UrbanGrocer-Grocery-Delivery-Platform",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://urban-grocer-grocery-delivery-platf.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/urbangrocer.jpg",
      video: "",
    },

    {
      title: "FitPal — Fitness Tracker",
      href: "https://fitpal2026-frontend-59gy.vercel.app/",
      dates: "11 2024",
      active: true,
      description:
        "Developed FitPal — track nutrition, calculate BMI, suggest exercises based on goals, and visualize progress via graphs. Features a responsive UI and integrated backend services.",
      technologies: [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "Tailwind CSS",
        "GSAP",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/vaaiiibbhav/Fitpal2026",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://fitpal2026-frontend-59gy.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/fitpal.png",
      video: "",
    },

    {
      title: "Secure-OSINT-FaceID",
      href: "https://github.com/vaaiiibbhav/Secure-OSINT-FaceID",
      dates: "2026",
      active: true,
      description:
        "OSINT-driven facial identification system developed under the EPICS framework. Integrates Computer Vision with Open-Source Intelligence to identify individuals and automatically trigger web-scraping for unrecognized faces, with dedicated modules for consent management and audit logging.",
      technologies: [
        "Python",
        "MediaPipe",
        "OpenCV",
        "PyTorch",
        "TensorFlow",
        "Keras",
        "scikit-learn",
        "Selenium",
        "BeautifulSoup",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/vaaiiibbhav/Secure-OSINT-FaceID",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/osint.jpg",
      video: "",
    },

    {
      title: "NeuroVision — Brain Tumor Detection",
      href: "#",
      dates: "04 2025",
      active: true,
      description:
        "Developed a machine learning model to process .nifty MRI scans and detect brain tumors using the official BRATS dataset. Implemented preprocessing pipeline with NiBabel, NumPy, and OpenCV.",
      technologies: ["Python", "PyTorch", "TensorFlow", "NiBabel", "NumPy", "OpenCV"],
      links: [
        {
          type: "Source",
          href: "https://github.com/vaaiiibbhav/NeuroVision",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },

    {
      title: "Equipment Parameter Insights",
      href: "https://github.com/vaaiiibbhav/FOSSEE-Equipment-Parameter-Insights",
      dates: "11 2025",
      active: true,
      description:
        "A powerful hybrid application (Web + Desktop) for analyzing, visualizing, and reporting chemical equipment data. Features automated reporting and interactive data charts.",
      technologies: [
        "Django + DRF",
        "React + Chart.js",
        "Pandas",
        "PyQt5",
        "ReportLab",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/vaaiiibbhav/FOSSEE-Equipment-Parameter-Insights",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
