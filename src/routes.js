import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controller/UserController';
import SessionController from './app/controller/SessionController';
import FileController from './app/controller/FileController';
import ProviderController from './app/controller/ProviderController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.get('/providers', ProviderController.index);
routes.use(authMiddleware);
routes.put('/users', UserController.update);
routes.post('/sessions', SessionController.store);
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
