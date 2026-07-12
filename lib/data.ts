export interface Project {
  id: string;
  name: string;
  tagline: string;
  stack: string[];
  points: string[];
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  org: string;
  period: string;
  location: string;
  points: string[];
}

export interface SkillGroup {
  id: string;
  label: string;
  items: string[];
}

export const profile = {
  name: "Saad Gul Channa",
  title: "Full-Stack Web Developer",
  summary:
    "Full-stack developer specializing in React, Next.js, Node.js, and AI-integrated engineering tools. I architect developer platforms, VS Code extensions, and secure full-stack systems that ground LLM output in real workspace context.",
  location: "Karachi, Pakistan",
  email: "saadchanna786110@gmail.com",
  phone: "+92 327 8249866",
  github: "https://github.com/saadchanna-09",
  linkedin: "https://www.linkedin.com/in/saad-gul-channa-2616572a5",
};

export const projects: Project[] = [
  {
    id: "vibeshield",
    name: "VibeShield",
    tagline: "AI Security Auditing Platform",
    stack: ["TypeScript", "React", "Express", "MongoDB", "Gemini API", "VS Code Extension API"],
    featured: true,
    points: [
      "Architected a full-stack AI security auditing platform spanning a VS Code extension, REST API backend, and React analytics dashboard — detecting OWASP/CWE-classified vulnerabilities with automated, line-precise remediation.",
      "Engineered a TypeScript Compiler API–based AST parser to extract live workspace context (types, imports, schemas), grounding AI-generated fixes and eliminating hallucinated variable and schema changes.",
      "Designed a secure API gateway enforcing JWT authentication, rate limiting, Helmet security headers, and multi-layer secret redaction — credentials never reach the client or a third-party LLM.",
      "Implemented strict JSON-schema-validated structured output from Google's Gemini API for consistent, machine-parseable vulnerability reports.",
      "Deployed a serverless production architecture on Vercel with MongoDB Atlas, enabling independent scaling of the API and the dashboard.",
    ],
  },
  {
    id: "vizi-audit-ai",
    name: "Vizi Audit AI",
    tagline: "AI-Powered Frontend Auditing",
    stack: ["React", "JavaScript", "Node.js", "Gemini API", "Git"],
    points: [
      "Developed an AI-powered VS Code extension and web platform that automatically detects and remediates UI/UX and layout errors in frontend codebases.",
      "Integrated Google's Gemini LLM API to analyze source code and generate automated, context-aware design suggestions for complex responsive layouts.",
      "Engineered a responsive, real-time visualization interface for design audits, deployed via Vercel to streamline developer workflow.",
    ],
  },
  {
    id: "mini-fashion",
    name: "Mini Fashion",
    tagline: "E-Commerce Platform",
    stack: ["HTML", "CSS", "JavaScript", "ASP.NET Web Forms", "SQL Server"],
    points: [
      "Engineered a scalable e-commerce web application with a fully responsive, user-centric storefront and a secure administrative panel.",
      "Developed a secure C# ASP.NET backend to manage RESTful API routing, business logic, and state management — reducing client-server data latency.",
      "Optimized database operations within SQL Server for efficient data retrieval and inventory management.",
    ],
  },
  {
    id: "ai-event-management",
    name: "AI Event Management System",
    tagline: "Smart Event Planning Platform",
    stack: ["React.js", "Node.js", "AI APIs"],
    points: [
      "Built a smart event management platform enhanced with AI features for planning, scheduling, and richer attendee interaction.",
      "Designed a responsive React interface for organizers to configure events and track engagement in real time.",
      "Integrated AI APIs to surface scheduling suggestions and reduce manual coordination overhead.",
    ],
  },
  {
    id: "zeus-menu",
    name: "Zeus Restaurant Menu",
    tagline: "Digital Restaurant Menu",
    stack: ["HTML", "CSS", "JavaScript"],
    points: [
      "Designed an elegant digital restaurant menu with responsive layouts and categorized food items.",
      "Optimized load performance and navigation for a smooth, modern browsing experience across devices.",
    ],
  },
];

export interface JourneyStage {
  id: string;
  stage: string;
  title: string;
  description: string;
  current?: boolean;
}

export const journey: JourneyStage[] = [
  {
    id: "stage-01",
    stage: "Stage 01",
    title: "Started Web Development",
    description:
      "Wrote the first lines of HTML and CSS, and got hooked on turning ideas into something visible in the browser.",
  },
  {
    id: "stage-02",
    stage: "Stage 02",
    title: "Learned Frontend Development",
    description:
      "Went deeper into JavaScript, React, and Tailwind CSS — building interfaces that feel as good as they look.",
  },
  {
    id: "stage-03",
    stage: "Stage 03",
    title: "Built Full-Stack Projects",
    description:
      "Connected the frontend to real backends with Node.js and ASP.NET, shipping complete products like Mini Fashion and Zeus Menu.",
  },
  {
    id: "stage-04",
    stage: "Stage 04",
    title: "Started AI Development",
    description:
      "Began integrating AI APIs into web applications, exploring how intelligent systems can make software genuinely smarter.",
  },
  {
    id: "stage-05",
    stage: "Now",
    title: "Building VibeShield & Vizi Audit AI",
    description:
      "Architecting AI-powered developer tools — a security auditing platform and a frontend audit assistant — grounded in real workspace context.",
    current: true,
  },
];

export const experience: ExperienceItem[] = [
  {
    id: "al-khidmat",
    role: "Web Developer (Intern)",
    org: "Al-Khidmat Foundation",
    period: "Jul 2026 — Present",
    location: "Karachi",
    points: [
      "Support digital transformation for social welfare platforms through frontend optimization and bug fixing.",
      "Develop features to streamline internal management processes for the foundation's operations team.",
      "Collaborate with a distributed team of developers in a hybrid work environment.",
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "C#"],
  },
  {
    id: "frameworks",
    label: "Frameworks & Libraries",
    items: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "ASP.NET"],
  },
  {
    id: "tools",
    label: "Developer Tools",
    items: ["Git", "VS Code", "VS Code Extension API", "SQL Server", "MongoDB", "Vercel", "Supabase"],
  },
  {
    id: "concepts",
    label: "Concepts",
    items: ["Full-Stack Development", "AI Integration", "RESTful APIs", "UI/UX Design", "Responsive Web Design"],
  },
];
