// import { BrowserRouter as Route, Router, Routes } from 'react-router-dom'
// import Layout from '~/Router/Layout'
// import Home from '~/Router/Home'
// import About from '~/Router/About'
// import Dashboard from '~/Router/Dashboard'
import Search from './component/layout/search/search'
import { useState } from "react";
import "/.App.css";


function App() {
  const [count] = useState(0);
  return (
    // <Router>
    //   <div className='App'>
    //     <Routes>
    //       <Route path="/" element={<Layout />}>
    //         <Route index element={<Home />} />
    //         <Route path="about" element={<About />} />
    //         <Route path="dashboard" element={<Dashboard />} />
    //       </Route>
    //     </Routes>
    //   </div>
    // </Router>
    <>
      <Search />
    </>
  );
}
export default App;