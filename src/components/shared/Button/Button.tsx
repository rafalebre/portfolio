import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.css'

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'toggle' | 'filter' | 'submit'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  to?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  active?: boolean
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  variant,
  size = 'md',
  children,
  onClick,
  to,
  type = 'button',
  disabled = false,
  active = false,
  className = ''
}) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    active ? styles.active : '',
    disabled ? styles.disabled : '',
    className
  ].filter(Boolean).join(' ')

  // If it's a link button
  if (to && !disabled) {
    return (
      <Link to={to} className={buttonClasses}>
        {children}
      </Link>
    )
  }

  // Regular button
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button