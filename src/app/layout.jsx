import './globals.css';
import CanvasScene from './components/CanvasScene';
import ChatBot from './components/ChatBot';
import WelcomeScreen from './components/WelcomeScreen';

export const metadata = {
  title: '3D Interactive Portfolio',
  description: 'A modern, interactive single-page portfolio with 3D background.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-white overflow-x-hidden scroll-smooth selection:bg-accent selection:text-background min-h-screen">
        
        {/* Welcome Screen */}
        <WelcomeScreen />

        {/* 3D Background */}
        <div className="fixed inset-0 -z-10 opacity-70">
          <CanvasScene />
        </div>

        {/* Main content */}
        {children}

        {/* Bottom-right floating controls */}
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-4">
          <ChatBot />
        </div>
      </body>
    </html>
  );
}
