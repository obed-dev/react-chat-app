import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './components/ThemeContext.jsx'
import App from './App.jsx'

import './App.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <App />
    </ThemeProvider>
    
  </StrictMode>,
)
