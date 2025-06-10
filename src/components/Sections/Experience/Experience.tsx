import React from 'react'
import { experienceData } from '@data/experience'
import styles from './Experience.module.css'

const Experience: React.FC = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Professional Experience</h2>
          <p className={styles.subtitle}>
            A journey through marketing and technology across Europe and Latin America
          </p>
        </div>

        <div className={styles.timeline}>
          {experienceData.map((exp) => (
            <div key={exp.id} className={styles.timelineItem}>
              <div className={styles.timelineMarker}>
                <div className={styles.markerDot}></div>
                <div className={styles.markerLine}></div>
              </div>
              
              <div className={styles.content}>
                <div className={styles.contentHeader}>
                  <div className={styles.titleInfo}>
                    <h3 className={styles.jobTitle}>{exp.title}</h3>
                    <div className={styles.companyInfo}>
                      <span className={styles.company}>{exp.company}</span>
                      <span className={styles.location}>{exp.location}</span>
                    </div>
                  </div>
                  <div className={styles.period}>{exp.period}</div>
                </div>

                <div className={styles.description}>
                  <ul className={styles.descriptionList}>
                    {exp.description.map((item, descIdx) => (
                      <li key={descIdx} className={styles.descriptionItem}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {exp.technologies && exp.technologies.length > 0 && (
                  <div className={styles.technologies}>
                    <span className={styles.techLabel}>Technologies:</span>
                    <div className={styles.techTags}>
                      {exp.technologies.map((tech, techIdx) => (
                        <span key={techIdx} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {exp.achievements && exp.achievements.length > 0 && (
                  <div className={styles.achievements}>
                    <span className={styles.achievementLabel}>Key Achievements:</span>
                    <ul className={styles.achievementList}>
                      {exp.achievements.map((achievement, achIdx) => (
                        <li key={achIdx} className={styles.achievementItem}>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience