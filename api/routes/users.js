import express from 'express';
import * as user from '../controllers/user.js';


const router = express.Router();

router.post("/register", user.register);
router.post("/login", user.login);

router.get('/all', user.getAll)

router.delete("/:id", user.deleteUser);

router.get('/', user.test)


export default router