import { loginApi } from './../../api/index';

export default async (ctx, next) => {
    const { accesstoken } = ctx.request.body;
    const body = {
        accesstoken,
    }
    if (accesstoken) {
        try {
            const data = (await loginApi('', body)).data;
            if (data.success) {
                ctx.body = data;
            } else {
                ctx.body = data.error_msg;
            }
        } catch (error) {
            console.error(error)
        }

    }
}