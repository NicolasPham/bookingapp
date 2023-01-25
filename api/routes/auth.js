import express from 'express';
import * as auth from '../controllers/auth.js';
import { verifyToken } from '../utils/verifyToken.js';


const router = express.Router();

router.post("/register", auth.register);
router.post("/login", auth.login);

router.get('/all', auth.getAll)

router.delete("/:id", auth.deleteUser);

router.get('/', auth.test)

router.get("/check", verifyToken, (req, res, next) => {
    res.send("Hello user, you are logged in")
})


export default router