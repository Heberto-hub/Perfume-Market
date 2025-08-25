// backend/routes/userRoutes.js
import express from 'express';
import { verifyToken } from '../middlewares/authMiddleware.js';
import pool from '../config/db.js';

const router = express.Router();

router.get('/users', verifyToken, async (req, res) => {
  const result = await pool.query('SELECT id, username, email FROM users');
  res.json(result.rows);
});

export default router;