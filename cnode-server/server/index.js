import Koa from 'koa2';
import cors from 'koa-cors';
import bodyParser from 'koa-bodyparser';
import router from './routes/index';


const app = new Koa();
app.use(cors());
app.use(bodyParser());
app.use(router.routes());
app.listen(1111,'192.168.16.134');
console.log('now is open 192.168.16.133:3000');
export default app;