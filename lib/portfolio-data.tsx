import admin_zen from "../public/impages/projects/admin_zen.png";
import zen_front from "../public/impages/projects/zen_furniture.png";
import aris_investing from "../public/impages/projects/aris_investing.png";
import innov_academy from "../public/impages/projects/innov_academy.png";
import falcon_feeds from "../public/impages/projects/falconfeeds.png";
import nethradhama from "../public/impages/projects/Nethradhama_book_an_apt.png";
import blog_feature from "../public/impages/blogs/placeholder_blog.webp";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandTypescript } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaWordpress } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiReactquery } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { TbBrandRadixUi } from "react-icons/tb";

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
      title: "WebApp Development",
      description:
        "Professional development of mobile applications with React.Js, Next.Js, Node.Js & MongoDB and modern tools.",
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
      name: "Innovkraft Academy",
      text: "Innovkraft Academy is a Bangalore-based digital agency helping businesses grow through SEO, social media, and web development.",
      url: "https://www.innovkraftacademy.com/",
      img: innov_academy,
    },
    {
      name: "Zen Furniture",
      text: "Zen Furniture is a modern furniture brand offering stylish, high-quality pieces designed to bring comfort, functionality, and elegance to contemporary living spaces.",
      url: "https://www.zenfurniture.in",
      img: zen_front,
    },
    {
      name: "Aris Investing",
      text: "Aris Investing is an investment-focused firm helping individuals and businesses grow their wealth through strategic financial planning and smart investment solutions.",
      url: "https://arisinvesting.com",
      img: aris_investing,
    },
    {
      name: "Dashbord Zen",
      text: "Zen Furniture Dashboard is an intuitive admin panel designed to manage products, orders, customers, and sales analytics efficiently for seamless business operations.",
      url: "https://admin.zenfurniture.in/",
      img: admin_zen,
    },
    {
      name: "Nethradhana Book Appointment",
      text: "Nethradhana Book Appointment is a simple online system that allows patients to schedule eye care consultations quickly and conveniently.",
      url: "https://nethradhama.org/appointment/",
      img: nethradhama,
    },
    {
      name: "Falconfeeds",
      text: "FalconFeeds is a dynamic content platform delivering the latest news, insights, and trending stories across various topics in a clear and engaging format.",
      url: "https://falconfeeds.io",
      img: falcon_feeds,
    },
  ],
  clients: [
    { name: "React.js", logo: <RiReactjsLine className="w-[50px] h-[50px]" /> },
    { name: "Next.js", logo: <TbBrandNextjs className="w-[50px] h-[50px]" /> },
    {
      name: "JavaScript",
      logo: <TbBrandJavascript className="w-[50px] h-[50px]" />,
    },
    { name: "CSS/CSS3", logo: <IoLogoCss3 className="w-[50px] h-[50px]" /> },
    {
      name: "TailwindCSS",
      logo: <SiTailwindcss className="w-[50px] h-[50px]" />,
    },
    { name: "Bootstrap", logo: <FaBootstrap className="w-[50px] h-[50px]" /> },
    { name: "Nodejs", logo: <FaNodeJs className="w-[50px] h-[50px]" /> },
    {
      name: "TypeScript",
      logo: <TbBrandTypescript className="w-[50px] h-[50px]" />,
    },
    { name: "Express", logo: <SiExpress className="w-[50px] h-[50px]" /> },
    { name: "MongoDB", logo: <SiMongodb className="w-[50px] h-[50px]" /> },
    { name: "Git", logo: <FaGitAlt className="w-[50px] h-[50px]" /> },
    { name: "GitHub", logo: <FiGithub className="w-[50px] h-[50px]" /> },
    { name: "WordPress", logo: <FaWordpress className="w-[50px] h-[50px]" /> },
    { name: "Jest", logo: <SiJest className="w-[50px] h-[50px]" /> },
    { name: "Shadcnui", logo: <SiShadcnui className="w-[50px] h-[50px]" /> },
    { name: "RadixUi", logo: <TbBrandRadixUi className="w-[50px] h-[50px]" /> },
    { name: "Axios", logo: <SiAxios className="w-[50px] h-[50px]" /> },
    { name: "Postman", logo: <SiPostman className="w-[50px] h-[50px]" /> },
    {
      name: "Reactquery",
      logo: <SiReactquery className="w-[50px] h-[50px]" />,
    },
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
      title: "Full-Stack Developer (Innovkraft.Inc)",
      period: "2023 — Present",
      description:
        "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.",
    },
    {
      title: "Frontend Developer",
      period: "2019 — 2022",
      description:
        "Developed and maintained multiple client projects using modern web technologies. Collaborated with design & backend teams to create seamless user experiences.",
    },
  ],
  skills: [
    { name: "Web Design", level: 60 },
    { name: "Frontend Development", level: 95 },
    { name: "WebApp Development", level: 75 },
    { name: "Database Design", level: 50 },
  ],
};

export const portfolioData = {
  categories: ["all", "web design", "applications", "web development"],
  projects: [
    {
      title: "Financial Services Website",
      category: "web development",
      image: aris_investing,
      description:
        "It is a financial services website that provides information about investment opportunities, helping users explore and manage their financial growth through a professional online platform.",
      tech: ["Next.js", "Node.js", "PostgreSQL"],
      liveUrl: "https://arisinvesting.com/",
      githubUrl: "",
    },
    {
      title: "Book An Appointment App",
      category: "applications",
      image: nethradhama,
      description:
        "It allows patients to quickly schedule eye consultations online by selecting doctors and available time slots through a simple booking system",
      tech: ["React", "Nodejs", "TypeScript"],
      liveUrl: "https://nethradhama.org/appointment",
      githubUrl: "",
    },
    {
      title: "Digital Security Services",
      category: "web development",
      image: falcon_feeds,
      description: "Modern portfolio design for creative professionals",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://falconfeeds.io",
      githubUrl: "",
    },
    {
      title: "Social Media Dashboard",
      category: "web development",
      image: innov_academy,
      description: "Analytics dashboard with data visualization",
      tech: ["React", "D3.js", "Express"],
      liveUrl: "https://www.innovkraftacademy.com/",
      githubUrl: "",
    },
    {
      title: "Zen Admin Dashboard",
      category: "applications",
      image: admin_zen,
      description:
        "It is a dashboard application that helps administrators manage products, orders, and users efficiently through a centralized and user-friendly interface.",
      tech: ["Rectjs, Nextjs", "Node.js", "MongoDB"],
      liveUrl: "https://admin.zenfurniture.in",
      githubUrl: "",
    },
    {
      title: "Zen Furniture Website",
      category: "web design",
      image: zen_front,
      description: "Elegant restaurant website with online ordering",
      tech: ["Next.js", "Sanity CMS", "Stripe"],
      liveUrl: "https://www.zenfurniture.in",
      githubUrl: "",
    },
  ],
};

export const blogData = {
  posts: [
    {
      title: "Building Modern Web Applications with Next.js 15",
      category: "Development",
      // date: "Mar 15, 2024",
      date: "Coming soon...",
      readTime: "8 min",
      image: blog_feature,
      excerpt:
        "Deep dive into Next.js 15 features and App Router enhancements.",
      tags: ["Next.js", "React", "Web Development"],
      slug: "building-modern-web-apps-nextjs-15",
    },
    {
      title: "Microservices Architecture: A Complete Guide",
      category: "Architecture",
      date: "Coming soon...",
      readTime: "12 min",
      image: blog_feature,
      excerpt: "Design scalable microservices with real-world examples.",
      tags: ["Architecture", "Backend", "DevOps"],
      slug: "microservices-architecture-guide",
    },
    {
      title: "The Art of UI/UX: Creating Delightful Experiences",
      category: "Design",
      date: "Coming soon...",
      readTime: "6 min",
      image: blog_feature,
      excerpt:
        "Principles of exceptional UI/UX design for interfaces users love.",
      tags: ["Design", "UI/UX", "Frontend"],
      slug: "art-of-uiux-delightful-experiences",
    },
    {
      title: "TypeScript Best Practices for Large-Scale Applications",
      category: "Development",
      date: "Coming soon...",
      readTime: "10 min",
      image: blog_feature,
      excerpt: "Master TypeScript patterns for maintainable, type-safe code.",
      tags: ["TypeScript", "JavaScript", "Best Practices"],
      slug: "typescript-best-practices",
    },
    {
      title: "Building Real-Time Applications with WebSockets",
      category: "Development",
      date: "Coming soon...",
      readTime: "9 min",
      image: blog_feature,
      excerpt:
        "Implement real-time features using WebSockets and modern frameworks.",
      tags: ["WebSockets", "Real-time", "Backend"],
      slug: "realtime-apps-websockets",
    },
    {
      title: "Mastering CSS Grid and Flexbox Layouts",
      category: "Design",
      date: "Coming soon...",
      readTime: "7 min",
      image: blog_feature,
      excerpt: "Modern CSS layout techniques with practical examples.",
      tags: ["CSS", "Layout", "Frontend"],
      slug: "mastering-css-grid-flexbox",
    },
  ],
};

export const contactData = {
  email: "itzsunilpatra@gmail.com",
  phone: "+91 8660925010",
  location: "Bengaluru, India",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.622981234567!2d77.619700!3d12.934800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144f12345678%3A0xabcdef1234567890!2sSony%20World%20Signal%2C%20Koramangala%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1772106424711!5m2!1sen!2sin",
};
