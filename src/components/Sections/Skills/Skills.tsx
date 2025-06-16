import React, { useState } from 'react'
import Card from '@components/shared/Card'
import Button from '@components/shared/Button'
import styles from './Skills.module.css'

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'programming' | 'marketing'>('programming')

  const skillsData = {
    frontend: [
      { name: 'React', level: 'advanced', icon: '⚛️' },
      { name: 'TypeScript', level: 'advanced', icon: '📘' },
      { name: 'JavaScript', level: 'advanced', icon: '💛' },
      { name: 'HTML/CSS', level: 'advanced', icon: '🎨' },
      { name: 'Vite', level: 'advanced', icon: '⚡' }
    ],
    backend: [
      { name: 'Python', level: 'advanced', icon: '🐍' },
      { name: 'Node.js', level: 'intermediate', icon: '💚' },
      { name: 'FastAPI', level: 'intermediate', icon: '🚀' },
      { name: 'PostgreSQL', level: 'intermediate', icon: '🐘' },
      { name: 'REST APIs', level: 'intermediate', icon: '🔗' }
    ],
    tools: [
      { name: 'Git', level: 'advanced', icon: '📚' },
      { name: 'VS Code', level: 'advanced', icon: '💻' },
      { name: 'WordPress', level: 'basic', icon: '📝' },
      { name: 'Canva', level: 'basic', icon: '🎨' },
      { name: 'Netlify', level: 'basic', icon: '🌐' }
    ],
    marketing: [
      { name: 'Google Analytics', level: 'advanced', icon: '📊' },
      { name: 'SEO', level: 'advanced', icon: '🔍' },
      { name: 'Google Ads', level: 'advanced', icon: '📢' },
      { name: 'Meta Ads', level: 'intermediate', icon: '📱' },
      { name: 'Email Marketing', level: 'intermediate', icon: '📧' },
      { name: 'Data Analysis', level: 'advanced', icon: '📈' }
    ]
  }

  const getLevelColor = (level: string): string => {
    switch (level) {
      case 'advanced': return styles.advanced
      case 'intermediate': return styles.intermediate
      case 'basic': return styles.basic
      default: return styles.basic
    }
  }

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Skills & Technologies</h2>
          <p className={styles.subtitle}>
            A combination of technical expertise and marketing knowledge
          </p>
        </div>

        <div className={styles.toggleContainer}>
          <Button
            variant="toggle"
            size="lg"
            active={activeCategory === 'programming'}
            onClick={() => setActiveCategory('programming')}
            className={styles.toggleButton}
          >
            Programming Skills
          </Button>
          <Button
            variant="toggle"
            size="lg"
            active={activeCategory === 'marketing'}
            onClick={() => setActiveCategory('marketing')}
            className={styles.toggleButton}
          >
            Marketing Skills
          </Button>
        </div>

        <div className={styles.skillsContainer}>
          {activeCategory === 'programming' ? (
            <>
              <div className={styles.category}>
                <h3 className={styles.categoryTitle}>Frontend Development</h3>
                <div className={styles.skillsList}>
                  {skillsData.frontend.map((skill) => (
                    <Card 
                      key={skill.name}
                      variant="skill" 
                      size="compact" 
                      className={`${styles.skillCard} ${getLevelColor(skill.level)}`}
                    >
                      <span className={styles.icon}>{skill.icon}</span>
                      <span className={styles.name}>{skill.name}</span>
                      <span className={styles.level}>{skill.level}</span>
                    </Card>
                  ))}
                </div>
              </div>

              <div className={styles.category}>
                <h3 className={styles.categoryTitle}>Backend Development</h3>
                <div className={styles.skillsList}>
                  {skillsData.backend.map((skill) => (
                    <Card 
                      key={skill.name}
                      variant="skill" 
                      size="compact" 
                      className={`${styles.skillCard} ${getLevelColor(skill.level)}`}
                    >
                      <span className={styles.icon}>{skill.icon}</span>
                      <span className={styles.name}>{skill.name}</span>
                      <span className={styles.level}>{skill.level}</span>
                    </Card>
                  ))}
                </div>
              </div>

              <div className={styles.category}>
                <h3 className={styles.categoryTitle}>Tools & Platforms</h3>
                <div className={styles.skillsList}>
                  {skillsData.tools.map((skill) => (
                    <Card 
                      key={skill.name}
                      variant="skill" 
                      size="compact" 
                      className={`${styles.skillCard} ${getLevelColor(skill.level)}`}
                    >
                      <span className={styles.icon}>{skill.icon}</span>
                      <span className={styles.name}>{skill.name}</span>
                      <span className={styles.level}>{skill.level}</span>
                    </Card>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className={styles.category}>
              <h3 className={styles.categoryTitle}>Marketing & Analytics</h3>
              <div className={styles.skillsList}>
                {skillsData.marketing.map((skill) => (
                  <Card 
                    key={skill.name}
                    variant="skill" 
                    size="compact" 
                    className={`${styles.skillCard} ${getLevelColor(skill.level)}`}
                  >
                    <span className={styles.icon}>{skill.icon}</span>
                    <span className={styles.name}>{skill.name}</span>
                    <span className={styles.level}>{skill.level}</span>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Skills