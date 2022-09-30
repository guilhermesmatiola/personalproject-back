import { Router } from 'express';
import { getAll, newProduct } from '../controllers/productController';
import validateToken from '../middlewares/validateTokenMiddleware';

const productRouter = Router();

productRouter.get('/products', validateToken, getAll);
productRouter.post('/products', validateToken, newProduct);

export default productRouter;
