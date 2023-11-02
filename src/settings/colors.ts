export enum COLORS {
	gray100 = '#EDF0F5',
	gray200 = '#C4C4C4',
	gray300 = '#CECCCC',
	gray350 = '#BEBEBE',
	gray400 = '#BABABA',
	gray500 = '#B3B3B3',
	gray600 = '#A0A0A0',
	blue100 = '#EDF0F5',
	blue200 = '#95BCFF',
	blue300 = '#6799FA',
	blue400 = '#7CA9FF',
	blue600 = '#2E71F3',
	green100 = '#E5F3E7',
	green200 = '#53E061',
	green600 = '#52AD5B',
	white0 = '#ffffff',
	black0 = '#000000',
	black100 = 'rgba(0, 0, 0, 0.5)',
	whiteBlue0 = '#DAE7FC',
	red100 = '#FDDBE4',
	red400 = '#EF4040',
	red600 = '#ED0F48',
	pink0 = '#E6007D',
	yellow100 = '#F9F1D0',
	yellow600 = '#ed6c02',
	orange300 = '#FE8900',
	purple300 = '#6B2FEB',
}

export const getHexOpacity = (perc: number): string => {
	if (perc < 0) {
		return '00';
	}
	if (perc > 100) {
		return 'FF';
	}
	const value = Math.trunc((perc * 255) / 100);
	const hex = value.toString(16);

	if (String(hex).length === 1) {
		return '0' + hex;
	}
	return hex;
};
