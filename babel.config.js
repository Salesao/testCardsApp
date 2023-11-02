module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./'],
				extensions: [
					'.ios.js',
					'.android.js',
					'.js',
					'.jsx',
					'.json',
					'.tsx',
					'.ts',
					'.native.js',
				],
				alias: {
					'^#(.+)': './src/\\1',
				},
			},
		],
		[
			'module:react-native-dotenv',
			{
				envName: 'APP_ENV',
				moduleName: '@env',
				path: '.env',
				safe: false,
				allowUndefined: true,
				verbose: false,
			},
		],
		['react-native-reanimated/plugin'],
	],
};
