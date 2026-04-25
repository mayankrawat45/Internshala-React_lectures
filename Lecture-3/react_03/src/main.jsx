import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App, { Sam, Vohra } from './App.jsx'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Sam/> */}
    {/* <Vohra/> */}
    <App/>
  </StrictMode>,
)
