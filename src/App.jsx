import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import { getPageMetadata } from './data/seo'

function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    const metadata = getPageMetadata(location.pathname)
    document.title = metadata.title
    document.querySelector('link[rel="canonical"]').href = metadata.url
    for (const [selector, content] of [
      ['meta[name="description"]', metadata.description],
      ['meta[name="robots"]', metadata.robots],
      ['meta[property="og:title"]', metadata.title],
      ['meta[property="og:description"]', metadata.description],
      ['meta[property="og:url"]', metadata.url],
      ['meta[property="og:image"]', metadata.image],
    ]) {
      document.querySelector(selector).content = content
    }
  }, [location.pathname])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App 