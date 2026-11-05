import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server.js'
import App from './App'
import { getPageMetadata } from './data/seo'

export function render(pathname) {
  return {
    markup: renderToString(
      <StaticRouter location={pathname}>
        <App />
      </StaticRouter>
    ),
    metadata: getPageMetadata(pathname),
  }
}
