import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import Home from './pages/Home';
import FormFlow from './pages/FormFlow';
import Report from './pages/Report';
import Tracker from './pages/Tracker';
import BlogIndex from './pages/blog/BlogIndex';
import BlogArticle from './pages/blog/BlogArticle';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CountryCompare from './pages/CountryCompare';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="form" element={<FormFlow />} />
          <Route path="report" element={<Report />} />
          <Route path="tracker" element={<Tracker />} />
          <Route path="blog" element={<BlogIndex />} />
          <Route path="blog/:id" element={<BlogArticle />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsOfService />} />
          <Route path="compare" element={<CountryCompare />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
