const navLinks = [
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Projects",
    link: "#work",
  },
  {
    name: "Education",
    link: "#education",
  },
  
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "Python",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Spring Boot",
    imgPath: "/images/logos/spring-boot.png",
  },
  {
    name: "React.js",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Node.js",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "SQL",
    imgPath: "/images/logos/sql.png",
  },
];

const techStackImgs2 = [
  {
    name: "Data Pipelines",
    imgPath: "/images/logos/data-pipelines.png",
  },
  {
    name: "Docker",
    imgPath: "/images/logos/docker.png",
  },
  {
    name: "GCP",
    imgPath: "/images/logos/google-cloud.png",
  },
  {
    name: "Kafka",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "JUnit5",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
  
];



const expCards = [
  {
    techStacks: ["Python", "SQL", "Apache Spark", "GCP"],
    
    logoPath: "/images/logo1.png",
    title: "Data Engineering Intern",
    date: "September 2025 - Present",
    responsibilities: [
      "Built and optimized ETL pipelines with Python, SQL, and Apache Spark, improving data ingestion speed and scalability.",
      "Deployed GCP cloud solutions, reducing latency by 20% and boosting system resilience.",
      "Delivered ML-ready datasets with data scientists, accelerating model training and business insights.",
    ],
  },
  {
    techStacks: ["React", "Node.js", "REST APIs", "Jira"],
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Software Developer Intern",
    date: "February 2023 - July 2023",
    responsibilities: [
      "Improved UI responsiveness by 30% across HR software modules through optimized React state management and lazy loading.",
      "Resolved 100+ client issues via Jira, cutting resolution time by 25% and raising satisfaction to 95%.",
      "Built scalable payroll solutions with React, Node.js, and RESTful APIs, reducing onboarding time for enterprise clients by 20%",
    ],
  },
  {
    techStacks: ["Node.js", "Express.js", "Git"],
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Software Developer Intern",
    date: "April 2022 - May 2022",
    responsibilities: [
      "Reduced crash rates by 15% by fixing 50+ critical issues, ensuring 99% uptime during peak traffic.",
      "Streamlined Git collaboration across teams, cutting merge conflicts by 40% and enabling smooth integrations.",
      "Built RESTful APIs with Node.js and Express.js, accelerating feature rollout and improving client onboarding.",
    ],
  },
];

export const eduCards = [
  {
    university: "University of Strathclyde",
    degree: "MSc. in Advanced Computer Science",
    date: "Jauary 2024 - Janurary 2025",
    grade: "First Class with Distinction",
    logoPath: "/images/logos/uni-strathclyde.jpeg",
    coursework: [
      "Distributed Information System",
      "Designing Usable Systems",
      "Deep Neural Network",
      "Machine Learning",
    ],
  },
  {
    university: "Anna University, St. Joseph's College of Engineering",
    degree: "B.E. in Computer Science and Engineering",
    date: "August 2019 - May 2023",
    grade: "First Class",
    logoPath: "/images/logos/anna-university.jpg",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Operating Systems",
      "Cloud Computing",
    ],
  },
  
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  
  
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/mohanrajloganathan/",
    imgPath: "/images/linkedin.png",
  },
  {
    name: "github",
    url: "https://www.github.com/mohan-sys",
    imgPath: "/images/github-invert.png",
  },
];

// constants/index.js

const SKILL_TABS = [
  {
    key: "languages",
    title: "Languages & Core Technologies",
    items: [
      "Python",
      "Java",
      "JavaScript",
      "SQL",
      "Kotlin",
      "REST API",
    ],
  },
  {
    key: "frameworks",
    title: "Frameworks & Libraries",
    items: [
      "React.js",
      "Node.js",
      "Spring Boot",
      "Apache Spark",
      "Express.js",
      "JUnit 5",
      "Apache Airflow",
    ],
  },
  {
    key: "cloud",
    title: "Cloud & DevOps Tools",
    items: [
      "Docker",
      "Kubernetes",
      "AWS",
      "GCP",
      "Git",
      "CI/CD",
      "Jira",
      "Kafka",
    ],
  },
  {
    key: "databases",
    title: "Databases & Data Engineering Practices",
    items: [
      "MySQL",
      "MongoDB",
      "BigQuery",
      "RESTful API Design",
      "Agile/Scrum",
      "Test-Driven Development",
      "ETL Pipelines",
    ],
  },
];

const SKILL_ICONS = {
  // Languages
  Python: "/images/logos/python.svg",
  Java: "/images/logos/java.png",
  JavaScript: "/images/logos/javascript.png",
  SQL: "/images/logos/sql.png",
  Kotlin: "/images/logos/kotlin.png",
  "REST API": "/images/logos/api.png",

  // Frameworks
  "React.js": "/images/logos/react.png",
  "Node.js": "/images/logos/node.png",
  "Spring Boot": "/images/logos/spring-boot.png",
  "Apache Spark": "/images/logos/spark.png",
  "Express.js": "/images/logos/express.png",
  "JUnit 5": "/images/logos/junit.png",
  "Apache Airflow": "/images/logos/airflow.png",

  // Cloud & DevOps
  Docker: "/images/logos/docker.png",
  Kubernetes: "/images/logos/kubernetes.png",
  AWS: "/images/logos/aws.png",
  GCP: "/images/logos/google-cloud.png",
  Git: "/images/logos/git.svg",
  "CI/CD": "/images/logos/ci-cd.png",
  Jira: "/images/logos/jira.png",
  Kafka: "/images/logos/kafka.png",

  // Databases & Practices
  MySQL: "/images/logos/mysql.png",
  MongoDB: "/images/logos/mongodb.png",
  BigQuery: "/images/logos/bigquery.png",
  "RESTful API Design": "/images/logos/api.png",
  "Agile/Scrum": "/images/logos/agile.png",
  "Test-Driven Development": "/images/logos/tdd.png",
  "ETL Pipelines": "/images/logos/etl.png",
};



export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  techStackImgs2,
  navLinks,
   SKILL_TABS,
   SKILL_ICONS,
};