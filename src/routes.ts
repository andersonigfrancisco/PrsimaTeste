import {Router } from 'express';

import {UsersController} from './controller/UsersController';



const router = Router();

const userController = new UsersController();

router.get("/list-user",userController.list);

router.post("/create-user",userController.handle);

export {router}