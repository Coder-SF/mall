import axios from "axios";

export function request(config) {
  // 1.创建实例
  const instance = axios.create({
    timeout: 5000,
    baseURL: "http://123.207.32.32:8000/api/h8",
  });
  // 2.拦截请求和响应
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {
      console.log(err);
    }
  );

  instance.interceptors.response.use(
    (result) => {
      return result.data;
    },
    (err) => {
      console.log(err);
    }
  );
  // 3.返回并真正发送网络请求
  return instance(config);
}
