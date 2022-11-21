import { CgAlbum } from "react-icons/cg";
import {
  FaAndroid,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaReact,
  FaStackOverflow,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const menuLinks = [
  { name: "About Me", route: "/about" },
  // { name: "Experience", route: "/experience" },
  // { name: "Projects", route: "/projects" },
  { name: "Github", route: "/github" },
  { name: "Articles", route: "/article" },
  { name: "Contact", route: "/contact" },
];

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Sunil Sapkota. All Rights Reserved.`,
  author: {
    name: "Sunil Sapkota",
    accounts: [
      {
        url: "https://github.com/WenLonG12345",
        icon: <FaGithub />,
        name: "Github",
        type: "gray",
      },
      {
        url: "https://www.linkedin.com/in/teo-wen-long-19960316/",
        icon: <FaLinkedin />,
        name: "Linkedin",
        type: "linkedin",
      },
      {
        url: "https://stackoverflow.com/users/12261890/teo",
        icon: <FaStackOverflow />,
        name: "StackOverflow",
        type: "orange",
      },
      {
        url: "https://skynight1996.medium.com/",
        icon: <FaMedium />,
        name: "Medium",
        type: "gray",
      },
      {
        url: "mailto:teowenlong0316@gmail.com",
        icon: <SiGmail />,
        name: "Gmail",
        type: "red",
      },
    ],
  },
};

const resume = {
  url: "https://drive.google.com/file/d/1KKVBejHxAr2PKhSCFufgnvdQTMUWt-u7/view?usp=sharing",
  icon: <CgAlbum />,
  name: "Resume",
};

// const techStacks = [
//   {
//     name: "Android",
//     icon: <FaAndroid fontSize="20px" />,
//     url: "https://www.android.com/",
//   },
//   {
//     name: "React Native",
//     icon: <FaReact fontSize="20px" />,
//     url: "https://reactnative.dev/",
//   },
//   {
//     name: "Kotlin",
//     icon: <SiKotlin fontSize="20px" />,
//     url: "https://kotlinlang.org/",
//   },
//   {
//     name: "Java",
//     icon: <FaJava fontSize="20px" />,
//     url: "https://www.java.com/en/",
//   },
//   {
//     name: "Javascript",
//     icon: <FaJs fontSize="20px" />,
//     url: "https://www.javascript.com/",
//   },
//   {
//     name: "Firebase",
//     icon: <SiFirebase fontSize="20px" />,
//     url: "https://firebase.google.com/",
//   },
//   {
//     name: "Github & GitLab",
//     icon: <FaGitAlt fontSize="20px" />,
//     url: "https://www.gitlab.com/",
//   },
//   {
//     name: "CI/CD - Fastlane and Terraform",
//     icon: <SiFastlane fontSize="20px" />,
//     url: "https://fastlane.tools/",
//   },
// ];

const companies = [
  {
    title: "Qumon Intelligence",
    alt: "qumon image",
    url: "https://www.qumonintelligence.com/",
    role: "Mobile Application Developer",
    skills: [
      "Kotlin",
      "Java",
      "Android",
      "Javascript",
      "React",
      "React Native",
    ],
    period: "Aug 2020 - Present",
    logo: "/qumon.png",
  },
  {
    title: "TimeTec Cloud Sdn Bhd",
    alt: "timetec image",
    url: "https://www.timeteccloud.com/",
    role: "Mobile Application Developer Intern",
    skills: ["Java", "Android", "C#", "Appium Automation Testing", "AWS"],
    period: "Jul 2019 - Jan 2020",
    logo: "/timetec.png",
  },
];

const educations = [
  {
    title: "University Technology Malaysia (UTM)",
    alt: "utm image",
    url: "https://www.utm.my/",
    role: "Bachelor's Degree in Computer Science (Network and Security)",
    skills: ["CGPA - 3.79", "CCNA", "Security Management", "Network Security"],
    period: "Sept 2016 - Sept 2020",
    logo: "/utm.png",
  },
  {
    title: "SMK Mentakab",
    alt: "smk image",
    url: "https://www.facebook.com/pages/category/College---university/Sekolah-Menengah-Kebangsaan-Mentakab-224802077565350/",
    role: "STPM - Science Stream (Physics)",
    skills: ["CGPA - 3.33", "Math T", "Physics", "Chemistry"],
    period: "Jan 2015 - Jun 2016",
    logo: "/smk.png",
  },
];

const liveProjects = [
  {
    name: "Chativo",
    imageUrl:
      "https://play-lh.googleusercontent.com/tgLiP-ZL-sBuZt2RzDU1tN88Cp7NPbdjF7c0311_dui86f1HrAQM0j4gXaRE0pb5zW0=s360-rw",
    alt: "chativo",
    summary:
      "Enterprise ready live-chat base customer support & engagement software",
    playstore: "https://play.google.com/store/apps/details?id=io.chativo.chat",
    appstore: "https://apps.apple.com/us/app/chativo/id1545295884",
  },
  {
    name: "ChativoV",
    imageUrl:
      "https://play-lh.googleusercontent.com/5U5s7sSIuzP6CygPkU2ZYxyOXT-MKv7oiyweGKHgkEgVameOcYt44rnXqCTWZJNZgVqn=s360-rw",
    alt: "chativo-v",
    summary:
      "Live-chat specifically designed for visitors to communicate with real-time agent instantly",
    playstore:
      "https://play.google.com/store/apps/details?id=io.chativo.visitor",
    appstore: "https://apps.apple.com/us/app/chativov/id1595519177",
  },
  {
    name: "ChativoV",
    imageUrl:
      "https://play-lh.googleusercontent.com/5U5s7sSIuzP6CygPkU2ZYxyOXT-MKv7oiyweGKHgkEgVameOcYt44rnXqCTWZJNZgVqn=s360-rw",
    alt: "chativo-v",
    summary:
      "Live-chat specifically designed for visitors to communicate with real-time agent instantly",
    playstore:
      "https://play.google.com/store/apps/details?id=io.chativo.visitor",
    appstore: "https://apps.apple.com/us/app/chativov/id1595519177",
  },
];

const techStacks = [
  {
    name: "Android",
    icon: <FaAndroid fontSize="20px" />,
    category: "devops",
    url: "https://www.android.com/",
  },
  {
    name: "React Native",
    icon: <FaReact fontSize="20px" />,
    category: "devops",
    url: "https://reactnative.dev/",
  },
  {
    name: "Android",
    icon: <FaAndroid fontSize="20px" />,
    category: "android",
    url: "https://www.android.com/",
  },
  {
    name: "React Native",
    icon: <FaReact fontSize="20px" />,
    category: "android",
    url: "https://reactnative.dev/",
  },
  {
    name: "Android",
    icon: <FaAndroid fontSize="20px" />,
    category: "web",
    url: "https://www.android.com/",
  },
  {
    name: "React Native",
    icon: <FaReact fontSize="20px" />,
    category: "web",
    url: "https://reactnative.dev/",
  },
];

export {
  menuLinks,
  techStacks,
  siteConfig,
  resume,
  companies,
  educations,
  liveProjects,
  // techStacksWeb,
  // techStacksDevOps,
  // techStacksAndroid,
};
