import express from 'express';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/profile', protect, (req, res) => {
  res.json(req.user);
});

router.get('/admin', protect, authorize('admin'), (req, res) => {
  res.json({ message: 'Admin content' });
});

export default router;
