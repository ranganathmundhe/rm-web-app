export const personalInfo = {
  name: "RANGANATH N. MUNDHE",
  title: "FULLSTACK DEVELOPER",
  email: "ranganathmundhe@gmail.com",
  phone: "+91 9922700213",
  address: "Survey No. 108, 3/2B, Flat No 401, 4th Floor, Shubharambh Apartment, Wakad, Pune – 411057",
  nationality: "Indian",
  maritalStatus: "Married",
  languages: ["English", "Hindi", "Marathi"],
  objective: "Full Stack Developer with 5+ years of experience architecting and shipping production-grade web applications across the JavaScript ecosystem. I build end-to-end solutions — from designing system architecture and database schemas to crafting pixel-perfect UIs. Passionate about clean code, scalable systems, and leveraging cloud-native services to solve real business problems.",
  tagline: "I architect, I build, I ship.",
  github: "https://github.com/ranganathmundhe",
  linkedin: "https://linkedin.com/in/ranganathmundhe",
};

export const skills = {
  "Frontend": [
    { name: "React JS", level: 90 },
    { name: "Next JS", level: 85 },
    { name: "Vue JS", level: 80 },
    { name: "Nuxt JS", level: 75 },
    { name: "Remix JS", level: 70 },
    { name: "TypeScript", level: 85 },
    { name: "JavaScript", level: 95 },
  ],
  "Backend": [
    { name: "Node JS", level: 90 },
    { name: "Express", level: 88 },
    { name: "Prisma ORM", level: 85 },
    { name: "PostgreSQL", level: 85 },
    { name: "MongoDB", level: 85 },
    { name: "MySQL", level: 80 },
  ],
  "Styling": [
    { name: "Tailwind CSS", level: 92 },
    { name: "SASS/SCSS", level: 85 },
    { name: "Bootstrap 5", level: 88 },
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 92 },
  ],
  "AWS & Cloud": [
    { name: "EC2", level: 82 },
    { name: "ECS", level: 78 },
    { name: "Lambda", level: 80 },
    { name: "S3", level: 85 },
    { name: "RDS", level: 75 },
    { name: "SQS", level: 80 },
    { name: "SES", level: 78 },
    { name: "Step Functions", level: 75 },
    { name: "CloudWatch", level: 78 },
    { name: "Parameter Store", level: 80 },
    { name: "CodePipeline", level: 75 },
    { name: "Bedrock", level: 72 },
  ],
  "DevOps & Tools": [
    { name: "Git", level: 88 },
    { name: "CI/CD", level: 80 },
    { name: "Docker", level: 75 },
  ],
};

export const experiences = [
  {
    company: "DEVNCO TECHNOLOGIES",
    designation: "Software Developer",
    duration: "Mar 2023 – Present",
    highlights: [
      "Sole architect of the IDP (Intelligent Document Processing) platform — designed system architecture, database schema (PostgreSQL + Prisma), and built full-stack from scratch using React, Tailwind CSS, and Node.js",
      "Built document template training pipelines and document processing pipelines leveraging AWS Bedrock for AI-powered extraction",
      "Engineered dynamic e-form generation system supporting creation from prompts, uploaded files, or from scratch — with private/public sharing and form data collection",
      "Implemented dynamic dashboard creation per user with role-based access permissions at both user and resource levels",
      "Designed scalable microservices architecture on AWS using Lambda, Step Functions, SQS, and ECS for event-driven document processing workflows",
      "Configured CloudWatch monitoring, RDS for relational data, S3 for document storage, and Parameter Store for secure config management",
      "Set up CodePipeline for automated CI/CD deployments across environments",
    ],
    description: "Leading architecture and full-stack development of enterprise AI-powered document processing and form management platforms. Owning the entire technical stack from database design to cloud infrastructure.",
  },
  {
    company: "SKYLAB INFOTECH",
    designation: "Software Developer",
    duration: "Jan 2021 – Feb 2023",
    highlights: [
      "Developed and maintained multiple production web applications using React, Next.js, Node.js, and various databases",
      "Built RESTful APIs and integrated third-party services including payment gateways and notification systems",
      "Implemented real-time features using WebSockets and optimized application performance across the stack",
      "Collaborated with cross-functional teams in agile sprints to deliver high-quality products on schedule",
    ],
    description: "Developed and maintained multiple web applications across diverse projects including e-commerce, survey platforms, and B2B marketplaces using the MERN stack and Next.js.",
  },
];

export const projects = [
  {
    title: "IDP - Intelligent Document Processing",
    role: "Sole Architect & Full Stack Developer",
    duration: "2024 – Present",
    technologies: ["React", "Tailwind CSS", "Node.js", "Prisma", "PostgreSQL", "AWS Bedrock", "Lambda", "Step Functions", "S3", "SQS"],
    description: "End-to-end AI-powered document processing platform. Architected the entire system from scratch — database schema, backend APIs, processing pipelines, and frontend UI. Built document template training pipelines and extraction workflows using AWS Bedrock. Processes unstructured documents into structured data at scale.",
    highlights: ["AI/ML Pipelines", "AWS Bedrock", "System Architecture", "Prisma ORM", "Event-Driven"],
    featured: true,
  },
  {
    title: "Dynamic E-Form Platform",
    role: "Full Stack Developer",
    duration: "2024 – Present",
    technologies: ["React", "Tailwind CSS", "Node.js", "PostgreSQL", "AWS SES", "AWS S3"],
    description: "Dynamic form creation system supporting generation from AI prompts, uploaded files, or manual building. Forms can be shared privately or publicly with full data collection, conditional logic, and multi-step workflows. Built dynamic dashboards per user with role-based access control at user and resource levels.",
    highlights: ["AI Form Generation", "Role-Based Access", "Dynamic Dashboards", "Data Collection"],
    featured: true,
  },
  {
    title: "Form Management Web App",
    role: "Full Stack Developer",
    duration: "Jun 2024 – Present",
    technologies: ["NodeJS", "ReactJS", "MongoDB"],
    description: "A dynamic form creation platform featuring SSO authentication, CRUD capabilities, chat-based form deployment, Excel/REST API connectors, conditional logic, multi-step forms, real-time collaboration with role-based access control, and intuitive dashboards.",
    highlights: ["SSO Authentication", "Real-time Collaboration", "Role-Based Access", "Dynamic Forms"],
    featured: false,
  },
  {
    title: "Document Management Web App",
    role: "Full Stack Developer",
    duration: "Aug 2023 – May 2024",
    technologies: ["NodeJS", "ReactJS", "Sequelize"],
    description: "A centralized document management system with robust sharing functionalities and versatile access controls. Supports bulk uploading, customizable permissions including editing, deleting, viewing, locking, unlocking, and sharing documents.",
    highlights: ["Bulk Upload", "Access Controls", "Document Sharing", "Metadata Management"],
    featured: false,
  },
  {
    title: "Ecom and Ticketing SSP",
    role: "Full Stack Developer",
    duration: "Apr 2023 – Sep 2023",
    technologies: ["NodeJS", "NextJS", "MongoDB", "Zoura"],
    description: "An e-commerce platform for metro tickets, product vouchers, and customized packages. Supports one-time purchases and subscription plans with purchase history tracking, bill viewing, and voucher management.",
    highlights: ["Subscription Plans", "Payment Integration", "Voucher System", "Zoura Integration"],
    featured: false,
  },
  {
    title: "Opinion Bureau",
    role: "Backend Developer",
    duration: "Jan 2022 – Feb 2023",
    technologies: ["NodeJS", "Express", "MySQL"],
    description: "An online survey and polling platform by Internet Research Bureau Pvt. Ltd. Empowers consumers to voice opinions through surveys, earn rewards, and provides companies with authentic market research data.",
    highlights: ["Survey Platform", "Reward System", "Market Research", "Data Analytics"],
    featured: false,
  },
  {
    title: "Metal Vepar",
    role: "Backend Developer",
    duration: "Mar 2021 – Dec 2021",
    technologies: ["NodeJS", "Express", "Sequelize"],
    description: "A digital platform connecting metal manufacturers and traders across India. Focuses on mild steel, stainless steel, aluminum, brass, copper, and other metals with product information and market trends.",
    highlights: ["B2B Platform", "Product Catalog", "Market Trends", "Pan-India Reach"],
    featured: false,
  },
];

export const education = [
  {
    degree: "B.E. Mechanical Engineering",
    institution: "Pune University",
    year: "May 2017",
  },
  {
    degree: "Diploma in Mechanical Engineering",
    institution: "Pune University",
    year: "May 2013",
  },
  {
    degree: "HSC - Science",
    institution: "Maharashtra State Board",
    year: "March 2010",
  },
  {
    degree: "SSC",
    institution: "Maharashtra State Board",
    year: "March 2008",
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
