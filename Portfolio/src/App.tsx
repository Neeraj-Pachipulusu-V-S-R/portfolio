import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { LogPage } from './pages/LogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log" element={<LogPage />} />
        <Route path="/log/:id" element={<BlogPostPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
