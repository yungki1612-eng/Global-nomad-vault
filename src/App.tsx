import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import Home from './pages/Home';
import FormFlow from './pages/FormFlow';
import Report from './pages/Report';
import Tracker from './pages/Tracker';
import BlogIndex from './pages/blog/BlogIndex';
import BlogArticle from './pages/blog/BlogArticle';

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
