import { BASE_PATH } from './../utils/constants';
import fetch from './fetch';

export const topicsApi = fetch({
    url: `${BASE_PATH}/topics`,
    methods: 'get',
});

export const topicParamsApi = fetch({
    url: `${BASE_PATH}/topic`,
    methods: 'get',
});

export const loginApi = fetch({
    url: `${BASE_PATH}/accesstoken`,
    methods: 'post',
    type: 'form'
});
export const replyApi = fetch({
    url: `${BASE_PATH}/reply`,
    methods: 'post',
    type: 'form'
});
