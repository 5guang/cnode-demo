import Qs from 'qs';

function transformToForm(data) {
  return Qs.stringify(data);
}

export default {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  transformRequest: [transformToForm],
};