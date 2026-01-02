'use client'

import { useEffect } from 'react'

// Smooth scroll hook
export function useSmoothScroll() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement
      
      if (anchor) {
        e.preventDefault()
        const href = anchor.getAttribute('href')
        if (href) {
          const targetElement = document.querySelector(href)
          if (targetElement) {
            const nav = document.querySelector('.nav')
            const navHeight = nav?.getBoundingClientRect().height || 0
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight
            
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            })
          }
        }
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])
}

// Intersection Observer hook for animations
export function useFadeIn() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement
          element.style.opacity = '1'
          element.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    const animateElements = document.querySelectorAll('.pillar, .solution-item, .industry-item')
    animateElements.forEach(el => {
      const element = el as HTMLElement
      element.style.opacity = '0'
      element.style.transform = 'translateY(20px)'
      element.style.transition = 'opacity 0.4s ease, transform 0.4s ease'
      observer.observe(element)
    })

    return () => {
      animateElements.forEach(el => observer.unobserve(el))
    }
  }, [])
}

