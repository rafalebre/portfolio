import React, { useState } from 'react'
import Card from '@components/shared/Card'
import Button from '@components/shared/Button'
import { projectsData } from '@data/projects'
import type { Project } from '../../../types'
import styles from './Portfolio.module.css'

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | Project['category']>('all')

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter)

  const filters = [
    { key: 'all' as const, label: 'All Projects', count: projectsData.length },
    { key: 'frontend' as const, label: 'Frontend', count: projectsData.filter(p => p.category === 'frontend').length },
    { key: 'fullstack' as const, label: 'Full-Stack', count: projectsData.filter(p => p.category === 'fullstack').length },
    { key: 'marketing' as const, label: 'Marketing', count: projectsData.filter(p => p.category === 'marketing').length }
  ]

  const handleFilterClick = (filter: 'all' | Project['category']) => {
    setActiveFilter(filter)
  }

  const handleDemoClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleCodeClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const getProjectImage = (project: Project) => {
    const realImages: { [key: string]: string } = {
      'Secret Word': '/images/projects/secret-word.jpg',
      'React IG': '/images/projects/react-ig.jpg',
      'Mini Blog': '/images/projects/mini-blog.jpg',
      'Swap Cycle': '/images/projects/swap-cycle.jpg'
    }

    if (realImages[project.title]) {
      return (
        <img 
          src={realImages[project.title]} 
          alt={project.title}
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'contain',
            backgroundColor: 'var(--color-surface)'
          }}
        />
      )
    }

    return (
      <div className={styles.imagePlaceholder}>
        {project.isPrivate ? '🔒 Private Project' : '📱 Project Preview'}
      </div>
    )
  }

  const renderProjectCard = (project: Project) => (
    <Card 
      key={project.id} 
      variant="project" 
      size="compact" 
      className={`${styles.projectCard} ${project.isPrivate ? styles.privateCard : ''}`}
    >
      <div className={styles.imageContainer}>
        {getProjectImage(project)}
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            {!project.isPrivate && project.demoUrl && (
              <Button 
                variant="primary"
                size="sm"
                onClick={() => handleDemoClick(project.demoUrl!)}
              >
                View Demo
              </Button>
            )}
            {!project.isPrivate && project.githubUrl && (
              <Button 
                variant="secondary"
                size="sm"
                onClick={() => handleCodeClick(project.githubUrl!)}
              >
                View Code
              </Button>
            )}
            {project.isPrivate && (
              <div className={styles.privateNote}>
                Enterprise project - Details under NDA
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <div className={styles.categoryBadge}>
            {project.category}
          </div>
        </div>

        <p className={styles.projectDescription}>
          {project.description}
        </p>

        <div className={styles.technologies}>
          {project.technologies.slice(0, 4).map((tech, techIdx) => (
            <span key={techIdx} className={styles.techTag}>
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className={styles.techTag}>
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>
    </Card>
  )

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Portfolio & Projects</h2>
          <p className={styles.subtitle}>
            A showcase of technical projects and marketing campaigns that drive real results
          </p>
        </div>

        <div className={styles.filters}>
          {filters.map((filter) => (
            <Button
              key={filter.key}
              variant="filter"
              size="md"
              active={activeFilter === filter.key}
              onClick={() => handleFilterClick(filter.key)}
            >
              {filter.label} ({filter.count})
            </Button>
          ))}
        </div>

        <div className={styles.projectsGrid}>
          {filteredProjects.map(renderProjectCard)}
        </div>

        {filteredProjects.length === 0 && (
          <div className={styles.emptyState}>
            <p>No projects found for the selected category.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Portfolio