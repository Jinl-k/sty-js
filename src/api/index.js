import axios from 'axios'

const instance = axios.create({
	baseURL: 'http://testapi.xuexiluxian.cn',
})
// 添加请求拦截器
// 前端给后端的东西 [没有到后端呢]
instance.interceptors.request.use(
	(config) => {
		// 在发送请求之前做些什么 比如判断用户是否是登录状态
		console.log('config', config)
		return config
	},
	(error) =>
		// 对请求错误做些什么
		Promise.reject(error)
)

// 添加响应拦截器
// 后端给前端的东西
instance.interceptors.response.use(
	(response) => {
		if (response.status === 200) {
			// 对响应数据做点什么
		}
		// 2xx 范围内的状态码都会触发该函数。
		// 对响应数据做点什么
		console.log('response', response)
		return response
	},
	(error) =>
		// 超出 2xx 范围的状态码都会触发该函数。
		// 对响应错误做点什么
		Promise.reject(error)
)

export default instance
