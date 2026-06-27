import './globals.css';
import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';
import AppInit from './components/AppInit.jsx';

export const metadata = {
  title: 'Anmol H R — Backend & Full Stack Developer',
  description: 'Backend and Full Stack Developer with production experience in .NET, MERN stack, Next.js, and REST APIs. Springer-published researcher. Based in Bengaluru, India.',
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <AppInit />
      </body>
    </html>
  );
}
