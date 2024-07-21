import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import Menu from './page/Menu';


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// The root element of your HTML file
const rootElement = document.getElementById('root');

// Create the root element
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Menu />} />
        <Route path="/app" element={<App />} />
        {/* <Route path="/loading" element={<Loading />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>
);