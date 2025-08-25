// backend/config/db.js
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'tu_usuario',
  host: 'localhost',
  database: 'perfume_market',
  password: '1234',
  port: 5432,
});

export default pool;