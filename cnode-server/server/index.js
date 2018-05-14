import Koa from 'koa2';
import Router from 'koa-router';
import routes from './routes/index';
import cors from 'koa-cors';
import bodyParser from 'koa-bodyparser';

const router = new Router()
const app = new Koa();
router.get('/api/home', routes.topics);
router.get('/api/topic', routes.topicParams);
app.use(cors());
app.use(bodyParser())
app.use(router.routes());
app.listen(3000);
console.log('now is open 192.168.16.133:3000');
export default app;