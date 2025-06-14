import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page01 from './pages/page01/page1';
import Page02 from './pages/page02/page2';
import Page03 from './pages/page03/page3';
import Page04 from './pages/page04/page4';
import Home from './pages/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/valentine/" element={<Page01 />} />
        <Route path="/valentine/2" element={<Page02 />} />
        <Route path="/valentine/3" element={<Page03 />} />
        <Route path="/valentine/4" element={<Page04 />} />
        <Route path="/valentine/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
