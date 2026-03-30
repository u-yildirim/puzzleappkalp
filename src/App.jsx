import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PuzzlePage from './pages/PuzzlePage';
import CongratsPage from './pages/CongratsPage';
import GalleryPage from './pages/GalleryPage';

export default function App() {
  const [currentStep, setCurrentStep] = useState(-1);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('/dilerimki.mp3');
    audioRef.current.loop = true;
  }, []);

  const handleNext = () => {
    if (currentStep === -1 && audioRef.current) {
      audioRef.current.play().catch(e => console.log("Otomatik çalma hatası:", e));
    }
    setCurrentStep(prev => prev + 1);
  };

  return (
    <BrowserRouter>
      {/* 
        Müzik nesnesi tek bir kere root (kök) App componentinde oluşturuldu ve
        bütün sayfalarda yönlendirmeden bağımsız olarak arkaplanda çalmaya devam edecek. 
      */}
      <Routes>
        <Route path="/" element={<PuzzlePage currentStep={currentStep} handleNext={handleNext} />} />
        <Route path="/tebrikler" element={<CongratsPage />} />
        <Route path="/galeri" element={<GalleryPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
