// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import BirthdayPage from '../app/routes/home';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BirthdayPage />
  </React.StrictMode>
);
