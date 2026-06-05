import { BrowserRouter, Route, Routes } from 'react-router'

import Layout from './Layout'
import { allLinks } from './const'


function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {allLinks.map((link) => (
            <Route
              path={link.path}
              element={link.element} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  )
  
}

export default App
