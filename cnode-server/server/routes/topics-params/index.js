import { topicParamsApi } from './../../api/index';


export default async (ctx, next) => {
    const { id } = ctx.request.query;
    const data = await topicParamsApi('', '', id);
    ctx.body = data.data;
}