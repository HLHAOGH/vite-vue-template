import APIS from './index'
import { ElMessage } from 'element-plus'


APIS.forEach(API => {
  API.defaults.timeout = 2000000;
  API.defaults.validateStatus = (status) =>
    (status >= 200 && status < 300) || status === 304;
  API.interceptors.request.use(
    config => config,
    error => {
      ElMessage.error(error.message || '请求：未知错误');
      return Promise.reject(error);
    }
  );
  API.interceptors.response.use(
    res => {
      const vres = res.data;
      vres.config = res.config;
      vres.headers = res.headers;
      if (vres instanceof Blob) {
        return vres
      }
      if (vres.code === undefined || vres.code === 0) {
        return vres
      } else {
        if (vres.code === 500) {
          ElMessage.error(`${vres.code}: ${vres.message || '未知错误'}`)
        } else {
          ElMessage.warning(`${vres.code}: ${vres.message || '未知提示'}`)
        }
      }
      return Promise.reject(vres)
    },
    error => {
      ElMessage.error(error.message || '请求：未知错误');
      return Promise.reject(error);
    }
  );
})