import Home from "./pages/home/Home"
import Gala from "./pages/Gala/Gala"
import Category from "./pages/category/Category"
import Search from './pages/search/Search'
import Product from "./pages/product/Product"
import { Route, Routes } from "react-router-dom";
import "./App.css";


function App() {

  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/" element={<Gala />} />
      <Route path="/Search" element={<Search />} />
      <Route path="/Category" element={<Category />} />
      <Route path="/Product" element={<Product />} />
    </Routes>
  );
}
export default App;