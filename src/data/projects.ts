import type { Project } from '../types'

export const projectsData: Project[] = [
  // Programming Projects (Public - Real Projects from CV)
  {
    id: 'project-1',
    title: 'Swap Cycle',
    description: 'Capstone full-stack project for user-to-user bartering, featuring dynamic listings, interactive maps, and currency conversion capabilities.',
    technologies: ['React.js', 'Flask', 'MySQL', 'Interactive Maps', 'Currency Conversion'],
    category: 'fullstack',
    image: '/images/projects/swap-cycle.jpg',
    demoUrl: 'https://swap-cycle-nu.vercel.app',
    githubUrl: 'https://github.com/rafalebre/Swap_Cycle',
    isPrivate: false,
    metrics: [
      { label: 'Full-stack implementation', value: '✓' },
      { label: 'Interactive mapping', value: '✓' },
      { label: 'Multi-currency support', value: '✓' }
    ]
  },
  {
    id: 'project-2',
    title: 'React IG',
    description: 'Full-stack social platform replicating core Instagram features like photo sharing, likes, and comments to demonstrate proficiency in modern web development.',
    technologies: ['React', 'Redux', 'MongoDB', 'Node.js', 'Express'],
    category: 'fullstack',
    image: '/images/projects/react-ig.jpg',
    demoUrl: 'https://react-ig-nu.vercel.app',
    githubUrl: 'https://github.com/rafalebre/React_IG',
    isPrivate: false,
    metrics: [
      { label: 'Complete social platform', value: '✓' },
      { label: 'Real-time interactions', value: '✓' },
      { label: 'Modern React patterns', value: '✓' }
    ]
  },
  {
    id: 'project-3',
    title: 'Mini Blog',
    description: 'Full-featured blogging platform demonstrating CRUD operations and user authentication with React and Firebase integration.',
    technologies: ['React', 'Firebase', 'Authentication', 'Cloud Storage'],
    category: 'fullstack',
    image: '/images/projects/mini-blog.jpg',
    demoUrl: 'https://mini-blog-omega-nine.vercel.app',
    githubUrl: 'https://github.com/rafalebre/MiniBlog',
    isPrivate: false,
    metrics: [
      { label: 'Complete CRUD operations', value: '✓' },
      { label: 'User authentication', value: '✓' },
      { label: 'Cloud storage integration', value: '✓' }
    ]
  },
  {
    id: 'project-4',
    title: 'Secret Word',
    description: 'React-based game for guessing words from hints, showcasing my skills in components, hooks, and UI design.',
    technologies: ['React', 'Hooks', 'CSS', 'JavaScript'],
    category: 'frontend',
    image: '/images/projects/secret-word.jpg',
    demoUrl: 'https://secret-word-en.vercel.app',
    githubUrl: 'https://github.com/rafalebre/Secret_Word_EN',
    isPrivate: false,
    metrics: [
      { label: 'Interactive game logic', value: '✓' },
      { label: 'Component-based architecture', value: '✓' },
      { label: 'Responsive UI design', value: '✓' }
    ]
  },
  {
    id: 'project-5',
    title: 'Personal Portfolio Website',
    description: 'Modern, responsive portfolio website built with React 19 and TypeScript, showcasing professional experience, projects, and technical skills. Features smooth animations, dark mode support, and optimized performance.',
    technologies: ['React 19', 'TypeScript', 'CSS Modules', 'Vite', 'Netlify'],
    category: 'frontend',
    image: '/images/projects/portfolio.jpg',
    githubUrl: 'https://github.com/rafalebre/portfolio',
    isPrivate: false,
    metrics: [
      { label: 'Fully responsive design', value: '✓' },
      { label: 'TypeScript implementation', value: '✓' },
      { label: 'Performance optimized', value: '✓' }
    ]
  },
  // Programming Projects (Private - Blur Strategy)
  {
    id: 'project-6',
    title: 'Kitchen Flow Optimizer',
    description: 'Advanced workflow optimization system for multi-station production environments. Designed to solve synchronization challenges in high-volume operations where multiple workstations must coordinate output timing for optimal efficiency and quality control.',
    technologies: ['React 19', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'WebSockets'],
    category: 'fullstack',
    image: '/images/projects/private-blur.jpg',
    isPrivate: true,
    metrics: [
      { label: 'Core algorithm', value: '85%' },
      { label: 'Frontend interface', value: '70%' },
      { label: 'Status', value: 'In Progress' }
    ]
  },
  {
    id: 'project-7',
    title: 'Travel Experience Platform',
    description: 'Comprehensive travel planning solution addressing market fragmentation in the $800B travel industry. AI-powered platform that matches user preferences with destinations through intelligent algorithms, enabling complete trip booking within a unified ecosystem.',
    technologies: ['React 19', 'Python', 'AI/ML APIs', 'PostgreSQL', 'Payment APIs', 'Travel APIs'],
    category: 'fullstack',
    image: '/images/projects/private-blur.jpg',
    isPrivate: true,
    metrics: [
      { label: 'Target market', value: '$800B' },
      { label: 'User dissatisfaction', value: '70-80%' },
      { label: 'Status', value: 'Planning' }
    ]
  },
  // Marketing Cases (Anonymous)
  {
    id: 'project-8',
    title: 'Music Label Brand Positioning Campaign',
    description: 'Strategic campaign for independent music label competing against major players with limited budget. Developed innovative event marketing strategy combined with SEO optimization to achieve first-page Google ranking.',
    technologies: ['Event Management', 'SEO Strategy', 'Content Marketing', 'Community Engagement'],
    category: 'marketing',
    image: '/images/projects/marketing-case.jpg',
    isPrivate: false,
    metrics: [
      { label: 'Google ranking', value: '1st page' },
      { label: 'Event attendees', value: '5,000+' },
      { label: 'Entry cost', value: 'Free' }
    ]
  },
  {
    id: 'project-9',
    title: 'Crisis Management & Audience Protection Strategy',
    description: 'Digital strategy for media organization facing coordinated negative campaigns affecting organic reach and engagement. Developed defensive approach to protect authentic audience while maintaining content quality.',
    technologies: ['Social Media Analytics', 'Campaign Management', 'Traffic Analysis', 'Audience Segmentation'],
    category: 'marketing',
    image: '/images/projects/marketing-case.jpg',
    isPrivate: false,
    metrics: [
      { label: 'Organic reach', value: 'Restored' },
      { label: 'Audience protection', value: '✓' },
      { label: 'Content quality', value: 'Maintained' }
    ]
  }
]

// Filter functions for easy access
export const getPublicProjects = () => projectsData.filter(p => !p.isPrivate)
export const getPrivateProjects = () => projectsData.filter(p => p.isPrivate)
export const getProjectsByCategory = (category: Project['category']) => 
  projectsData.filter(p => p.category === category)