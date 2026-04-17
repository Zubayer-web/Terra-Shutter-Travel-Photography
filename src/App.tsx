import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { ReactNode } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CustomCursor from './components/shared/CustomCursor';
import PageTransition from './components/shared/PageTransition';

// Pages - I'll import these directly from files once created
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Journal from './pages/Journal';
import Post from './pages/Post';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Prints from './pages/Prints';
import NotFound from './pages/NotFound';
import Home2 from './pages/Home2';
import Home3 from './pages/Home3';
import Gallery2 from './pages/Gallery2';
import Gallery3 from './pages/Gallery3';

// Simple wrapper to ensure we always have the common layout
function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen selection:bg-sage-mist selection:text-glacier-white">
      <CustomCursor />
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home-2" element={<Home2 />} />
            <Route path="/home-3" element={<Home3 />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery-2" element={<Gallery2 />} />
            <Route path="/gallery-3" element={<Gallery3 />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/journal/:id" element={<Post />} />
            <Route path="/expedition/:id" element={<Post />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/prints" element={<Prints />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </Layout>
    </Router>
  );
}
