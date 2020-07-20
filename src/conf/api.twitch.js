import * as axios from 'axios';

const apiTwitch = axios.create({
  baseURL: 'https://api.twitch.tv'
})

apiTwitch.interceptors.request.use( req => {

  req.headers['client-id'] = '23m2e48pcow8sf58r8blnnr1bqjygb';
  req.headers['Authorization'] = 'Bearer pati5ghf60n1t1qodyllet3q8e655w'
  return req;
})

export default apiTwitch;