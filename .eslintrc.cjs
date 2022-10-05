module.exports = {
	// 表示当前目录即为根目录，ESLint规则被现在到该目录下
	root: true,
	// env 表示启用 ESLint 检测的环境
	env: {
		browser: true,
		es2021: true,
		// 在 node 环境下启动ESLint检测
		node: true,
	},
	// ESLint 中基础配置需要继承的配置
	extends: [
		'plugin:vue/vue3-essential',
		'airbnb-base',
		'plugin:prettier/recommended',
	],
	overrides: [],
	// 解析器
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['vue', 'prettier'],
	rules: {
		'no-console': 'off',
	},
}
