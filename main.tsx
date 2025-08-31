import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { generatePDFReport, generateCSVReport } from './utils/reportGenerator';

// Make report functions globally available
declare global {
  interface Window {
    downloadReport: (results: any) => void;
    downloadCSVReport: (results: any) => void;
  }
}

window.downloadReport = generatePDFReport;
window.downloadCSVReport = generateCSVReport;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
