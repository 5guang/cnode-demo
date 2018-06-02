import topics from './topics/topics';
import topicParams from './topics-params';
import login from './login';
import reply from './reply';
import Router from 'koa-router';

const router = new Router();
const routes = {
    topics,
    topicParams,
    login,
    reply,
};

router.get('/api/home', routes.topics);
router.get('/api/topic', routes.topicParams);
router.post('/api/login', routes.login);
router.post('/api/reply', routes.reply);
export default router;