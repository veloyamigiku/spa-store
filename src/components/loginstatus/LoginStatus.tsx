import { useAuth0 } from '@auth0/auth0-react'
import type React from 'react'

import styles from './LoginStatus.module.css'

const LoginStatus: React.FC = () => {

  const {
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    logout,
    user
  } = useAuth0()

  if (isLoading) {
    return <div>読み込み中...</div>
  }

  return (
    <div className={styles.login_status_root}>
      {!isAuthenticated ? (
        <>
          <p className={styles.not_login_status}>ログインしてください</p>
          <button onClick={() => loginWithRedirect()}>
            （ログイン）
          </button>
        </>
      ) : (
        <>
          <p className={styles.logined_status}>{user?.name}さんがログイン中です</p>
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin }})}>
            （ログアウト）
          </button>
        </>
      )}
    </div>
  )
}

export default LoginStatus
