import { useState } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { Intro } from './components/Intro';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return <Intro onEnter={() => setShowIntro(false)} />;
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <Skills />
          <Projects />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;