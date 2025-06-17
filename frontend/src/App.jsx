import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';

const App = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Routes>
      <Route path="/" element={user ? <Dashboard /> : <Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/admin"
        element={user && user.role === 'admin' ? <AdminPanel /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default App;
