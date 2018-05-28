import axios from 'axios';


export default (config) => {
    const { methods, url } = config;
    return (params, body ) => {
        let result;
        switch (methods) {
            case 'get': {
                result = axios.get(url, {
                    params,
                });
                break;
            }
            case 'post': {
                result = axios.post(url, body);
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
