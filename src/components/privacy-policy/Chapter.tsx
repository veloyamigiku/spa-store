import type React from 'react'

import styles from './Chapter.module.css'

interface ChapterProps {
  title: string
  children: React.ReactNode
}

const Chapter: React.FC<ChapterProps> = ({ title, children }) => {
  return (
    <div className={styles.chapter}>
      <div>{title}</div>
      <hr className={styles.chapter_delim}></hr>
      <div>{children}</div>
    </div>
  )
}

export default Chapter