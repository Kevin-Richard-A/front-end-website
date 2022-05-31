import { Route, Routes } from 'react-router-dom';
import { About } from './About page/about';
import './App.css';
import Front from './Front/front';
import Home from './Home Page/home';
import { LoginPage } from './Login Page/Login';
import NavMain from './Nav-Main/navMain';
import RForm from './Register/register form';

function App() {
  return (
    <>
      <NavMain />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/register" element={<RForm />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/" element={<Front/>} />
      </Routes>
    </>
  );
}

export default App;
