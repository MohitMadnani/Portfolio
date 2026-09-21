export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  image?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  image?: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image?: string;
}

export interface Contact {
  email: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
}

export const portfolioData = {
  personal: {
    name: 'Mohit Madnani',
    title: 'Software Engineer',
    description: 'A dedicated Software Engineer passionate about creating scalable solutions and innovative applications. With expertise in full-stack development, I bring ideas to life through clean code and thoughtful architecture. I thrive on solving complex problems and building products that make a meaningful impact.',
  },
  experience: [
    {
      title: 'Software Engineer',
      company: 'Hyperlink',
      period: 'Oct 2025 – Jul 2026',
      description:
        'Collaborated within a 6-person engineering team to architect, develop, and deploy a production-ready full-stack platform, contributing across system design, implementation, and release. Applied the full Software Development Cycle (SDLC) in an agile team environment, participating in requirement analysis, architectural design, iterative development, testing and production deployment to ensure high-quality, maintainable software delivery.',
    },
  ] as Experience[],
  education: [
    {
      degree: 'BSc (Hons) in Computer Science and Artificial Intelligence',
      institution: 'Queen Mary, University of London',
      period: 'Sept 2024 – Present',
      description: 'Predicted First-Class Honours. Studying computer science fundamentals, artificial intelligence, and software engineering with a focus on practical industry experience.',
    },
    {
      degree: 'A-level Equivalent',
      institution: 'Abu Dhabi Indian School',
      period: 'Apr 2011 – Apr 2024',
      description: 'Completed A-level equivalent qualifications with a strong foundation in mathematics, sciences, and technology.',
    },
  ] as Education[],
  projects: [
    {
      title: 'MusicAI Generator',
      description: 'Full-stack AI-powered music generation application. Built with serverless architecture using Modal for ML inference, Inngest for background job orchestration, and Neon for database. Integrated Polar for payment processing and AWS for cloud infrastructure.',
      tech: ['Python', 'Next.js', 'AWS', 'Polar', 'Modal', 'Inngest', 'Neon'],
      link: 'https://music-generator-mohit-madnanis-projects.vercel.app',
      github: 'https://github.com/MohitMadnani/Music-Generator',
      image: '/projects/musicaigen.png',
    },
    {
      title: 'Inventory App with Hyperlink',
      description: 'Designed and enforced robust database security using Supabase Row Level Security (RLS) policies, and refactored frontend SQL queries into secure RPC functions to enhance scalability, performance, and maintainability. Implemented secure authentication and authorization using NextAuth in Next.js and Supabase, building interactive, type-safe sign-in and onboarding flows with TypeScript for 6 teams and 40–50 active members. Developed scalable backend services using FastAPI and RESTful architecture, enabling efficient API communication, structured data validation, and seamless integration with the Supabase database layer.',
      tech: ['Next.js', 'Supabase', 'Git'],
      link: '#',
      github: 'https://inventory.hyperlinklondon.com',
      image: '/projects/Hyperlinklogo.png',
    },
    {
      title: 'Data Scraping with Python Playwright',
      description: 'Data scraped over 20 team pages and over 700 players from the Premier League with their data based on their past performance. Implemented efficient web scraping solutions using Playwright API and processed data with Pandas.',
      tech: ['Python', 'Playwright', 'Pandas'],
      link: '#',
      github: 'https://github.com/MohitMadnani/DataScraping-with-Python-Playwright',
    },
    {
      title: 'This Website',
      description: 'My personal portfolio website built with modern web technologies. Features a clean, responsive design with dark/light theme support, smooth animations, and optimized performance. Deployed on Vercel for fast global delivery.',
      tech: ['Next.js', 'Vercel'],
      github: 'https://github.com/MohitMadnani/Portfolio',
    },
  ] as Project[],
  techStack: [
    'JavaScript',
    'Java',
    'HTML',
    'CSS',
    'Python',
    'SQL',
    'PostgreSQL',
    'Supabase',
    'TypeScript',
    'React',
    'Next.js',
    'FastAPI',
    'Playwright',
    'Pandas',
    'Claude Code',
    'Cursor',
    'Docker',
    'Git',
    'AWS',
    'Vercel',
    'Modal',
    'Inngest',
    'Neon',
  ],
  contact: {
    email: 'mohitmadnani419@gmail.com',
    linkedin: 'https://www.linkedin.com/in/mohit-madnani-1a1a19322/',
    github: 'https://github.com/MohitMadnani',
  } as Contact,
};

