import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,

  rv_logo,
  chaaya_logo,
  toyoto,

  uberclone,
  loanguru,
  livedocs,
  threejs,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Analyst",
    icon: web,
  },
  {
    title: "Power BI Developer",
    icon: mobile,
  },
  {
    title: "AI-ML Enthusiast",
    icon: backend,
  },
  {
    title: "Story Teller",
    icon: creator,
  },
  {
    title: "Team Collaborator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Data Analyst",
    company_name: "Usable Bytes Pvt. Ltd",
    icon: rv_logo,
    iconBg: "#fefefe",
    date: "August 2023 - Present",
    points: [
    "Analyzed structured and semi-structured datasets to extract actionable insights for business and product teams.",
    "Designed and maintained dashboards using Power BI and SQL to track KPIs and performance metrics.",
    "Collaborated with cross-functional teams to understand data requirements and deliver data-driven solutions.",
    "Optimized data workflows and reporting processes, improving efficiency and decision-making accuracy.",

    ],
  },
  {
    title: "Data Analyst Intern",
    company_name: "TrainingYa, Gurugram",
    icon: chaaya_logo,
    iconBg: "#fefefe",
    date: "June 2022 – July 2023",
    points: [
    "Prepared, cleaned, and transformed large datasets using Excel, SQL, and Alteryx to ensure data accuracy and consistency.",
    "Built interactive dashboards and reports using Tableau and Power BI with advanced DAX and SQL queries.",
    "Worked on multiple real-world projects involving data integration, visualization, and insights generation to support business decisions.",
    "Applied Python and SAS for data analysis, automation, and statistical modeling tasks.",
    ],
  },
  {
    title: "IBM Data Analyst Intern",
    company_name: "IBM",
    icon: toyoto,
    iconBg: "#fefefe",
    date: "January 2022 – April 2022",
    points: [
      "Completed hands-on training in data analysis using SQL, Python, Excel, and data visualization tools.",
    "Worked on case studies involving data cleaning, exploratory data analysis, and dashboard creation.",
    "Developed insights and reports aligned with real-world business scenarios under IBM mentorship.",
    "Strengthened foundational skills in analytics, problem-solving, and data-driven storytelling.",
    ],
  },

];
const testimonials = [
  {
    testimonial:
      "Contributed actively as an ACE Club member by supporting technical events, workshops, and peer learning initiatives, helping students enhance their analytical and technical skills.",
    name: "ACE Club Members",
    designation: "Technical Club Member",
    company: "Vivekananda Institute of Professional Studies",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "Played a key role as a Data Analyst by delivering actionable insights through SQL queries, Power BI dashboards, and data transformation workflows, supporting business decision-making and performance improvement.",
    name: "Usable Bytes Team",
    designation: "Data Analyst",
    company: "Usable Bytes Pvt. Ltd.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    testimonial:
      "Participated in hackathon projects by applying data analysis, problem-solving, and technical skills to build effective solutions under time constraints while collaborating with diverse teams.",
    name: "Hackathon Team",
    designation: "Participant",
    company: "National / College-Level Hackathon",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
  },
];


const projects = [
  {
    name: "Workforce Performance and Attrition Prediction Model",
    description:
    "HR Data Standardization & Predictive Analytics Transformed fragmented HR data into actionable insights by building automated Python pipelines and a predictive attrition model. Visualized outcomes in Power BI to support data-driven retention strategies and executive decision-making.",
    tags: [
      {
        name: "Power BI",
        color: "blue-text-gradient",
      },
      {
        name: "MYSQL",
        color: "green-text-gradient",
      },
      {
        name: "Microsoft Excel",
        color: "pink-text-gradient",
      },
    ],
    image: loanguru,
    source_code_link: "https://app.powerbi.com/view?r=eyJrIjoiNTc0ZDAwNDktNGZjZi00MTE4LWE1ZDgtOWIxM2QyMDgyYTNlIiwidCI6IjIwNjc1NjkxLWQ0M2YtNDg3Zi04MmU0LTk2ZTNjODVlNDA1NyJ9",
  },
  {
    name: "Superstore Regional Sales & Customer Insights Dashboard",
    description:
      "Developed an executive-level Superstore regional sales and customer insights dashboard, leveraging SQL and Excel for ETL and interactive Power BI/Tableau visualizations to track KPIs, analyze customer behavior and product performance, and support data-driven sales and inventory decisions.",
    tags: [
      
      {
        name: "MYSQL",
        color: "blue-text-gradient",
      },
      {
        name: "Power BI",
        color: "green-text-gradient",
      },
      {
        name: "Microsoft Excel",
        color: "pink-text-gradient",
      },
      {
        name: "PYTHON",
        color: "blue-text-gradient",
      },
    ],
    image: uberclone,
    live_link:"https://app.powerbi.com/view?r=eyJrIjoiOWZlOTQ3OGQtZDRkNy00MTllLWJmZDktMTRiMjI1OWE1NzcyIiwidCI6IjIwNjc1NjkxLWQ0M2YtNDg3Zi04MmU0LTk2ZTNjODVlNDA1NyJ9",
    source_code_link: "https://app.powerbi.com/view?r=eyJrIjoiNjczYzkzNTEtYzVkZS00OWVjLTgzZmEtZDVkYjQ4ZmY5NWUxIiwidCI6IjIwNjc1NjkxLWQ0M2YtNDg3Zi04MmU0LTk2ZTNjODVlNDA1NyJ9",
  },

  {
    name: "Logistics Performance & Shipment Analytics",
    description:
      "Optimized logistics operations by consolidating domestic and international shipment data into an interactive Power BI dashboard, enabling real-time tracking of delivery performance, revenue, costs, and delays to support data-driven operational decisions.",
    tags: [
      {
        name: "Power BI",
        color: "blue-text-gradient",
      },
      {
        name: "MYSQL",
        color: "green-text-gradient",
      },
      {
        name: "Microsoft SQL",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "red-text-gradient",
      },
    ],
    image: livedocs,
    source_code_link: "https://app.powerbi.com/view?r=eyJrIjoiMmQwM2I3MDItNDkxMy00MjRhLTgyOTAtNDYzZDZmM2VlODNmIiwidCI6IjIwNjc1NjkxLWQ0M2YtNDg3Zi04MmU0LTk2ZTNjODVlNDA1NyJ9",
    // live_link: "https://app.powerbi.com/view?r=eyJrIjoiMmQwM2I3MDItNDkxMy00MjRhLTgyOTAtNDYzZDZmM2VlODNmIiwidCI6IjIwNjc1NjkxLWQ0M2YtNDg3Zi04MmU0LTk2ZTNjODVlNDA1NyJ9",
  },
];

export { services, technologies, experiences, testimonials, projects };
