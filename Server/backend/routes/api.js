import express from 'express'
import { createGame, GetGames } from '../controllers'

const router = express.Router();

router.post('/games', createGame.create );
router.get('/games', GetGames.get );

export default router;