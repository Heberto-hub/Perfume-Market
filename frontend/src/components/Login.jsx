import { useState } from 'react';
import { loginUser } from '../services/authService';
import './Login.css';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await loginUser(form);
    if (result.token) {
      localStorage.setItem('token', result.token);
      console.log('Login exitoso');
    } else {
      console.error('Error de login:', result.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} />
      <button type="submit">Ingresar</button>
    </form>
  );
}