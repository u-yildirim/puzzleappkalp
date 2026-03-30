import React from 'react';
import { Mail, Heart, Lock, Camera, Music, Gift, Star, CheckCircle } from 'lucide-react';

export const memoriesData = [
  {
    id: 1,
    title: "İlk Temas 🤍",
    description: "Beraber ilk el ele tutuştuğumuz o an... Kalbimin nasıl hızla çarptığını, ellerinin sıcaklığını hiç unutmadım.",
    image: "/1.jpeg",
    puzzleType: "envelope",
    icon: <Heart className="w-8 h-8 text-rose-500" />
  },
  {
    id: 2,
    title: "Herkesin İçinde Sadece Sen",
    description: "İlk kez beraber bir arkadaş grubuyla otururken çekindiğimiz fotoğraf. O kalabalığın içinde benim gözüm sadece sendeydi.",
    image: "/2.jpg",
    puzzleType: "math",
    question: "İkimizin bir araya geldiği o mükemmel formül: 1 + 1 = ?",
    answer: "11",
    icon: <Star className="w-8 h-8 text-rose-500" />
  },
  {
    id: 3,
    title: "Gururla Bakış",
    description: "Seni ilk okula bırakışım... Arkandan bakarken hissettiğim o gurur ve içimi kaplayan kocaman sevgi.",
    image: "/3.jpg",
    puzzleType: "password",
    question: "Kalbimin anahtarı olan 5 harfli o sihirli kelime nedir?",
    answer: "Burak",
    icon: <Lock className="w-8 h-8 text-rose-500" />
  },
  {
    id: 4,
    title: "Birlikte Değişmek",
    description: "İlk beraber saç kestirmemiz. Seninle her şeyi birlikte yapmak, hayatın en sıkıcı şeylerini bile eğlenceli kılıyor.",
    image: "/4.jpg",
    puzzleType: "slider",
    question: "Beni ne kadar seviyorsun? 🥰",
    icon: <Camera className="w-8 h-8 text-rose-500" />
  },
  {
    id: 5,
    title: "Saç Maceramız Devam Ediyor",
    description: "Saçlarımızı kestirirkenki o heyecanımız ve yan yana oluşumuz... İyi ki sen!",
    image: "/4_2.jpg",
    puzzleType: "password",
    question: "Sana hayatta en çok yakışan 3 harfli şey nedir?",
    answer: "Sen",
    icon: <Camera className="w-8 h-8 text-rose-500" />
  },
  {
    id: 6,
    title: "Bizim Şarkımız",
    description: "İlk beraber konserimiz. Müzik ne kadar yüksek olursa olsun, ben sadece senin sesini duyuyordum.",
    image: "/5.JPG",
    puzzleType: "quiz",
    question: "Konserdeki en güzel ses sence hangisiydi?",
    options: ["Solistin Sesi", "Gitarın Sesi", "Senin Sesin", "Baterinin Sesi"],
    answer: "Senin Sesin",
    icon: <Music className="w-8 h-8 text-rose-500" />
  },
  {
    id: 7,
    title: "İlk Sürpriz",
    description: "İlk kez iş yerime gönderdiğin o güzel hediye. Beni dünyanın en özel hissettirdiğin o anlardan sadece biri.",
    image: "/6.jpg",
    puzzleType: "hidden-hearts",
    question: "Hediyeni açmak için etrafta uçuşan 3 gizli kalbi bulup tıkla! 💝",
    icon: <Gift className="w-8 h-8 text-rose-500" />
  },
  {
    id: 8,
    title: "En Güzel Yansıma",
    description: "İlk ayna fotoğrafımız. Yan yana ne kadar güzel durduğumuzu, nasıl bir bütün olduğumuzu gördüğüm ilk kare.",
    image: "/7.jpg",
    puzzleType: "catch-button",
    question: "Aynadaki yansımamıza ulaşmak için kaçan butonu yakala!",
    icon: <Camera className="w-8 h-8 text-rose-500" />
  },
  {
    id: 9,
    title: "Tatlı Uğraşlar",
    description: "İlk çekinmeye uğraştığımız fotoğraflarımız. Yamuk yumuk, bulanık ama dünyanın en tatlı, en gerçek kareleri...",
    image: "/8.jpg",
    puzzleType: "type-exact",
    question: "Aşağıdaki cümleyi aynen yazarak kilidi aç: 'Seni çok seviyorum'",
    answer: "Seni çok seviyorum",
    icon: <Heart className="w-8 h-8 text-rose-500" />
  },
  {
    id: 10,
    title: "Her Anımız Bir Rüya",
    description: "Seninle geçirdiğim her saniye, yüzüme kondurduğun her gülücük benim için paha biçilemez.",
    image: "/extra1.jpg",
    puzzleType: "quiz",
    question: "Bu fotoğrafta ne kadar tatlıyız?",
    options: ["Çok", "Aşırı", "Dünyalar Kadar", "Ölçülemez"],
    answer: "Ölçülemez",
    icon: <Star className="w-8 h-8 text-rose-500" />
  },
  {
    id: 11,
    title: "Gülüşünün Güzelliği",
    description: "O güzel gülüşün tüm karanlık günlerimi aydınlatıyor. Lütfen o yüzün hep benimle gülsün.",
    image: "/extra2.jpg",
    puzzleType: "password",
    question: "Seninle olan mutluluğumuzun sınırı nedir?",
    answer: "Sonsuz",
    icon: <Heart className="w-8 h-8 text-rose-500" />
  },
  {
    id: 12,
    title: "İyi Ki Varsın, İyi Ki Biziz",
    description: "Tüm bu anılar buzdağının sadece görünen kısmı. Daha yaşayacağımız o kadar çok anı var ki...",
    image: "/extra3.jpg",
    puzzleType: "envelope",
    icon: <CheckCircle className="w-8 h-8 text-rose-500" />
  }
];
