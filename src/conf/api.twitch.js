import * as axios from 'axios';
import apiToken from './api.token'

const apiTwitch = axios.create({
  baseURL: 'https://api.twitch.tv'
})

apiTwitch.interceptors.request.use( req => {
  req.headers['client-id'] = '23m2e48pcow8sf58r8blnnr1bqjygb';
  return req;
})

export default apiTwitch;