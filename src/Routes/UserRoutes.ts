import { Router } from "express";
import { deleteUser, getUsuario, getUsuarios, postUser, putUser } from "../Controllers/UserController";

const router = Router();

router.get('/',getUsuarios );
router.get('/:id', getUsuario);
router.post('/', postUser);
router.put('/:id',putUser);
router.delete('/:id', deleteUser);

export default router;