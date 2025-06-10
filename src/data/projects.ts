import type { Project } from '../types'

export const projectsData: Project[] = [
  // Programming Projects (Public)
  {
    id: 'project-1',
    title: 'Personal Portfolio Website',
    description: 'Modern, responsive portfolio built with React 19, TypeScript, and CSS Modules. Features smooth animations, dark mode support, and optimized performance.',
    technologies: ['React', 'TypeScript', 'CSS Modules', 'Vite'],
    category: 'frontend',
    image: '/images/projects/portfolio.jpg',
    demoUrl: 'https://rafaellebre.dev',
    githubUrl: 'https://github.com/rafalebre/portfolio',
    isPrivate: false,
    metrics: [
      { label: 'Performance Score', value: '95+' },
      { label: 'Load Time', value: '<2s' }
    ]
  },
  {
    id: 'project-2',
    title: 'E-commerce Dashboard',
    description: 'Full-stack dashboard for e-commerce analytics with real-time data visualization, user management, and sales tracking.',
    technologies: ['React', 'Python', 'FastAPI', 'PostgreSQL'],
    category: 'fullstack',
    image: '/images/projects/dashboard.jpg',
    demoUrl: '#',
    githubUrl: 'https://github.com/rafalebre/ecommerce-dashboard',
    isPrivate: false,
    metrics: [
      { label: 'Data Points', value: '10K+' },
      { label: 'Response Time', value: '<100ms' }
    ]
  },
  {
    id: 'project-3',
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, team collaboration features, and advanced filtering.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    category: 'fullstack',
    image: '/images/projects/taskapp.jpg',
    githubUrl: 'https://github.com/rafalebre/task-manager',
    isPrivate: false,
    metrics: [
      { label: 'Active Users', value: '500+' },
      { label: 'Tasks Created', value: '5K+' }
    ]
  },
  // Programming Projects (Private/Enterprise)
  {
    id: 'project-4',
    title: 'Enterprise CRM System',
    description: 'Custom CRM solution for enterprise client with advanced reporting, customer lifecycle management, and integration capabilities.',
    technologies: ['React', 'Python', 'PostgreSQL', 'Docker'],
    category: 'fullstack',
    image: '/images/projects/private-blur.jpg',
    isPrivate: true,
    metrics: [
      { label: 'Revenue Impact', value: '+40%' },
      { label: 'User Efficiency', value: '+60%' }
    ]
  },
  {
    id: 'project-5',
    title: 'Marketing Automation Platform',
    description: 'Internal tool for automating marketing workflows, campaign management, and performance tracking across multiple channels.',
    technologies: ['Vue.js', 'Python', 'Redis', 'API Integration'],
    category: 'fullstack',
    image: '/images/projects/private-blur.jpg',
    isPrivate: true,
    metrics: [
      { label: 'Time Saved', value: '25h/week' },
      { label: 'Campaign ROI', value: '+35%' }
    ]
  },
  // Marketing Cases (Anonymous)
  {
    id: 'project-6',
    title: 'B2B SaaS Lead Generation',
    description: 'Complete digital marketing strategy for B2B SaaS platform including SEO, content marketing, and paid acquisition campaigns.',
    technologies: ['Google Analytics', 'Google Ads', 'HubSpot', 'SEO Tools'],
    category: 'marketing',
    image: '/images/projects/marketing-case.jpg',
    isPrivate: false,
    metrics: [
      { label: 'Lead Increase', value: '+150%' },
      { label: 'Cost Reduction', value: '-35%' },
      { label: 'Conversion Rate', value: '+85%' }
    ]
  },
  {
    id: 'project-7',
    title: 'E-commerce Growth Strategy',
    description: 'Multi-channel marketing approach for e-commerce client focusing on performance marketing, retention, and brand awareness.',
    technologies: ['Meta Ads', 'Google Ads', 'Email Marketing', 'Analytics'],
    category: 'marketing',
    image: '/images/projects/marketing-case.jpg',
    isPrivate: false,
    metrics: [
      { label: 'Revenue Growth', value: '+180%' },
      { label: 'ROAS', value: '4.2x' },
      { label: 'Customer LTV', value: '+65%' }
    ]
  },
  {
    id: 'project-8',
    title: 'Brand Repositioning Campaign',
    description: 'Strategic brand repositioning for established company, including market research, messaging strategy, and omnichannel implementation.',
    technologies: ['Market Research', 'Content Strategy', 'Social Media', 'PR'],
    category: 'marketing',
    image: '/images/projects/marketing-case.jpg',
    isPrivate: false,
    metrics: [
      { label: 'Brand Awareness', value: '+120%' },
      { label: 'Engagement Rate', value: '+95%' },
      { label: 'Market Share', value: '+25%' }
    ]
  }
]

// Filter functions for easy access
export const getPublicProjects = () => projectsData.filter(p => !p.isPrivate)
export const getPrivateProjects = () => projectsData.filter(p => p.isPrivate)
export const getProjectsByCategory = (category: Project['category']) => 
  projectsData.filter(p => p.category === category)