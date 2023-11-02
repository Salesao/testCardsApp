module.exports = {
	root: true,
	extends: '@react-native-community',
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'unused-imports'],
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				'@typescript-eslint/no-shadow': ['error'],
				'no-shadow': 'off',
				'no-undef': ['off'],
				'react-hooks/exhaustive-deps': ['warn'],
				'no-unused-vars': ['off'],
				'@typescript-eslint/no-unused-vars': ['warn'],
				'react-native/no-inline-styles': ['off'],
				'no-mixed-spaces-and-tabs': ['off'],
				'unused-imports/no-unused-imports': ['error'],
				'no-sequences': ['off'],
				'dot-notation': ['off'],
				'eslint-comments/no-unlimited-disable': ['off'],
			},
		},
	],
};
