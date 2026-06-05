import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import styles from './Checkout.module.css'

const Checkout: React.FC = () => {
  
  const {
    getAccessTokenSilently
  } = useAuth0()

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handlePayPayCheckout = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const token = await getAccessTokenSilently()

      const response = await fetch(
        import.meta.env.VITE_PAYPAY_API_URL + '/create_payment_url',
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      )

      if (!response.ok) {
        throw new Error('決済URLの取得に失敗しました。')
      }

      const data = await response.json()
      if (data && data.detail && data.detail.checkout_url) {
        window.location.href = data.detail.checkout_url
      } else {
        throw new Error('決済URLが返されませんでした。')
      }
    } catch (err) {
      console.error('Checkout Error:', err)
      if (err instanceof Error) {
        setError(err.message || '予期せぬエラーが発生しました。')
      } else {
        setError('予期せぬエラーが発生しました。')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.checkout_root}>
      <h3>お支払い手続き</h3>
      {error && <p>{error}</p>}
      <button
        className={styles.checkout_button}
        style={{
          cursor: loading ? 'not-allowed' : 'pointer',
          opacity: loading ? 0.7 : 1,
        }}
        onClick={handlePayPayCheckout}
        disabled={loading}>
        {loading ? 'PayPay画面へ移動中...' : 'PayPayで支払う'}
      </button>
    </div>
  )
}

export default Checkout
