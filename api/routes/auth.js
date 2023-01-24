import express from 'express';
import * as auth from '../controllers/auth.js';


const router = express.Router();

router.post("/register", auth.register);
router.post("/login", auth.login);

router.get('/all', auth.getAll)

router.delete("/:id", auth.deleteUser);

router.get('/', auth.test)


export default router