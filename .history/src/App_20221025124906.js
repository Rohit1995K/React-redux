import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Components/Login/Login';


function App() {
  return (
    <div className="App">
        <Login />
        {/* <CartContainer /> */}
    </div>
  );
}

export default App;
