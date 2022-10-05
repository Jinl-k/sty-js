import index from './index'
// 获取课程列表
export default function courseSearch(data) {
	return index({
		url: '/api/course/search',
		method: 'post',
		data,
	})
}
