import logo from './logo.svg';
import './App.css';
import Home from './screens/Home/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Product from './screens/Product/Product';
import SignUp from './screens/login/Signup';
import SignIn from './screens/login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarMobile from './components/NavbarMobile';

function App() {

  return (
    <BrowserRouter>
      <div className='sm-none'>
        <Navbar />
      </div>
      <div className='lg-none'>
        <NavbarMobile />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
