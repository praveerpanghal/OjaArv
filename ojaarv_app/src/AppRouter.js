import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Training from './components/Training';
import About from './components/About';
import Contact from './components/Contact';

// Lazy load components
// const Home = lazy(() => import('./components/Home'));
// const Services = lazy(() => import('./components/Services'));
// const Training = lazy(() => import('./components/Training'));
// const About = lazy(() => import('./components/About'));
// const Contact = lazy(() => import('./components/Contact'));

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/training" element={<Training />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
