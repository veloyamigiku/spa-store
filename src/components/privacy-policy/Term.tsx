import type React from "react"

import styles from './Term.module.css'

interface TermProps {
  children: React.ReactNode
}

const Term: React.FC<TermProps> = ({ children }) => {
  return (
    <div>
      <div className={styles.term_content}>{children}</div>
    </div>
  )
}

export default Term
