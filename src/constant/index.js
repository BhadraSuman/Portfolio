import shorturl from "../assets/projects/Mini_URL.png";
import metube from "../assets/projects/metube.png";
import skecho from "../assets/projects/skecho.png";
import logoWhite from "../assets/logoWhite.webp";

import college from "../assets/college1.png";
import highSec from "../assets/high-sec.png";
import school from "../assets/school.png";

import emagz from "../assets/emagz.png";
import fabric from "../assets/fabricbazzar.png";
import toggletimer from "../assets/toggletimer.ico";
import sattva from "../assets/sattva.png";
import ledfify from "../assets/ledgify.png";

export const HERO_CONTENT = `Highly motivated and results-oriented B. Tech student with a strong foundation in programming and a passion for crafting
efficient, scalable software & web solutions. Finalist in the prestigious Smart India Hackathon, demonstrating exceptional problemsolving and teamwork skills.
`;

export const ABOUT_TEXT = "";
export const EDUCATION = [
    {
        title: "Bachelor of Technology",
        image: college,
        spec: ["Computer Science in Engineering"],
        year: "2021 - 2025",
        institute: "Maulana Abul Kalam Azad University of Technology, W.B.",
        percentage: "76.70%",
    },
    {
        title: "Higher Secondary ",
        image: highSec,
        spec: ["Mathematics", "Physics", "Chemistry"],
        year: "2019 - 2021",
        institute: "Savitri Devi DAV Public School, Jamtara,JH ",
        percentage: "83.60%",
    },
    {
        title: "Secondary",
        image: school,
        spec: [],
        year: "2019",
        institute: "Savitri Devi DAV Public School, Jamtara,JH ",
        percentage: "90.00%",
    },
];

export const EXPERIENCES = [
    {
        year: "Feb 2025 - Present",
        role: "NodeJs Developer Intern",
        company: "Hansraj Ventures Pvt Ltd",
        link: "https://www.hansrajventures.com/",
        description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
        technologies: ["Javascript", "React.js", "Next.js", "MongoDB", "ElectronJs", "WordPress"],
    },
    {
        year: "Feb 2025 - July 2025",
        role: "NodeJs Developer Intern",
        company: "Hansraj Ventures Pvt Ltd",
        link: "",
        description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
        technologies: ["Javascript", "React.js", "Next.js", "MongoDB", "ElectronJs", "WordPress"],
    },
];

export const ACHIEVEMENTS = [
    {
        duration: "Feb 2025 - Present",
        role: "NodeJs Developer Intern",
        company: "Hansraj Ventures Pvt Ltd",
        link: "https://www.hansrajventures.com/",
        description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
        technologies: ["Javascript", "React.js", "Next.js", "MongoDB", "ElectronJs", "WordPress"],
    },
];

export const LIVEPROJECTS = [
    {
        title: "Fabric Bazzaar",
        url: "fabricbazzaar.com",
        image: fabric,
        description:
            "Fabric Bazzaar is a B2B marketplace for textiles. It's built to connect top textile mills in India with designers, exporters, and manufacturers, providing a curated selection of export-quality fabrics. The platform focuses on trust, transparency, and competitive pricing, leveraging technology to make fabric sourcing more efficient.",
        technologies: ["React", "NodeJs", "Express.js", "MongoDB", "Google Drive API", "Google Maps API", "Google Authentication"],
    },
    {
        title: "Toggle Timer",
        url: "toggletimer.com",
        image: toggletimer,
        description:
            "Toggle Timer is a time-tracking software that helps individuals and teams manage their time, projects, and productivity. It's known for its user-friendly interface and features like one-click timers, detailed reporting, and integrations with popular tools. It allows users to track their work seamlessly across web, desktop, and mobile apps.",
        technologies: ["React", "NodeJs", "Express.js", "MongoDB"],
    },

    {
        title: "Hansraj Ventures",
        url: "",
        description: "",
        technologies: ["React", "NodeJs", "Express.js", "MongoDB", "FireBase"],
    },
    {
        title: "Ledgigy",
        url: "",
        image: ledfify,
        description: "",
        technologies: ["Wordpress", "Elementor"],
    },
    {
        title: "WomenFly Foundation",
        url: "",
        image: emagz,
        description:
            "WomenFly Foundation is a community-focused, non-governmental organization (NGO) dedicated to the welfare and empowerment of women across India. The foundation works to support women facing social, economic, or domestic challenges by providing opportunities in education, skill development, health, and entrepreneurship.",
        technologies: ["React", "NodeJs", "Express.js", "MongoDB", "FireBase"],
    },
];

export const PROJECTS = [
    {
        title: "Youtube Clone",
        image: metube,
        description:
            "A user interface similar to YouTube, including features like a video feed, search bar, video player, and sidebar with recommendations, just like the YouTube experience.",
        technologies: ["React", "Tailwind", "YouTube Data API v3"],
        url: "https://metube-lite.netlify.app/",
        github: "https://github.com/Sumanbhadra/MeTube",
    },
    {
        title: "Portfolio Website",
        image: logoWhite,
        description: "A personal portfolio website showcasing projects, skills, and contact information.",
        technologies: ["HTML", "CSS", "React", "Tailwind", "Framer Motion"],
        url: "https://sumanbhadra.netlify.app/",
        github: "https://github.com/Sumanbhadra/Portfolio",
    },
    {
        title: "Skecho",
        image: skecho,
        description:
            "Skecho Together is an interactive website where you can spend quality time with your loved ones by doodling, guessing words, and chatting in real-time. Create private rooms, express creativity through sketches, and share laughter over live voice chat. Perfect for all ages, it's a fun way to bond, compete, and make unforgettable memories! 🎨🗣",
        technologies: ["React", "Tailwind", "Node.js", "Express.js", "Socket.io", "Canvas API"],
        url: "https://skecho.netlify.app/",
        github: "https://github.com/Sumanbhadra/Skecho",
    },
    {
        title: "URL Shortener",
        image: shorturl,
        description:
            "A URL shortener web application that converts long URLs into short, easy-to-share links. Users can also view the number of times a link has been clicked.",
        technologies: ["React", "Tailwind", "Node.js", "MongoDB", "Express.js"],
        url: "",
        github: "https://github.com/Sumanbhadra/URL-Shortner",
    },
];

export const CONTACT = {
    address: "Kolkata, West Bengal, India, 700113",
    phoneNo: "+91 629 189 8703 ",
    email: "bhadrasuman04@gmail.com",
};
