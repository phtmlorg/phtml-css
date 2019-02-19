module.exports = {
	'basic': {
		message: 'supports basic usage',
		options: {
			plugins: require('postcss-preset-env')({
				stage: 0
			})
		}
	},
	'basic:nosource': {
		message: 'supports { processOption } override',
		options: {
			plugins: require('postcss-preset-env')({
				stage: 0
			}),
			processOptions: {}
		}
	}
};
