import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomeFr } from './pages/fr/Home';
import { HomeEn } from './pages/en/Home';
export function App() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/fr" replace />} />
        <Route path="/fr" element={<HomeFr />} />
        <Route path="/en" element={<HomeEn />} />
        <Route path="*" element={<Navigate to="/fr" replace />} />
      </Routes>
    </BrowserRouter>;
}