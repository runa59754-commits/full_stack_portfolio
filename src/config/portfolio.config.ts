import { PortfolioConfig } from '../types'

/**
 * Portfolio Configuration
 *
 * This file contains all your personal information, projects, and settings.
 * Update this file to customize your portfolio.
 */

export const portfolioConfig: PortfolioConfig = {
  // Personal Information
  personal: {
    name: 'Mohammad Asadi',
    title: 'Full Stack | AI Automation | Scraping | Bot Development | Project manager',
    location: 'Padua, Veneto, Italy',
    bio: 'Full-stack developer specializing in .NET and React, passionate about building interactive web experiences with modern technologies. Team lead with 8+ years of experience delivering enterprise solutions.',
    email: 'runa59754@gmail.com',
    phone: '(+63) 968-306-8973',
    birthday: '1996-01-05', // January 5, 1996
    banner: '/profile-background.jpg',
    resumeUrl: '/resume.pdf', // Add your resume PDF to the public folder
    avatar: '/profile-avatar.gif',
  },

  // Social Media Links
  social: {
    github: 'bast-top-dev',
    linkedin: 'https://linkedin.com/in/mohammad-asadi-5bba5b185',
    twitter: undefined,
    website: undefined,
  },

  // Current Work Status
  workStatus: {
    status: 'away', // 'available' | 'employed' | 'away' | 'busy'
    message: 'Not Looking for Work',
  },

  // Featured Projects
  featuredProjects: [
    {
      demoUrl: 'https://lift-metric-pro-weightlifting-scori.vercel.app/',
      featured: true,
      title: 'Lift Metric Pro',
      description: 'Professional weightlifting scoring and tracking application. Track your lifts, monitor progress, and analyze your performance metrics with detailed statistics and visualizations.',
      tech: ['React', 'TypeScript', 'Web App'],
      image: '/projects/lift_metric_pro.png',
    },
    {
      demoUrl: 'https://ecommerce-iphone-react.vercel.app/',
      featured: true,
      title: 'E-Commerce iPhone Store',
      description: 'Modern e-commerce platform for iPhone products built with React. Features shopping cart, product catalog, and seamless checkout experience.',
      tech: ['React', 'E-Commerce', 'Web App'],
      image: '/projects/ecommerce-iphone.png',
    },
    {
      demoUrl: 'https://threejs-3d-room-designer-sand.vercel.app/',
      featured: true,
      title: '3D Room Designer',
      description: 'Interactive 3D room design tool powered by Three.js. Create and visualize room layouts in real-time with immersive 3D rendering.',
      tech: ['Three.js', 'React', '3D Graphics', 'WebGL'],
      image: '/projects/3D_room_designer.png',
    },
    {
      demoUrl: 'https://fepe-site.vercel.app/',
      featured: true,
      title: 'FEPE Site',
      description: 'Professional website showcasing modern web design and development practices. Built with cutting-edge technologies for optimal performance.',
      tech: ['Web Development', 'Modern UI'],
      image: '/projects/Fepe_crypto_exchange.png',
    },
    {
      demoUrl: 'https://spl-token-swap.vercel.app/',
      featured: true,
      title: 'SPL Token Swap',
      description: 'Decentralized token swap platform on Solana blockchain. Swap SPL tokens securely with low fees and fast transaction speeds.',
      tech: ['Solana', 'Blockchain', 'Web3', 'SPL Tokens'],
      image: '/projects/spl_token_swap.png',
    },
    {
      demoUrl: 'https://discord.com/invite/CGBXNrHREP',
      featured: true,
      title: 'Discord Bot',
      description: 'Advanced Discord bot with powerful features and automation capabilities. Built for server management, moderation, and enhanced user experience.',
      tech: ['Discord', 'Bot Development', 'Automation'],
      image: '/projects/discord_bot.png',
    },
    {
      demoUrl: 'https://jsmastery.com/',
      featured: true,
      title: 'JavaScript Mastery',
      description: 'Educational platform for mastering JavaScript and modern web development. Comprehensive courses, tutorials, and resources for developers of all levels.',
      tech: ['Education', 'JavaScript', 'Learning Platform'],
      image: '/projects/JS_mastery.png',
    },
    {
      demoUrl: 'https://educhain-bot.streamlit.app/',
      featured: true,
      title: 'EduChain Bot',
      description: 'Educational blockchain bot built with Streamlit. Interactive tool for learning blockchain concepts, smart contracts, and decentralized applications.',
      tech: ['Streamlit', 'Blockchain', 'Education', 'Python'],
      image: '/projects/eduChain_bot.png',
    },
  ],

  // Achievements & Awards
  achievements: [
    {
      id: 1,
      title: 'Professional Scrum Master™ I',
      description: 'Issued by Scrum.org',
      icon: '🏆',
      logo: '/psm1-logo.png',
      year: 2023,
      unlocked: true,
      rarity: 'epic',
    },
    {
      id: 2,
      title: 'Professional Scrum Facilitation Skills™',
      description: 'Issued by Scrum.org',
      icon: '⭐',
      logo: '/psf-logo.png',
      year: 2024,
      unlocked: true,
      rarity: 'epic',
    },
    {
      id: 3,
      title: 'Outstanding Thesis Award',
      description: 'First Place - System Analysis & Design',
      icon: '🎓',
      year: 2017,
      unlocked: true,
      rarity: 'legendary',
    },
    {
      id: 4,
      title: '8+ Years of Experience',
      description: 'Full-Stack Development',
      icon: '💻',
      year: 2017,
      unlocked: true,
      rarity: 'rare',
    },
    {
      id: 5,
      title: 'Team Leadership',
      description: 'Development Team Lead - Technical',
      icon: '👥',
      year: 2025,
      unlocked: true,
      rarity: 'rare',
    },
    {
      id: 6,
      title: 'Civil Service Professional',
      description: 'Government Certified Professional',
      icon: '📜',
      year: 2017,
      unlocked: true,
      rarity: 'common',
    },
  ],

  // Personal Hobbies & Interests
  hobbies: [
    {
      id: 1,
      title: 'Running',
      description: 'Passionate about long-distance running and pushing physical limits',
      icon: '🏃',
    },
    {
      id: 2,
      title: 'Perfume Collecting',
      description: 'Curating a diverse collection of unique fragrances',
      icon: '🌸',
    },
    {
      id: 3,
      title: 'Casual Gamer',
      description: 'Currently playing Hollow Knight: Silksong -- Digimon Story: Time Stranger is next on my backlog',
      icon: '🎮',
      status: 'Currently Active',
    },
    {
      id: 4,
      title: 'Creative Maker',
      description: 'Creating stuff on a whim - always experimenting with new ideas',
      icon: '✨',
    },
    {
      id: 5,
      title: 'Melbourne Zoo Explorer',
      description: 'Love travelling to Melbourne, Australia and exploring the amazing zoos',
      icon: '🦘',
    },
    {
      id: 6,
      title: 'Whiskey Sour Enthusiast',
      description: 'Appreciating the perfect balance of bourbon, lemon, and sugar',
      icon: '🥃',
    },
    {
      id: 7,
      title: 'Ointment Collector',
      description: 'Katinko, White Flower, and Poi Sian enthusiast',
      icon: '💊',
    },
    {
      id: 8,
      title: 'Adobo Lover',
      description: 'Love all things adobo -- all variants welcome',
      icon: '🍲',
    },
  ],

  // Technical Skills (from resume)
  technicalSkills: {
    'Languages & Frameworks': [
      'C#', '.NET Framework / .NET 8', 'ASP.NET MVC', 'Web Forms', 'Entity Framework',
      'LINQ', 'ADO.NET', 'Python', 'JavaScript (ES6+)', 'TypeScript' , 'Java' , 'Node.js' , 'SQL' , 'Lua' , 'Solana' , 'Web3.js' , 'Three.js' , 'WebGL' , 'PHP' , 'Laravel' 
       ,'Nest.js'],
    'Front-end & UI': [
      'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap 5', 'React', 'Blazor',
      'Three.js', 'React Three Fiber', 'Framer Motion' , 'Next.js' , 'Vue.js' , 'Nuxt.js' 
    ],
    'Database': [
      'MS SQL Server', 'Supabase', 'Firebase'
    ],
    'Tools & Platforms': [
      'Visual Studio', 'VS Code', 'Git', 'Azure DevOps',
      'SQL Server Management Studio', 'IIS', 'Vercel', 'Vite', 'DocFX', 'Selenium'
    ],
    'Practices': [
      'Agile Scrum', 'CI/CD', 'Code Reviews', 'Software Documentation'
    ]
  },

  // Display Settings
  showTestimonials: false, // Set to true if you add testimonials later
  showAllRepos: false, // Set to true to display all GitHub repositories
}

// Helper function to calculate years of experience
export const getYearsOfExperience = (): number => {
  const startYear = 2017
  const currentYear = new Date().getFullYear()
  return currentYear - startYear
}

// Helper function to get work status display
export const getWorkStatusConfig = (status: string) => {
  const statusConfig = {
    available: {
      badge: 'online',
      text: 'Available for Work',
      color: '#a4d007',
    },
    employed: {
      badge: 'busy',
      text: 'Currently Employed',
      color: '#f39c12',
    },
    away: {
      badge: 'away',
      text: 'Away',
      color: '#95a5a6',
    },
    busy: {
      badge: 'busy',
      text: 'Busy',
      color: '#e74c3c',
    },
  }

  return statusConfig[status as keyof typeof statusConfig] || statusConfig.away
}

// Helper function to calculate age
export const getAge = (): number => {
  if (!portfolioConfig.personal.birthday) return 0

  const birthday = new Date(portfolioConfig.personal.birthday)
  const today = new Date()

  let age = today.getFullYear() - birthday.getFullYear()
  const monthDiff = today.getMonth() - birthday.getMonth()

  // Adjust if birthday hasn't occurred yet this year
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
    age--
  }

  return age
}

export default portfolioConfig
