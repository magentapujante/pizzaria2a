import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrouwserEouter>
    <App />
    </BrouwserEouter>
  </React.StrictMode>,
)
