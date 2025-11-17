'use client';
import { useState, useEffect } from 'react';
import WelcomeScreen from './WelcomeScreen';

export default function ClientLayout({ children }) {
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMain(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!showMain && <WelcomeScreen />}
      {showMain && children}
    </>
  );
}
