import { useState } from 'react';
import { registerUser } from '../services/authService';

export default function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await registerUser(form);
    console.log('Usuario registrado:', result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro</h2>
      <input name="username" placeholder="Nombre" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} />
      <button type="submit">Registrarse</button>
    </form>
  );
}