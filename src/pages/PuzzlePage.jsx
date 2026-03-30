import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Mail, Heart, Lock, Unlock, ArrowRight, Camera, Music, Gift, Star, CheckCircle } from 'lucide-react';
import { memoriesData } from '../data';

export default function PuzzlePage({ currentStep, handleNext }) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [sliderValue, setSliderValue] = useState(0);
  const [foundHearts, setFoundHearts] = useState([]);
  const [buttonPos, setButtonPos] = useState({ x: 0, y: 0 });
  const [escapeCount, setEscapeCount] = useState(0);

  useEffect(() => {
    setIsUnlocked(false);
    setInputValue("");
    setErrorMsg("");
    setSliderValue(0);
    setFoundHearts([]);
    setEscapeCount(0);
    setButtonPos({ x: 0, y: 0 });
  }, [currentStep]);

  if (currentStep >= memoriesData.length) {
    return <Navigate to="/tebrikler" replace />;
  }

  const handleCheckAnswer = (expectedAnswer, providedAnswer = inputValue) => {
    if (providedAnswer.trim().toLocaleLowerCase('tr-TR') === expectedAnswer.toLocaleLowerCase('tr-TR')) {
      setIsUnlocked(true);
      setErrorMsg("");
    } else {
      setErrorMsg("Hımm, biraz daha düşün sevgilim! 🥺");
    }
  };

  const handleSliderChange = (e) => {
    const val = e.target.value;
    setSliderValue(val);
    if (val === "100") {
      setIsUnlocked(true);
    }
  };

  const handleHeartClick = (index) => {
    if (!foundHearts.includes(index)) {
      const newHearts = [...foundHearts, index];
      setFoundHearts(newHearts);
      if (newHearts.length === 3) {
        setIsUnlocked(true);
      }
    }
  };

  const handleCatchButtonEnter = () => {
    if (escapeCount < 4) {
      setButtonPos({
        x: Math.random() * 200 - 100,
        y: Math.random() * 100 - 50
      });
      setEscapeCount(prev => prev + 1);
    }
  };

  if (currentStep === -1) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-red-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl text-center border border-rose-100">
          <Heart className="w-16 h-16 mx-auto text-rose-500 mb-6 animate-pulse" />
          <h1 className="text-3xl font-serif text-rose-900 mb-4">Sana Küçük Bir Sürprizim Var</h1>
          <p className="text-rose-700 mb-8 leading-relaxed">
            Bizim hikayemiz o kadar güzel ki, en özel anlarımızı bir araya getirmek istedim.
            Ama bu anılara ulaşmak için birazcık uğraşman gerekecek sevgilim! Hazır mısın?
          </p>
          <button
            onClick={handleNext}
            className="bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Hazırım Sevgilim!
          </button>
        </div>
      </div>
    );
  }

  const currentMemory = memoriesData[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-red-50 py-10 px-4 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <div className="flex justify-between items-center mb-8 px-4">
          <span className="text-rose-600 font-semibold text-sm">Anı {currentStep + 1} / {memoriesData.length}</span>
          <div className="flex gap-1">
            {memoriesData.map((_, idx) => (
              <div key={idx} className={`h-2 w-6 rounded-full ${idx <= currentStep ? 'bg-rose-500' : 'bg-rose-200'}`} />
            ))}
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-rose-100">

          <div className="p-8">
            <div className="flex flex-col items-center justify-center gap-3 mb-6 text-center">
              <div className="bg-rose-100 p-4 rounded-full inline-flex items-center justify-center shadow-inner">
                {isUnlocked ? <Unlock className="w-8 h-8 text-rose-600" /> : currentMemory.icon}
              </div>
              <h2 className="text-3xl font-serif text-rose-900 text-center">{currentMemory.title}</h2>
            </div>

            {!isUnlocked ? (
              <div className="bg-rose-50 rounded-2xl p-8 text-center border-2 border-dashed border-rose-200 min-h-[300px] flex flex-col items-center justify-center transition-all duration-500">
                <p className="text-lg text-rose-800 mb-6 font-medium">{currentMemory.question || "Bu anının kilidini açmalısın!"}</p>

                {currentMemory.puzzleType === 'envelope' && (
                  <button onClick={() => setIsUnlocked(true)} className="group relative flex flex-col items-center justify-center">
                    <div className="relative">
                      <Mail className="w-32 h-32 text-rose-400 group-hover:text-rose-500 transition-colors drop-shadow-md cursor-pointer" />
                      <Heart className="w-8 h-8 text-red-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform" fill="currentColor" />
                    </div>
                    <p className="mt-4 text-rose-600 font-semibold animate-pulse text-center w-full">Açmak için zarfa dokun...</p>
                  </button>
                )}

                {['math', 'password', 'type-exact'].includes(currentMemory.puzzleType) && (
                  <div className="w-full max-w-xs mx-auto">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleCheckAnswer(currentMemory.answer)}
                      placeholder="Cevabın..."
                      className="w-full px-4 py-3 rounded-xl border-2 border-rose-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all text-center text-lg text-rose-800"
                    />
                    <button
                      onClick={() => handleCheckAnswer(currentMemory.answer)}
                      className="mt-4 w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                    >
                      Kilidi Aç
                    </button>
                    {errorMsg && <p className="mt-3 text-red-500 text-sm font-medium">{errorMsg}</p>}
                  </div>
                )}

                {currentMemory.puzzleType === 'slider' && (
                  <div className="w-full max-w-sm mx-auto">
                    <input
                      type="range"
                      min="0" max="100"
                      value={sliderValue}
                      onChange={handleSliderChange}
                      className="w-full h-3 bg-rose-200 rounded-lg appearance-none cursor-pointer accent-rose-500"
                    />
                    <div className="flex justify-between mt-2 text-rose-600 font-medium">
                      <span>%0</span>
                      <span>%{sliderValue}</span>
                    </div>
                  </div>
                )}

                {currentMemory.puzzleType === 'quiz' && (
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    {currentMemory.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleCheckAnswer(currentMemory.answer, opt)}
                        className="bg-white border-2 border-rose-200 hover:border-rose-400 hover:bg-rose-50 text-rose-700 py-3 px-4 rounded-xl font-medium transition-all"
                      >
                        {opt}
                      </button>
                    ))}
                    {errorMsg && <p className="col-span-full mt-2 text-red-500 text-sm font-medium">{errorMsg}</p>}
                  </div>
                )}

                {currentMemory.puzzleType === 'hidden-hearts' && (
                  <div className="relative w-full h-48 bg-white/50 rounded-xl overflow-hidden border border-rose-100 mt-2 flex flex-col items-center">
                    <p className="absolute top-3 left-1/2 transform -translate-x-1/2 text-sm text-rose-500 font-medium bg-rose-50 px-4 py-1 rounded-full shadow-sm z-10 border border-rose-200">
                      Bulunan: {foundHearts.length}/3
                    </p>
                    {[
                      { top: '20%', left: '15%' },
                      { top: '60%', left: '80%' },
                      { top: '80%', left: '40%' }
                    ].map((pos, idx) => (
                      !foundHearts.includes(idx) && (
                        <button
                          key={idx}
                          onClick={() => handleHeartClick(idx)}
                          className="absolute text-rose-400 hover:text-red-500 hover:scale-125 transition-all"
                          style={pos}
                        >
                          <Heart className="w-8 h-8" fill="currentColor" />
                        </button>
                      )
                    ))}
                    {foundHearts.length === 3 && <p className="mt-20 text-green-500 font-semibold">Tüm kalpleri buldun!</p>}
                  </div>
                )}

                {currentMemory.puzzleType === 'catch-button' && (
                  <div className="relative w-full h-48 flex items-center justify-center mt-4">
                    <button
                      onMouseEnter={handleCatchButtonEnter}
                      onClick={() => setIsUnlocked(true)}
                      style={{
                        transform: `translate(${buttonPos.x}px, ${buttonPos.y}px)`,
                        transition: escapeCount < 4 ? 'transform 0.2s ease' : 'none'
                      }}
                      className={`bg-rose-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg ${escapeCount >= 4 ? 'hover:bg-rose-600 bg-green-500' : ''}`}
                    >
                      {escapeCount >= 4 ? "Tamam, yakaladın! Kilidi Aç" : "Beni Yakala!"}
                    </button>
                  </div>
                )}

              </div>
            ) : (
              <div className="animate-in fade-in duration-700 flex flex-col items-center justify-center">
                <div className="relative w-full bg-transparent flex items-center justify-center group mb-6">
                  <img src={currentMemory.image} alt="Anı" className="w-full h-auto max-h-[75vh] object-contain rounded-2xl shadow-lg border-2 border-rose-100 transition-transform duration-500 group-hover:scale-[1.02]" />
                </div>

                <div className="bg-rose-50 p-6 rounded-2xl border border-rose-200 w-full text-center shadow-sm">
                  <p className="text-rose-800 text-xl leading-relaxed italic">
                    "{currentMemory.description}"
                  </p>
                </div>
              </div>
            )}
          </div>

          {isUnlocked && (
            <div className="bg-rose-100/50 p-6 border-t border-rose-100 flex justify-end">
              <button
                onClick={handleNext}
                className="flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-md hover:shadow-lg"
              >
                Sonraki Anı <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
