import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionControler from './app/controllers/SessionController';
import FileControler from './app/controllers/FileController';
import ProviderControler from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionControler.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/providers', ProviderControler.index);

routes.post('/appointments', AppointmentController.store);

routes.post('/files', upload.single('file'), FileControler.store);

export default routes;
