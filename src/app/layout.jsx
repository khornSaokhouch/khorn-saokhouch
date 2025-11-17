// src/app/layout.js (Updated for inline ChatBot and LanguageSwitcher)
import './globals.css';
import CanvasScene from './components/CanvasScene';
import ClientLayout from './components/ClientLayout';
import LanguageSwitcher from './components/LanguageSwitcher';
import ChatBot from './components/ChatBot'; 

export const metadata = {
  title: '3D Interactive Portfolio',
  description: 'A modern, interactive single-page portfolio with 3D background.',
};

export default function RootLayout({ children }) { 
  return (
    <html lang="en">
      <body className="bg-background text-white overflow-x-hidden scroll-smooth selection:bg-accent selection:text-background min-h-screen ">
        {/* 3D Background */}
        <div className="fixed inset-0 -z-10 opacity-70">
          <CanvasScene />
        </div>

        {/* Main content */}
        <ClientLayout>{children}</ClientLayout>

        {/* Bottom-right floating controls: Changed to flex-row and items-center */}
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-4">
          <LanguageSwitcher />
          <ChatBot />
        </div>
      </body>
    </html>
  );
}