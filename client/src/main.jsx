import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { JwsContextProvider } from './contexts/JwsContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <JwsContextProvider>
        <App />
      </JwsContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
