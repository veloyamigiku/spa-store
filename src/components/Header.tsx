import { Link } from 'react-router'
import type React from 'react'

import LoginStatus from './loginstatus/LoginStatus'
import { homeLink } from '../const'
import styles from './Header.module.css'

const Header: React.FC = () => {

  return (
    <header>
      <Link
        className={styles.home_link}
        to={homeLink.path}>
        {homeLink.name}
      </Link>
      <LoginStatus />
    </header>
  )

}

export default Header