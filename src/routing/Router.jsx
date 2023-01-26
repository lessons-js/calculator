import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header";
import Home from "../pages/home";
import Max from "../pages/max";
import Radion from "../pages/radion/";

const Router = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/max" element={<Max />} />
      <Route path="/radion" element={<Radion />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
