import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./Pages/About"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Products from "./Pages/Products"
import Navbar from "./Components/Navbar"
import ProductDetails from "./Components/ProductDetails"
import User from "./Pages/User"
import UserDetail from "./Components/data/UserDetail"
 


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/:userId" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
