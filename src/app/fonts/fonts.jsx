import localFont from 'next/font/local';

export const fontEn = localFont({
  src: [
    {
      path: '../../../public/fonts/KhmerOS.ttf', // English font
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-en',
  display: 'swap',
});

export const fontKm = localFont({
  src: [
    {
      path: '../../../public/fonts/KhmerOS_siemreap.ttf', // Khmer font
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-km',
  display: 'swap',
});
