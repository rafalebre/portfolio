import type { Insight } from '../types'

export const insightsData: Insight[] = [
  // Posts will be managed through Netlify CMS
  // This array will be populated when posts are created via /admin
]

// Helper functions
export const getInsightsByCategory = (category: Insight['category']) => 
  insightsData.filter(insight => insight.category === category)

export const getInsightsByTag = (tag: string) => 
  insightsData.filter(insight => insight.tags.includes(tag))

export const getRecentInsights = (limit: number = 5) => 
  insightsData
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit)