import React from 'react'
import styles from './Card.module.css'

interface CardProps {
  variant: 'skill' | 'experience' | 'project' | 'info' | 'metric'
  size?: 'compact' | 'normal' | 'large'
  children: React.ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

const Card: React.FC<CardProps> = ({
  variant,
  size = 'normal',
  children,
  className = '',
  hover = true,
  onClick
}) => {
  const cardClasses = [
    styles.card,
    styles[variant],
    styles[size],
    hover ? styles.hover : '',
    onClick ? styles.clickable : '',
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={cardClasses} onClick={onClick}>
      {children}
    </div>
  )
}

export default Card