import { topicsApi } from './../../api/index';
export default async (ctx, next) => {
    const { page, tab, limit, mdrender } = ctx.request.query;
    const params = {
        page,
        limit,
        tab,
        mdrender,
    }
    const data = await topicsApi(params);
    ctx.body = data.data;
}