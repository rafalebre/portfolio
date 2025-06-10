import React from 'react'
import styles from './Hero.module.css'

const Hero: React.FC = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              Hi, I'm <span className={styles.highlight}>Rafael</span>
            </h1>
            <h2 className={styles.subtitle}>
              Full-Stack Developer & Marketing Strategist
            </h2>
            <p className={styles.description}>
              Bridging technology and business with 8+ years of marketing experience 
              and modern development skills. Based in Europe, available worldwide.
            </p>
            <div className={styles.ctas}>
              <a href="#contact" className={styles.primaryCta}>
                Get In Touch
              </a>
              <a href="#portfolio" className={styles.secondaryCta}>
                View My Work
              </a>
            </div>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.profileImage}>
              {/* Placeholder for now */}
              <div className={styles.imagePlaceholder}>RF</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero