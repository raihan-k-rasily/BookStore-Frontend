import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <GoogleOAuthProvider clientId="313674114621-746grh6blm2fci0h9drtm9s83kamfb4n.apps.googleusercontent.com"><App/></GoogleOAuthProvider>
   
   </BrowserRouter>
  </StrictMode>,
)
