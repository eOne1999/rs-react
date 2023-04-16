import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './pages/About';
import Forms from './pages/Forms';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export function App() {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <App />
      </div>
    </BrowserRouter>
  );
}
