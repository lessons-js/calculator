import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/header';
import Home from '../pages/home';
import Max from '../pages/max';
import Alex from '../pages/alex';

const Router = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/max" element={<Max />} />
      <Route path="/alex" element={<Alex />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
