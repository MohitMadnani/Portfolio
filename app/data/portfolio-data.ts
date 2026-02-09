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
      title: 'Software Developer',
      company: 'Hyperlink',
      period: 'Oct 2025 – Present',
      description:
        'Collaborated on database architecture using PostgreSQL, with forward planning for Supabase migration to enhance real-time data sync and developer experience. Authored internal technical documentation and API references to streamline cross-functional development and onboard new engineers. Engineered scalable back-end services using FastAPI and RESTful architecture to support real-time pod telemetry and control systems.',
    },
  ] as Experience[],
  education: [
    {
      degree: 'BSc (Hons) in Computer Science and Artificial Intelligence with a Year in Industry',
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
      title: 'Premier Team (Full-Stack)',
      description: 'Created comprehensive back-end that handles CRUD operations on data from the PostgreSQL database. Designed a responsive front-end layout using React component architecture with specific color schemes and animations. Ensured data scraping over 700+ players from the Premier League using Python Playwright.',
      tech: ['React', 'PostgreSQL', 'Spring Boot', 'Python', 'Playwright', 'Pandas', 'Scikit-learn'],
      link: '#',
      github: 'https://github.com/MohitMadnani/PremTeam',
      image: '/projects/premteam.jpg',
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
    'Python',
    'SQL',
    'React',
    'Next.js',
    'Spring Boot',
    'PostgreSQL',
    'FastAPI',
    'Playwright',
    'Pandas',
    'Scikit-learn',
    'Docker',
    'Git',
    'GitHub',
    'AWS',
    'Vercel',
    'Modal',
    'Inngest',
    'Neon',
    'Figma',
    'VS Code',
  ],
  contact: {
    email: 'mohitmadnani419@gmail.com',
    linkedin: 'https://www.linkedin.com/in/mohit-madnani-1a1a19322/',
    github: 'https://github.com/MohitMadnani',
  } as Contact,
};

