import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import Events from './pages/Events'
import History from './pages/History'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="produits" element={<Products />} />
        <Route path="evenements" element={<Events />} />
        <Route path="histoire" element={<History />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App 