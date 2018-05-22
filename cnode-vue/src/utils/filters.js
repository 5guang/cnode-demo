import { MillisecondToDate } from './util';

export const lastActiveTime = (time) => {
    return MillisecondToDate(time);
};
export const menu = (val) => {
    let res = '';
    const menuList = [
        { label: 'share', value: '分享' },
        { label: 'good', value: '精华' },
        { label: 'ask', value: '问答' },
        { label: 'job', value: '招聘' }
    ];
    menuList.forEach(item => {
        if (item.label === val) {
            res = item.value;
        }
    });
    return res;
};