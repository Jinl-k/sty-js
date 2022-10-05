<template>
	<!-- 子组件 -->
	<child-components></child-components>
	<!-- 父组件 -->
	<div class="child-wrap input-group">
		<input
			v-model="inputs"
			type="text"
			class="form-control"
			placeholder="请输入"
		/>
		<div class="input-group-append">
			<button @click="handleAdd" class="btn btn-primary" type="button">
				添加
			</button>
		</div>
	</div>
</template>

<script setup>
import { ref, provide } from 'vue'
import ChildComponents from '../pages/ChildPage.vue'

const list = ref(['JavaScript', 'HTML', 'CSS'])
const inputs = ref('')
// 向子组件提供数据
provide('list', list.value)
// add 触发后的事件处理函数
const handleAdd = () => {
	const i = 0
	while (i < list.value.length) {
		console.log('已存在', inputs.value)
	}
	list.value.push(inputs.value)
	inputs.value = ''
}
</script>

<!-- import ChildComponents from '../pages/ChildPage.vue' -->
