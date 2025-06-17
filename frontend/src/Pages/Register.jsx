import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';

export default function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '', role: 'user' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async e => {
    e.preventDefault();
    const res = await API.post('/auth/register', form);
    localStorage.setItem('token', JSON.stringify(res.data.token));
    localStorage.setItem('user', JSON.stringify(res.data.user));
    navigate('/');
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <input name="username" onChange={handleChange} placeholder="Username" />
      <input name="email" onChange={handleChange} placeholder="Email" />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" />
      <select name="role" onChange={handleChange}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
}
