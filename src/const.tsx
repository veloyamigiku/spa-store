import Checkout from './components/checkout/Checkout'
import Home from './components/Home'
import PrivacyPolicy from './components/privacy-policy/PrivacyPolicy'
import TermsOfService from './components/terms-of-service/TermsOfService'
import TransactionsLaw from './components/transactions-law/TransactionsLaw'

export const homeLink = {
  id: 'home',
  name: 'Home',
  path: '/',
  element: <Home />
}

export const privacyPolicyLink = {
  id: 'privacy-policy',
  name: 'Privacy Policy',
  path: '/privacy-policy',
  element: <PrivacyPolicy />
}

export const transactionsLawLink = {
  id: 'transactions-law',
  name: 'Transactions Law',
  path: '/transactions-law',
  element: <TransactionsLaw />
}

export const termsOfServiceLink = {
  id: 'terms-of-service',
  name: 'Terms of Service',
  path: '/terms-of-service',
  element: <TermsOfService />
}

export const checkoutLink = {
  id: 'checkout',
  name: 'Checkout',
  path: '/checkout',
  element: <Checkout />
}

export const allLinks = [
  homeLink,
  privacyPolicyLink,
  transactionsLawLink,
  termsOfServiceLink,
  checkoutLink,
]

export const loginedLinks = [
  checkoutLink,
]
