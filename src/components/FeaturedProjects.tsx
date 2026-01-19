import { useState, useEffect } from 'react'
import './Showcases.css'
import { portfolioConfig } from '../config/portfolio.config'
import { getFeaturedProject } from '../services/github'
import { ProcessedProject, FeaturedProject } from '../types'
import { trackSectionVisit, trackProjectView } from '../services/achievementService'
import { useLanguage } from '../contexts/LanguageContext'

// Convert FeaturedProject config to ProcessedProject format
function createProjectFromConfig(project: FeaturedProject, index: number): ProcessedProject {
  let title = project.title
  let image = project.image
  
  // Generate title from URL if not provided
  if (!title) {
    try {
      const url = new URL(project.demoUrl)
      title = url.hostname
        .replace('.vercel.app', '')
        .replace('.streamlit.app', '')
        .replace('www.', '')
        .split('-')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')
    } catch {
      // Handle non-standard URLs (like Discord invites)
      title = project.demoUrl.split('/').pop() || 'Featured Project'
    }
  }
  
  // Generate image if not provided
  if (!image) {
    try {
      // Use WordPress mshots service for free screenshot previews
      const encodedUrl = encodeURIComponent(project.demoUrl)
      image = `https://s0.wp.com/mshots/v1/${encodedUrl}?w=1200&h=600`
    } catch {
      // Use placeholder for non-standard URLs
      image = 'https://via.placeholder.com/400x200?text=Project'
    }
  }
  
  return {
    id: Date.now() + index, // Generate unique ID
    title: title,
    description: project.description || 'A featured project showcasing modern web development.',
    image: image,
    tech: project.tech || [],
    stars: 0,
    forks: 0,
    language: project.tech?.[0] || 'Web',
    github: '', // No GitHub link
    demo: project.demoUrl,
    isFeatured: true,
    lastUpdated: new Date().toLocaleDateString(),
  }
}

function FeaturedProjects() {
  const [featuredProjects, setFeaturedProjects] = useState<ProcessedProject[]>([])
  const [loading, setLoading] = useState(true)
  const { t } = useLanguage()

  useEffect(() => {
    const loadFeaturedProjects = async () => {
      try {
        setLoading(true);
        const projects: ProcessedProject[] = []
        
        for (const projectConfig of portfolioConfig.featuredProjects.filter(p => p.featured)) {
          if (projectConfig.repo) {
            // Fetch from GitHub if repo is provided
            const githubProject = await getFeaturedProject(portfolioConfig.social.github, projectConfig.repo)
            if (githubProject) {
              // Override demo URL if provided in config
              if (projectConfig.demoUrl) {
                githubProject.demo = projectConfig.demoUrl
              }
              projects.push(githubProject)
            }
          } else {
            // Create project from config (no GitHub repo)
            projects.push(createProjectFromConfig(projectConfig, projects.length))
          }
        }
        
        setFeaturedProjects(projects)
      } catch (error) {
        console.error('Error loading featured projects:', error)
      } finally {
        setLoading(false)
      }
    }

    loadFeaturedProjects()
  }, [])

  // Track section visits with Intersection Observer
  useEffect(() => {
    const projectsSection = document.getElementById('projects')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.target.id === 'projects') {
            trackSectionVisit('projects')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (projectsSection) observer.observe(projectsSection)

    return () => {
      if (projectsSection) observer.unobserve(projectsSection)
    }
  }, [])
  return (
    <section id="projects" className="showcase-card card featured-projects-section">
      <div className="card-header">{t.featuredProjects}</div>
      {loading ? (
        <div className="featured-projects-grid loading">
          <p className="loading-text">{t.loading}</p>
        </div>
      ) : featuredProjects.length > 0 ? (
        <div className="featured-projects-grid">
          {featuredProjects.map(project => (
            <div key={project.id} className="featured-project-card">
              <div className="project-image">
                <img 
                  src={project.image || 'https://via.placeholder.com/400x200?text=Project'} 
                  alt={project.title} 
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    const target = e.target as HTMLImageElement
                    target.src = 'https://via.placeholder.com/400x200?text=' + encodeURIComponent(project.title)
                  }}
                />
                {project.stars > 0 || project.forks > 0 ? (
                  <div className="project-overlay">
                    <div className="project-stats">
                      {project.stars > 0 && (
                        <div className="stat">
                          <span className="stat-icon">⭐</span>
                          <span className="stat-value">{project.stars}</span>
                        </div>
                      )}
                      {project.forks > 0 && (
                        <div className="stat">
                          <span className="stat-icon">🍴</span>
                          <span className="stat-value">{project.forks}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                {project.tech && project.tech.length > 0 && (
                  <div className="project-tech">
                    {project.tech.slice(0, 4).map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                )}
                <div className="project-actions">
                  {project.github && (
                    <a
                      href={project.github}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackProjectView(project.id.toString())}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="project-link primary"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackProjectView(project.id.toString())}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                      </svg>
                      View Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="featured-projects-grid">
          <p className="error-text">Failed to load featured projects</p>
        </div>
      )}
    </section>
  )
}

export default FeaturedProjects
