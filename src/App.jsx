import { useEffect} from 'react'
import AOS from 'aos'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import AuthLayout from './Components/authLayout';
import Home from './Pages/Home';
import SignUp from './Pages/Signup';
import Signin from './Pages/Signin';
import Reset from './Pages/Reset';
import HelperDashboard from './Pages/HelperDashboard';
import SeekerDashboard from './Pages/SeekerDashboard';
import UserProfile from './Components/UserProfile';
import Notice from './Components/404';
import { AuthContextProvider } from './supabase/AuthContext';
 

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, []);
  return (
    <AuthContextProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<AuthLayout />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/reset" element={<Reset />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/dashboard/helper" element={<HelperDashboard />} />
          <Route path="/dashboard/seeker" element={<SeekerDashboard />} />
          <Route path='/userProfile' element={<UserProfile />} />
        </Route>
      </Routes>
    </Router>
    </AuthContextProvider>
  );
}

export default App;
