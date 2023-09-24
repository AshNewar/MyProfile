import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />

    </Router>
  </React.StrictMode>,
)
