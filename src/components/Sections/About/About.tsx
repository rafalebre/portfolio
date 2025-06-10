import React from 'react'
import styles from './About.module.css'

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>About Me</h2>
            <div className={styles.story}>
              <p className={styles.paragraph}>
                My journey began in <strong>marketing and business development</strong>, where I spent 
                8+ years helping companies grow across Brazil and Europe. I discovered my passion 
                for technology while automating marketing processes and analyzing data.
              </p>
              <p className={styles.paragraph}>
                This led me to make a <strong>strategic transition into software development</strong>, 
                combining my business acumen with modern programming skills. Today, I build 
                full-stack applications while maintaining a deep understanding of business needs.
              </p>
              <p className={styles.paragraph}>
                Based in <strong>Europe</strong> with experience across international markets, 
                I bring a unique perspective that bridges technology and business strategy. 
                I'm passionate about creating solutions that not only work technically but 
                also drive real business value.
              </p>
            </div>
            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <span className={styles.number}>8+</span>
                <span className={styles.label}>Years Marketing</span>
              </div>
              <div className={styles.highlight}>
                <span className={styles.number}>2+</span>
                <span className={styles.label}>Years Coding</span>
              </div>
              <div className={styles.highlight}>
                <span className={styles.number}>3</span>
                <span className={styles.label}>Countries</span>
              </div>
            </div>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.imageWrapper}>
              <div className={styles.imagePlaceholder}>
                Professional Photo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About