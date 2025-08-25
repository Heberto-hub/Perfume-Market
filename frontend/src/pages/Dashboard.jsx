// pages/Dashboard.jsx
import { useEffect, useState } from 'react';
import { getUsers } from '../services/authService';

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers).catch(console.error);
  }, []);

  return (
    <div>
      <h2>Usuarios registrados</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.username} - {u.email}</li>
        ))}
      </ul>
    </div>
  );
}