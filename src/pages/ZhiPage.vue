<template>
	<div>111</div>
</template>

<script setup>
const pro = defineProps({
	title: String,
	str: Number,
	fun: Function,
})
// const pros = defineProps['fun']

console.log('pro', pro)
</script>

<style lang="scss" scoped></style>
