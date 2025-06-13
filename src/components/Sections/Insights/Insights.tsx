import React from 'react'
import { insightsData } from '@data/insights'
import type { Insight } from '../../../types'
import styles from './Insights.module.css'

const Insights: React.FC = () => {
  return (
    <section id="insights" className={styles.insights}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Latest Insights</h2>
          <p className={styles.subtitle}>
            Thoughts on technology, business, and career development
          </p>
        </div>

        <div className={styles.postsGrid}>
          {insightsData.length === 0 ? (
            <div className={styles.emptyState}>
              <p>No insights published yet. Check back soon!</p>
            </div>
          ) : (
            insightsData.map((insight: Insight) => (
              <article key={insight.id} className={styles.postCard}>
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.postTitle}>{insight.title}</h3>
                    <div className={styles.categoryBadge}>
                      {insight.category}
                    </div>
                  </div>

                  <p className={styles.postExcerpt}>
                    {insight.excerpt}
                  </p>

                  <div className={styles.postMeta}>
                    <span className={styles.publishDate}>
                      {new Date(insight.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <span className={styles.readTime}>
                      {insight.readTime} min read
                    </span>
                  </div>

                  <div className={styles.tags}>
                    {insight.tags.slice(0, 3).map((tag: string, index: number) => (
                      <span key={index} className={styles.tag}>
                        #{tag}
                      </span>
                    ))}
                    {insight.tags.length > 3 && (
                      <span className={styles.tag}>
                        +{insight.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  <button className={styles.readMoreButton}>
                    Read Full Article
                  </button>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default Insights