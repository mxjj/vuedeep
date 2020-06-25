/**
 *  aixos
 */

import axios from "axios";

const service = axios.create({
  baseUrl: "",
  timeout: 5000,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    //定义请求头 , token 之类的
    config.headers["X-Authorization"] = "";
    config.headers["Contene-type"] = `applications/json;charset=UTF-8`;

    return config;
  },
  // 错误信息
  (error) => {
    console.log(error);
    return Promise.reject(error, "错误信息");
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    console.log(response, "服务器响应数据");
    return response.data;
  },
  (error) => {
    // 错误信息展示 根据错误信息做些相应判断
    if (error === "Error：timeout of 5000ms exceeded") {
      console.error(error, "超时后的信息");
    }
    return Promise.reject(error);
  }
);

export const getRequest = (url, params) => service.get(url, { params });
export const postRequest = (url, params) => service.post(url, { params });

export default service;
