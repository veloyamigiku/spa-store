import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { loginedLinks } from '../const'
import Login from './login/Login'
import { Link } from 'react-router'

const Home: React.FC = () => {
  const {
    isAuthenticated
  } = useAuth0()

  return (
    <div>
      <h1 className="text-3xl font-bold">メインコンテンツ</h1>
      <p className="mt-4">
        ここにはページの具体的な内容が入ります。
        コンテンツが短くても、Layoutの設定によりフッターは画面の一番下に配置されます。
      </p>
      <div>
        { isAuthenticated ? (
          <div>
            <h2>機能一覧</h2>
            <ul>
              {loginedLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.path}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <Login />
        )}
      </div>
    </div>
  )
}

export default Home