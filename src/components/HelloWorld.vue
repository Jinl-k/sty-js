<script setup>
import index from '../api/index'
import courseSearch from '../api/course'
import ZhiPage from '../pages/ZhiPage.vue'

index({
	url: '/api/course/category/getSecondCategorys',
	params: {
		categoryId: -1,
	},
}).then((res) => {
	console.log('res', res)
})

courseSearch({
	pageNum: -1,
	pageSize: 10,
}).then((res) => {
	console.log('course', res)
})
</script>

<template>
	<article class="bl1">
		<p>I want to be red and larger than the other text.</p>
		<p>I want to be normal sized and the default color.</p>
	</article>
	<p class="bl" @click="ck()">{{ fullName }}</p>
	<p>{{ firstName }}</p>
	<p>{{ lastName }}</p>
	<ZhiPage title="world" :str="obj.a" :fun="obj.foo" />
</template>

<style scoped>
article p:last-of-type {
	color: #ff0000;
}
.bl {
	color: white;
}
</style>
