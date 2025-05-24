import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import Dashboard from './Components/Dashboard';
import SignUp from './Components/Signup';
import Signin from './Components/Signin';
import Reset from './Components/reset';
import AuthLayout from './Components/authLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route element={<AuthLayout />}>
            <Route path="/signup" element={<SignUp />} />
            <Route path='/login' element={<Signin />} />
            <Route path="/reset" element={<Reset />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;