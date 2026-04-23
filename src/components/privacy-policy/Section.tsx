import type React from 'react'

import styles from './Section.module.css'

interface SectionProps {
  children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ children }) => {

  return (
    <div>
      <div className={styles.section_content}>{children}</div>
    </div>
  )
  
}

export default Section
