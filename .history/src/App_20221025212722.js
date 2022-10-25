import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import ProductDetails from './Components/Details/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/:id" element={<ProductDetails />} />
          </Routes>
        {/* </Suspense> */}
      </Router>
    </div>
  );
}

export default App;
