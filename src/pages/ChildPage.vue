<template>
	<ul class="parent list-group">
		<li class="list-group-item" v-for="i in lists" :key="i">{{ i }}</li>
	</ul>
</template>
<script setup>
import { inject } from 'vue'
// 接受父组件提供的数据
let lists = []
lists = inject('list') ?? lists
</script>
