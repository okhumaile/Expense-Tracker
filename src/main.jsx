import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// Import Inter font weights
import '@fontsource/inter/400.css'  // Regular
import '@fontsource/inter/500.css'  // Medium
import '@fontsource/inter/700.css'  // Bold

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
