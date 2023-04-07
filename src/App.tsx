import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import About from './pages/About';
import Forms from './pages/Forms';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { TSearch } from './types';

export function App({ searchValue, setSearchValue }: TSearch) {
  return (
    <main className="main">
      <Routes>
        <Route
          path="/"
          element={<Home searchValue={searchValue} setSearchValue={setSearchValue} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export function WrappedApp() {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <App searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
    </BrowserRouter>
  );
}
