import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Mengimpor file App.jsx yang kita buat tadi
import './index.css';        // Jika Anda menggunakan Tailwind

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

