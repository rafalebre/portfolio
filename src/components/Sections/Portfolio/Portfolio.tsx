import React, { useState } from 'react'
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

  const renderProjectCard = (project: Project) => (
    <div key={project.id} className={`${styles.projectCard} ${project.isPrivate ? styles.privateCard : ''}`}>
      <div className={styles.imageContainer}>
        <div className={styles.imagePlaceholder}>
          {project.isPrivate ? '🔒 Private Project' : '📱 Project Preview'}
        </div>
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            {!project.isPrivate && project.demoUrl && (
              <button className={styles.actionButton}>
                <span>View Demo</span>
              </button>
            )}
            {!project.isPrivate && project.githubUrl && (
              <button className={styles.actionButton}>
                <span>View Code</span>
              </button>
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

        {project.metrics && project.metrics.length > 0 && (
          <div className={styles.metrics}>
            {project.metrics.map((metric, metricIdx) => (
              <div key={metricIdx} className={styles.metric}>
                <span className={styles.metricValue}>{metric.value}</span>
                <span className={styles.metricLabel}>{metric.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
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
            <button
              key={filter.key}
              className={`${styles.filterButton} ${activeFilter === filter.key ? styles.active : ''}`}
              onClick={() => handleFilterClick(filter.key)}
            >
              {filter.label} ({filter.count})
            </button>
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