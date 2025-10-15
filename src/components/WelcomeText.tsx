import { useState, useEffect } from 'react';

export default function WelcomeText() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const translations: string[] = [
    'Welcome',
    'Bienvenido',
    'Bienvenue',
    'Willkommen',
    'Benvenuto',
    '欢迎',
    'ようこそ',
    '환영합니다',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % translations.length);
    }, 10000); // Change every 10 seconds
    return () => clearInterval(interval); // Clean up on unmount
  }, [translations.length]);

  // Get the current translation based on the index
  const currentTranslation = translations[currentIndex];

  return <h1 className='text-5xl text-WhiteChalk text-center'>👋 {currentTranslation}</h1>;
}
