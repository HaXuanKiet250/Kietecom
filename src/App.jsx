import Home from "./pages/home/Home"
import Category from "./pages/category/Category"
import Search from './pages/search/Search'
import Homes from "./pages/Homes/Homes";
import { Route, Routes } from "react-router-dom";
import "./App.css";


function App() {

  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Search" element={<Search />} />
      <Route path="/Category" element={<Category />} />
      <Route path="/Homes" element={<Homes />} />
    </Routes>
  );
}
export default App;