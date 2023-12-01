import Home from "./Home";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./headerContent/AboutUs";
import Categories from "./headerContent/Categories";
import Pricing from "./headerContent/Pricing";
import ContactUs from "./headerContent/ContactUs";
import Login from "./auth/Login";
import Register from "./auth/Register";

function App() {
  return (
    <div className="font-bodyFont m-0 p-0 box-border">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
