import fetch from './fetch';
import { BASE_PATH } from './../utils/constants';

export const homeApi = fetch({
    url: `${BASE_PATH}/api/home`,
    methods: 'get',
});

export const topicApi = fetch({
    url: `${BASE_PATH}/api/topic`,
    methods: 'get',
});

export const loginApi = fetch({
    url: `${BASE_PATH}/api/login`,
    methods: 'post',
});