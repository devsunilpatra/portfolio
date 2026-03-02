import admin_zen from "../public/impages/projects/admin_zen.png";
import zen_front from "../public/impages/projects/zen_furniture.png";
import aris_investing from "../public/impages/projects/aris_investing.png";
import innov_academy from "../public/impages/projects/innov_academy.png";
import falcon_feeds from "../public/impages/projects/falconfeeds.png";
import nethradhama from "../public/impages/projects/Nethradhama_book_an_apt.png";

export const profileData = {
  name: "Sunil Patra",
  title: "Full-Stack Developer",
  avatar: "/portfolio_img.webp",
  email: "itzsunilpatra@gmail.com",
  phone: "+918660925010",
  birthday: "May 12, 1997",
  location: "Bengaluru, India",
  social: {
    github: "https://github.com/devsunilpatra",
    twitter: "https://x.com/SunilPatra6384",
    instagram: "https://www.linkedin.com/in/sunil-patra-3b7625326",
  },
};

export const aboutData = {
  description: [
    "I'm a Full-Stack Developer from Bengaluru, India, specializing in web development and creating innovative digital solutions. I enjoy turning complex problems into simple, beautiful and intuitive applications.",
    "My job is to build your website or application so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I've worked with various technologies including React, Next.js, Node.js, and modern cloud platforms.",
  ],
  services: [
    {
      icon: "Code",
      title: "Frontend Development",
      description:
        "Building modern, responsive web applications with React, Next.js, and TypeScript.",
    },
    {
      icon: "Zap",
      title: "Backend Development",
      description:
        "Creating robust APIs and server-side solutions with Node.js and modern frameworks.",
    },
    {
      icon: "Smartphone",
      title: "Mobile Development",
      description:
        "Professional development of mobile applications with React Native and modern tools.",
    },
    {
      icon: "PenTool",
      title: "UI/UX Design",
      description:
        "Designing intuitive and beautiful user interfaces that enhance user experience.",
    },
  ],
  testimonials: [
    {
      // avatar: "/professional-man.jpg",
      name: "Innovkraft Academy",
      text: "John was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client.",
      url: "https://www.innovkraftacademy.com/",
      img:innov_academy
    },
    {
      // avatar: "/professional-woman-diverse.png",
      name: "Zen Furniture",
      text: "John was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client.",
      url: "https://www.zenfurniture.in",
      img: zen_front
    },
    {
      // avatar: "/professional-man.jpg",
      name: "Aris Investing",
      text: "Outstanding work! John delivered a high-quality product that exceeded our expectations. His attention to detail is remarkable.",
      url: "https://arisinvesting.com",
      img: aris_investing
    },
    {
      // avatar: "/professional-woman-diverse.png",
      name: "Dashbord Zen",
      text: "Professional, creative, and highly skilled. John is the developer you want on your team for any complex project.",
      url: "https://admin.zenfurniture.in/",
      img: admin_zen
    },
    {
      // avatar: "/professional-woman-diverse.png",
      name: "Nethradhana Book Appointment",
      text: "Professional, creative, and highly skilled. John is the developer you want on your team for any complex project.",
      url: "https://nethradhama.org/appointment/",
      img: nethradhama,
    },
    {
      // avatar: "/professional-woman-diverse.png",
      name: "Falconfeeds",
      text: "Professional, creative, and highly skilled. John is the developer you want on your team for any complex project.",
      url: "https://falconfeeds.io",
      img: falcon_feeds,
    },
  ],
  clients: [
    { name: "React.js", logo: "/tech-company-logo.jpg" },
    { name: "Next.js", logo: "/startup-logo.png" },
    { name: "JavaScript", logo: "/design-agency-logo.png" },
    { name: "TypeScript", logo: "/software-company-logo.png" },
    { name: "HTML/HTML5", logo: "/web-agency-logo.jpg" },
    { name: "CSS/CSS3", logo: "/app-development-logo.jpg" },
    { name: "TailwindCSS", logo: "/tech-company-logo.jpg" },
    { name: "BootStarp", logo: "/startup-logo.png" },
    { name: "JavaScript", logo: "/design-agency-logo.png" },
    { name: "TypeScript", logo: "/software-company-logo.png" },
    { name: "Git", logo: "/web-agency-logo.jpg" },
    { name: "GitHub", logo: "/app-development-logo.jpg" },
  ],
};

export const resumeData = {
  education: [
    {
      title: "Parala Maharaja Engineering College",
      period: "B.Tech (2014 - 2018)",
      description:
        "Studied Engineering with a focus on web technologies and software engineering principles.",
    },
    {
      title: "Frontend Development Bootcamp",
      period: "2022 - 2023",
      description:
        "Intensive program covering modern JavaScript frameworks, responsive design, and UX principles.",
    },
  ],
  experience: [
    {
      title: "Full-Stack Developer",
      period: "2020 — Present",
      description:
        "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.",
    },
    {
      title: "Frontend Developer",
      period: "2019 — 2022",
      description:
        "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create seamless user experiences.",
    },
  ],
  skills: [
    { name: "Web Design", level: 60 },
    { name: "Frontend Development", level: 95 },
    { name: "Backend Development", level: 75 },
    { name: "Database Design", level: 50 },
  ],
};

export const portfolioData = {
  categories: ["all", "web design", "applications", "web development"],
  projects: [
    {
      title: "E-Commerce Platform",
      category: "web development",
      image: aris_investing,
      description: "Full-stack e-commerce solution with payment integration",
      tech: ["Next.js", "Node.js", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johndoe/ecommerce",
    },
    {
      title: "Task Management App",
      category: "applications",
      image: nethradhama,
      description: "Collaborative task manager with real-time updates",
      tech: ["React", "Firebase", "TypeScript"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johndoe/taskmanager",
    },
    {
      title: "Portfolio Website",
      category: "web design",
      image: falcon_feeds,
      description: "Modern portfolio design for creative professionals",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johndoe/portfolio",
    },
    {
      title: "Social Media Dashboard",
      category: "web development",
      image: innov_academy,
      description: "Analytics dashboard with data visualization",
      tech: ["React", "D3.js", "Express"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johndoe/dashboard",
    },
    {
      title: "Mobile Banking App",
      category: "applications",
      image: admin_zen,
      description: "Secure mobile banking application",
      tech: ["React Native", "Node.js", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johndoe/banking",
    },
    {
      title: "Restaurant Website",
      category: "web design",
      image: zen_front,
      description: "Elegant restaurant website with online ordering",
      tech: ["Next.js", "Sanity CMS", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johndoe/restaurant",
    },
  ],
};

export const blogData = {
  posts: [
    {
      title: "Building Modern Web Applications with Next.js 15",
      category: "Development",
      date: "Mar 15, 2024",
      readTime: "8 min",
      image: "/web-development-coding.png",
      excerpt:
        "Deep dive into Next.js 15 features and App Router enhancements.",
      tags: ["Next.js", "React", "Web Development"],
      slug: "building-modern-web-apps-nextjs-15",
    },
    {
      title: "Microservices Architecture: A Complete Guide",
      category: "Architecture",
      date: "Mar 8, 2024",
      readTime: "12 min",
      image: "/software-architecture.jpg",
      excerpt: "Design scalable microservices with real-world examples.",
      tags: ["Architecture", "Backend", "DevOps"],
      slug: "microservices-architecture-guide",
    },
    {
      title: "The Art of UI/UX: Creating Delightful Experiences",
      category: "Design",
      date: "Feb 28, 2024",
      readTime: "6 min",
      image: "/ui-ux-design-concept.png",
      excerpt:
        "Principles of exceptional UI/UX design for interfaces users love.",
      tags: ["Design", "UI/UX", "Frontend"],
      slug: "art-of-uiux-delightful-experiences",
    },
    {
      title: "TypeScript Best Practices for Large-Scale Applications",
      category: "Development",
      date: "Feb 20, 2024",
      readTime: "10 min",
      image: "/web-development-coding.png",
      excerpt: "Master TypeScript patterns for maintainable, type-safe code.",
      tags: ["TypeScript", "JavaScript", "Best Practices"],
      slug: "typescript-best-practices",
    },
    {
      title: "Building Real-Time Applications with WebSockets",
      category: "Development",
      date: "Feb 12, 2024",
      readTime: "9 min",
      image: "/software-architecture.jpg",
      excerpt:
        "Implement real-time features using WebSockets and modern frameworks.",
      tags: ["WebSockets", "Real-time", "Backend"],
      slug: "realtime-apps-websockets",
    },
    {
      title: "Mastering CSS Grid and Flexbox Layouts",
      category: "Design",
      date: "Feb 5, 2024",
      readTime: "7 min",
      image: "/ui-ux-design-concept.png",
      excerpt: "Modern CSS layout techniques with practical examples.",
      tags: ["CSS", "Layout", "Frontend"],
      slug: "mastering-css-grid-flexbox",
    },
  ],
};

export const contactData = {
  email: "itzsunilpatra@gmail.com",
  phone: "+91-8660925010",
  location: "Bengaluru, India",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.622981234567!2d77.619700!3d12.934800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144f12345678%3A0xabcdef1234567890!2sSony%20World%20Signal%2C%20Koramangala%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1772106424711!5m2!1sen!2sin",
};
