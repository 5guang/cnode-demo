import axios from 'axios';
import formConfig from './form';

const form = 'form';
export default (config) => {
    const { methods, url, type } = config;
    return (params, body, id = '') => {
        let result;
        switch (methods) {
            case 'get': {
                result = axios.get(`${url}/${id}`, {
                    params,
                });
                break;
            }
            case 'post': {
                result = axios.post(
                    url,
                    body,
                    type === form ? formConfig : {},
                    );
                break;
            }
            default: {
                result = new Promise((resolve, reject) => {
                    reject(new Error('Please setting type'));
                });
            }
        };
        return result;
    }
}