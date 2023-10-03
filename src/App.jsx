import { BrowserRouter as Route, Router, Routes } from 'react-router-dom'
import Layout from '~/Router/Layout'
import Home from '~/Router/Home'
import About from '~/Router/About'
import Dashboard from '~/Router/Dashboard'


function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </Router>

  )
}
export default App;