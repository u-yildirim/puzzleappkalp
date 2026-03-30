import React from 'react';
import { Heart, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CongratsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-red-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white/90 backdrop-blur-sm p-12 rounded-3xl shadow-2xl text-center border border-rose-100">
        <Heart className="w-20 h-20 mx-auto text-rose-500 mb-8 animate-bounce fill-current" />
        <h1 className="text-4xl font-serif text-rose-900 mb-6">Tebrikler Sevgilim! 🎉</h1>
        <p className="text-xl text-rose-700 mb-6 leading-relaxed">
          Tüm kilitleri açtın, tüm soruları bildin ve kalbimin en derinlerine, anılarımızın sonuna ulaştın.
        </p>
        <p className="text-lg text-rose-600 mb-8 italic">
          Sana olan sevgim bu fotoğraflara, bu satırlara sığmayacak kadar büyük.
          Buradaki 12 anı gibi daha binlercesini yaşamak dileğiyle... Seni çok seviyorum!
        </p>
        
        <button
          onClick={() => navigate('/galeri')}
          className="bg-rose-500 hover:bg-rose-600 text-white font-semibold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg mb-8"
        >
          Anı Galerisine Git
        </button>

        <div className="flex justify-center gap-2">
          <Star className="w-6 h-6 text-rose-400" />
          <Star className="w-6 h-6 text-rose-400" />
          <Star className="w-6 h-6 text-rose-400" />
        </div>
      </div>
    </div>
  );
}
