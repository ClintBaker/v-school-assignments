import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import UserProvider from './context/UserProvider.jsx'
import IssuesProvider from './context/IssuesProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserProvider>
      <IssuesProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </IssuesProvider>
    </UserProvider>
  </BrowserRouter>
)
