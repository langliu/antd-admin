import axios from 'axios';
import { message } from 'antd';

// 消除对响应response拦截后返回类型自定义但编辑器不能处理的问题
declare module 'axios' {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>;
  }
}

const instance = axios.create({
  // 请求域名
  baseURL:
    process.env.NODE_ENV === 'production' ? 'http://192.168.0.1:8000' : '',
  // 过期时间
  timeout: 5000,
  // 请求头
  headers: {
    'content-type': 'application/json',
  },
});

// 请求拦截
instance.interceptors.request.use(
  (request) => {
    if (!request.url?.includes('login')) {
      request.headers['X-Access-Token'] = sessionStorage.getItem('token') || '';
    }
    return request;
  },
  (error) => {
    message.error(error);
  }
);

// 响应处理，过滤Axios response对请求response的封装
instance.interceptors.response.use(
  (response) => {
    if (response.data.code !== 200) {
      message.error(response.data.message);
    }
    return response.data;
  },
  (error) => {
    message.error(error.response.data.message);
    return error.response.data;
  }
);

/**
 * GET请求
 * @param url 请求地址
 * @param params 请求参数
 */
function get(url: string, params: any = {}) {
  return instance({
    method: 'GET',
    url,
    params,
  });
}

/**
 * POST请求
 * @param url 请求地址
 * @param data 请求参数
 */
function post(url: string, data: any = {}) {
  return instance({
    method: 'POST',
    url,
    data,
  });
}

/**
 * PUT请求
 * @param url 请求地址
 * @param data 请求参数
 */
function put(url: string, data: any = {}) {
  return instance({
    method: 'PUT',
    url,
    data,
  });
}

/**
 * PATCH请求
 * @param url 请求地址
 * @param data 请求参数
 */
function patch(url: string, data: any = {}) {
  return instance({
    method: 'PATCH',
    url,
    data,
  });
}

/**
 * DELETE请求
 * @param url 请求地址
 * @param params 请求参数
 */
function del(url: string, params: any = {}) {
  return instance({
    method: 'DELETE',
    url,
    params,
  });
}

export { get, del, post, put, patch };
