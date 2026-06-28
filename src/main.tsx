import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import { ThemeProvider } from './context/ThemeContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        {/* HashRouter keeps deep links working on static hosts (e.g. GitHub
            Pages) without server-side rewrite rules. */}
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
