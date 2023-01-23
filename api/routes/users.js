import express from 'express';
import * as user from '../controllers/user.js';


const router = express.Router();


router.put('/:id', user.updateUser);
router.delete("/:id", user.deleteUser);

export default router;