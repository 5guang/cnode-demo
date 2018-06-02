import { replyApi } from './../../api/index'

export default async (ctx, next) => {
    const { id, accesstoken } = ctx.request.body;
    const body = {
        accesstoken,
    };
    if (accesstoken) {
        try {
            const data = (await replyApi('', body, `${id}/ups`)).data;
            if (data.success) {
                ctx.body = data;
            } else {
                ctx.body = data.error_msg;
            }
        } catch (error) {
            console.error(error)
        }

    } else {
        ctx.status = 403;
        ctx.body = 'bad request'
    }
}