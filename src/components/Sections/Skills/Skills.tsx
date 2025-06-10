import React from 'react'
import styles from './Skills.module.css'

const Skills: React.FC = () => {
  const skillsData = {
    frontend: [
      { name: 'React', level: 'advanced', icon: '⚛️' },
      { name: 'TypeScript', level: 'advanced', icon: '📘' },
      { name: 'JavaScript', level: 'expert', icon: '💛' },
      { name: 'HTML/CSS', level: 'expert', icon: '🎨' },
      { name: 'Next.js', level: 'intermediate', icon: '⚡' },
      { name: 'Vite', level: 'advanced', icon: '⚡' }
    ],
    backend: [
      { name: 'Python', level: 'advanced', icon: '🐍' },
      { name: 'Node.js', level: 'intermediate', icon: '💚' },
      { name: 'FastAPI', level: 'advanced', icon: '🚀' },
      { name: 'PostgreSQL', level: 'intermediate', icon: '🐘' },
      { name: 'MongoDB', level: 'intermediate', icon: '🍃' },
      { name: 'REST APIs', level: 'advanced', icon: '🔗' }
    ],
    tools: [
      { name: 'Git', level: 'advanced', icon: '📚' },
      { name: 'Docker', level: 'intermediate', icon: '🐳' },
      { name: 'VS Code', level: 'expert', icon: '💻' },
      { name: 'Figma', level: 'intermediate', icon: '🎨' },
      { name: 'Linux', level: 'intermediate', icon: '🐧' },
      { name: 'Netlify', level: 'advanced', icon: '🌐' }
    ],
    marketing: [
      { name: 'Google Analytics', level: 'expert', icon: '📊' },
      { name: 'SEO', level: 'advanced', icon: '🔍' },
      { name: 'Google Ads', level: 'expert', icon: '📢' },
      { name: 'Meta Ads', level: 'advanced', icon: '📱' },
      { name: 'Email Marketing', level: 'advanced', icon: '📧' },
      { name: 'Data Analysis', level: 'advanced', icon: '📈' }
    ]
  }

  const getLevelColor = (level: string): string => {
    switch (level) {
      case 'expert': return styles.expert
      case 'advanced': return styles.advanced
      case 'intermediate': return styles.intermediate
      default: return styles.beginner
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

        <div className={styles.skillsGrid}>
          <div className={styles.category}>
            <h3 className={styles.categoryTitle}>Frontend Development</h3>
            <div className={styles.skillsList}>
              {skillsData.frontend.map((skill, index) => (
                <div key={index} className={`${styles.skillCard} ${getLevelColor(skill.level)}`}>
                  <span className={styles.icon}>{skill.icon}</span>
                  <span className={styles.name}>{skill.name}</span>
                  <span className={styles.level}>{skill.level}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.category}>
            <h3 className={styles.categoryTitle}>Backend Development</h3>
            <div className={styles.skillsList}>
              {skillsData.backend.map((skill, index) => (
                <div key={index} className={`${styles.skillCard} ${getLevelColor(skill.level)}`}>
                  <span className={styles.icon}>{skill.icon}</span>
                  <span className={styles.name}>{skill.name}</span>
                  <span className={styles.level}>{skill.level}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.category}>
            <h3 className={styles.categoryTitle}>Tools & Platforms</h3>
            <div className={styles.skillsList}>
              {skillsData.tools.map((skill, index) => (
                <div key={index} className={`${styles.skillCard} ${getLevelColor(skill.level)}`}>
                  <span className={styles.icon}>{skill.icon}</span>
                  <span className={styles.name}>{skill.name}</span>
                  <span className={styles.level}>{skill.level}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.category}>
            <h3 className={styles.categoryTitle}>Marketing & Analytics</h3>
            <div className={styles.skillsList}>
              {skillsData.marketing.map((skill, index) => (
                <div key={index} className={`${styles.skillCard} ${getLevelColor(skill.level)}`}>
                  <span className={styles.icon}>{skill.icon}</span>
                  <span className={styles.name}>{skill.name}</span>
                  <span className={styles.level}>{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills