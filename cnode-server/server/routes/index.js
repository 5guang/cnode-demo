import topics from './topics/topics';
import topicParams from './topics-params';
import Router from 'koa-router';

const router = new Router()
const routes = {
    topics,
    topicParams,
}

router.get('/api/home', routes.topics);
router.get('/api/topic', routes.topicParams);
export default router;