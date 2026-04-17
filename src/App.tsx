import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { LanguageProvider } from './contexts/LanguageContext';

export function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/fr" replace />} />
      <Route path="/fr" element={<LanguageProvider language="fr"><Home /></LanguageProvider>} />
      <Route path="/en" element={<LanguageProvider language="en"><Home /></LanguageProvider>} />
      <Route path="*" element={<Navigate to="/fr" replace />} />
    </Routes>
  </BrowserRouter>;
}
