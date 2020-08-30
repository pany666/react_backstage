import axios from 'axios';
//设置统一的返回格式
axios.interceptors.response.use(res => res.data);

//登录接口
export const reqLogin = (userInfo)=>axios.post('/login',userInfo);
//获取电影接口
export const reqMovie = (keyword) =>axios.get(`http://www.omdbapi.com/?s=${keyword}&apikey=4a3b711b`);