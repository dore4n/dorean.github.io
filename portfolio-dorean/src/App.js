import React from 'react';
import Header from './components/Header';
import MainIntroduction from './components/MainIntroduction';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div>
      <Header />
      <MainIntroduction />
      <ExperienceSection />
      <EducationSection />
      <Footer />
    </div>
  );
}

export default App;
