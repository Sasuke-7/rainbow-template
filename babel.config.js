module.exports = {
	presets: [
		'@babel/preset-typescript',
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current',
				},
			},
		],
	],
	plugins: [
		[
			'module-resolver',
			{
				alias: {
					'@baby': './src/examples/baby'
				}
			},
		],
	],
};
