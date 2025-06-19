import React, { useState } from 'react'
import Card from '@components/shared/Card'
import Button from '@components/shared/Button'
import type { ContactForm } from '../../../types'
import styles from './Contact.module.css'

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address'
      }
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Netlify form submission
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        }).toString()
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setErrors({})
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.subtitle}>
            Ready to discuss your next project? Let's build something amazing together.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <Card variant="info" size="compact" className={styles.infoCard}>
              <div className={styles.infoIcon}>📧</div>
              <h3 className={styles.infoTitle}>Email</h3>
              <p className={styles.infoText}>
                <a 
                  href="mailto:rafaellebre100@gmail.com?subject=Contact from Portfolio&body=Hi Rafael,%0D%0A%0D%0AI'd like to get in touch with you about..."
                  className={styles.emailLink}
                >
                  rafaellebre100@gmail.com
                </a>
              </p>
            </Card>

            <Card variant="info" size="compact" className={styles.infoCard}>
              <div className={styles.infoIcon}>🌍</div>
              <h3 className={styles.infoTitle}>Location</h3>
              <p className={styles.infoText}>Europe (Remote Available)</p>
            </Card>

            <div className={styles.socialLinks}>
              <a 
                href="https://linkedin.com/in/rafael-s-lebre"
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <Button variant="secondary" size="md">
                  LinkedIn
                </Button>
              </a>
              <a 
                href="https://github.com/rafalebre"
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <Button variant="secondary" size="md">
                  GitHub
                </Button>
              </a>
            </div>
          </div>

          <Card variant="info" size="normal" className={styles.contactForm}>
            <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                  placeholder="Your full name"
                />
                {errors.name && <span className={styles.errorText}>{errors.name}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <span className={styles.errorText}>{errors.email}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={`${styles.input} ${errors.subject ? styles.inputError : ''}`}
                  placeholder="What's this about?"
                />
                {errors.subject && <span className={styles.errorText}>{errors.subject}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                  placeholder="Tell me about your project, goals, or how I can help..."
                />
                {errors.message && <span className={styles.errorText}>{errors.message}</span>}
              </div>

              {submitStatus === 'success' && (
                <div className={styles.successMessage}>
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className={styles.errorMessage}>
                  ❌ Failed to send message. Please try again or email me directly.
                </div>
              )}

              <Button 
                type="submit" 
                variant="submit"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact