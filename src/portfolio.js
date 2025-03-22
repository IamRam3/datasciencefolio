const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ram | Portfolio",
  description:
    "A Data Science & Robotics practitioner who thrives to leverage startups with AI based solutions.",
  og: {
    title: "Ram's Portfolio",
    type: "website",
    url: "https://ramdhavileswarapu.netlify.app/home",
  },
};

//Home Page
const greeting = {
  title: "Namaste!",
  sub: "Ram Dhavileswarapu",
  logo_name: "Ram Dhavileswarapu",
  resumeLink:
    "https://github.com/IamRam3/side-projects/blob/main/resume/ram_cv.pdf",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/IamRam3",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/sairamd1905",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/sairam3",
    },
    {
      siteName: "GeeksforGeeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.geeksforgeeks.org/user/sairamw7yk/",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/ram-dhavileswarapu-4ab502250/",
    },
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Data Science & Robotics",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building RAG & AI Agents applications. ",
        "⚡ Reading & Implementing Research Paper's.",
        "⚡ Experience of working in Robotics field as an Intern. ",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "ros",
          fontAwesomeClassname: "simple-icons:ros",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Software Engineer",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building Scalable Applications.",
        "⚡ Quickly adaptable to new technologies . ",
        "⚡ Keen interest in System Design. ",
        "⚡ Able to work with different programming Languages.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "BootStrap",
          fontAwesomeClassname: "logos-bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "Stock Trading Platform",
      img_path: "stockMarket.gif",
      description:
        "A WebApp for making trades and analyzing historical data of stocks through API.",
      tags: [
        {
          lang: "MERN",
          color: "#004782",
        },
        {
          lang: "Microservices",
          color: "#00a100",
        },
        {
          lang: "gRPC",
          color: "#ff4b4b",
        },
        {
          lang: "Upstox API",
          color: "#3c0095",
        },
      ],
      linkcolor: "white",
    },

    {
      title: "Maternal Health Risk Classification",
      img_path: "maternal_health2_r.jpeg",
      description:
        "A basic Flask App for classifying health based on Age, BP, Blood Sugar, Body Temperature & Heart Rate",
      tags: [
        {
          lang: "End-to-End",
          color: "#8700b0",
        },
        {
          lang: "pandas",
          color: "red",
        },
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "scikit-learn",
          color: "#4257f5",
        },
        {
          lang: "Flask",
          color: "#ff4b4b",
        },
      ],
      code: "https://github.com/IamRam3/MHR_classification",
      linkcolor: "white",
    },
    {
      title: "Hybrid ALU",
      img_path: "ALU.jpg",
      description:
        "An implementation by integrating multiple technologies & Achieved 50% reduction in power consumption, and enchanced performance/speed.",
      tags: [
        {
          lang: "cadence virtuoso",
          color: "#004782",
        },
        {
          lang: "CMOS",
          color: "#8700b0",
        },
        {
          lang: "PTL",
          color: "#c47206",
        },
        {
          lang: "TG",
          color: "#ff4b4b",
        },
      ],
      linkcolor: "white",
    },
    {
      title: "Vision Transformer from scratch",
      img_path: "Vision_Transformer.gif",
      description:
        "An implementation of 'An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale'",
      tags: [
        {
          lang: "Research Paper",
          color: "red",
        },
        {
          lang: "Pytorch",
          color: "#8700b0",
        },
        {
          lang: "Google colab",
          color: "#4257f5",
        },
        {
          lang: "Python",
          color: "#004782",
        },
      ],
      code:
        "https://github.com/IamRam3/side-projects/blob/main/research%20papers/Vision_Transformer.ipynb",
      linkcolor: "white",
    },
    {
      title: "RAG with AI Agents",
      img_path: "Agentic-RAG-Banner.png",
      description:
        "A basic LLM chat application to save API calls by keeping frequent queries in vector DB & retrieving them. And also getting latest info from internet when prompted with research.",
      tags: [
        {
          lang: "jupyter-notebook",
          color: "red",
        },
        {
          lang: "python",
          color: "#4257f5",
        },
        {
          lang: "LangGraph",
          color: "#004782",
        },
        {
          lang: "Groq",
          color: "#8700b0",
        },
        {
          lang: "gemma",
          color: "#c47206",
        },
        {
          lang: "weekend-project",
          color: "#ff4b4b",
        },
      ],
      code:
        "https://github.com/IamRam3/side-projects/blob/main/fun%20proj's/RAG_with_AI_Agents.ipynb",
      linkcolor: "white",
    },
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Research Intern",
        subtitle: "TiHAN(IITH)",
        date: "Dec 2023 - March 2024",
        content: [
          "Developed a GPU-enabled docker container for ORBSLAM3.",
          "Developed ROS nodes for communication between drone & local workstation.",
        ],
      },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "Bachelor of Engineering in Information Technology",
          subtitle: "Maharaj Vijayaram Gajapathi Raj, Vizianagaram",
          date: "2020 - 2024",
          content: ["CGPA: 8.43/10"],
        },
        {
          title: "Pre-University Education",
          subtitle: "Aditya Jr. College, Mandapeta",
          date: "2018 - 2020",
          content: ["CGPA: 9.4/10"],
        },
        {
          title: "SSC",
          subtitle: "S.V.N, Angara",
          date: "2017 - 2018",
          content: ["CGPA: 10/10"],
        },
      ],
    },
  ],
};

//certificate cards
const certifications = {
  certifications: [
    {
      title: "Robotics",
      subtitle: "Coursera",
      logo_path: "pennsylvania.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/49APS9T6LAHY",
      alt_name: "Robotics",
      color_code: "#000000",
    },
    {
      title: "GPU Programming",
      subtitle: "CUDA",
      logo_path: "johnsHopkins.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/XGU1TJ7ELMOH",
      alt_name: "Tableau",
      color_code: "#000000",
    },
    {
      title: "Reinforcement Learning",
      subtitle: "Coursera",
      logo_path: "University of Alberta.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/JG7GXJ3XQH3O",
      alt_name: "Tableau",
      color_code: "#000000",
    },
    {
      title: "Complete Machine Learning, NLP Bootcamp MLOPS & Deployment",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-2c4e1ee9-fb90-4162-8f18-31dd3c7aeb55/",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Python",
      subtitle: "HackerRank",
      logo_path: "python_badge-Photoroom.png",
      certificate_link: "https://www.hackerrank.com/profile/sairamd1905",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "SQL",
      subtitle: "HackerRank",
      logo_path: "sql_badge-Photoroom.png",
      certificate_link: "https://www.hackerrank.com/profile/sairamd1905",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, Opensource Development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Rajahmundry, Andhra Pradesh",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 7989836425",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/IamRam3",
    iconifyClassname: "simple-icons:hackerrank",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ram-dhavileswarapu-4ab502250/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:sairam68386@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  certifications,
  resumeleft,
  resumeright,
};
