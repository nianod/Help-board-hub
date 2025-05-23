import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import Dashboard from './Components/Dashboard';
import SignUp from './Components/Signup';
import AuthLayout from './Components/authLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route element={<AuthLayout />}>
            <Route path="/signup" element={<SignUp />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;