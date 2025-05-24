import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import Dashboard from './Pages/Dashboard';
import SignUp from './Pages/Signup';
import Signin from './Pages/Signin';
import Reset from './Pages/Reset';
import AuthLayout from './Components/authLayout';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route element={<AuthLayout />}>
            <Route path="/signup" element={<SignUp />} />
            <Route path='/login' element={<Signin />} />
            <Route path="/reset" element={<Reset />} />
          </Route>
          <Route path='/' element={<Layout />}>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;