import { useEffect } from 'react'

export const useSmoothScroll = () => {
  useEffect(() => {
    const handleLinkClick = (e) => {
      const link = e.target.closest('a[href^="#"]')
      
      if (link) {
        const href = link.getAttribute('href')
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)
        
        if (targetElement) {
          e.preventDefault()
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
          window.history.pushState(null, null, href)
        }
      }
    }

    // Use event delegation
    document.addEventListener('click', handleLinkClick)

    return () => {
      document.removeEventListener('click', handleLinkClick)
    }
  }, [])
}
