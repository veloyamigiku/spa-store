import React from 'react'

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">メインコンテンツ</h1>
      <p className="mt-4">
        ここにはページの具体的な内容が入ります。
        コンテンツが短くても、Layoutの設定によりフッターは画面の一番下に配置されます。
      </p>
    </div>
  )
}

export default Home