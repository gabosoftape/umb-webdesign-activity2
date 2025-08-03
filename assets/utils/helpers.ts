import { intervalToDuration, Duration } from 'date-fns';

export const checkBrowser = () => {
	const test = (regexp: RegExp) => {
		return regexp.test(window.navigator.userAgent);
	};
	switch (true) {
		case test(/edg/i):
			return 'Microsoft Edge';
		case test(/trident/i):
			return 'Microsoft Internet Explorer';
		case test(/firefox|fxios/i):
			return 'Mozilla Firefox';
		case test(/opr\//i):
			return 'Opera';
		case test(/ucbrowser/i):
			return 'UC Browser';
		case test(/samsungbrowser/i):
			return 'Samsung Browser';
		case test(/chrome|chromium|crios/i):
			return 'Google Chrome';
		case test(/safari/i):
			return 'Apple Safari';
		default:
			return 'Other';
	}
};

const baseURL = 'https://melo-dev-portfolio.s3.us-west-2.amazonaws.com';

export const videoURLs = {
	catabum: `/videos/catabum.mp4`,
	clicker: `/videos/clicker.mp4`,
	mitracking: `/videos/mitracking.mp4`,
	fuec: `/videos/fuec.mp4`,
	misim: `/videos/misim.mp4`,
	enlist_android: `/videos/enlistcontrol_android.mp4`,
	enlist_web: `/videos/enlistcontrol_web.mp4`,
	capoeira: `${baseURL}/hello-capoeira.mp4`,
	d3Charts: `${baseURL}/D3-charts.mp4`,
	gordinho: `${baseURL}/gordinho_3D.mp4`,
	happyPlants: `${baseURL}/happy-plants.mp4`,
	lacos: `${baseURL}/Lacos-portfolio.mp4`,
};

export function getXPTime(startDate: Date): string {
	const duration: Duration = intervalToDuration({
		start: new Date(startDate),
		end: new Date(),
	});

	let [years, months, days] = ['', '', ''];

	// @ts-ignore
	if (duration?.years > 0) {
		years = duration.years === 1 ? '1 year' : `${duration.years} years`;
	}
	// @ts-ignore
	if (duration?.months > 0) {
		months =
			duration.months === 1 ? '1 month' : `${duration.months} months`;
	}
	// @ts-ignore
	if (duration?.days > 0) {
		days = duration.days === 1 ? '1 day' : `${duration.days} days`;
	}

	const response = [years, months, days].filter(Boolean);

	switch (response.length) {
		case 3:
			response[1] += ' and';
			response[0] += ',';
			break;
		case 2:
			response[0] += ' and';
			break;
	}
	return response.join(' ');
}

export const gordinhoPix = [
	'/images/gordimPix/00.png',
	'/images/gordimPix/01.png',
	'/images/gordimPix/02.png',
	'/images/gordimPix/03.png',
	'/images/gordimPix/04.png',
	'/images/gordimPix/05.png',
];

export const mitrackingPix = [
	'/images/mitracking/007_mockup_seguimiento-gps_web.png',
	'/images/mitracking/022_mockup_seguimiento-gps_web_seguir.png',
	'/images/mitracking/028_mockup_seguimiento-gps_web_minimap-options.png',
	'/images/mitracking/030_mockup_seguimiento-gps_web_login.png',
	'/images/mitracking/031_mockup_seguimiento-gps_web_new-mapmods.png',
	'/images/mitracking/032_mockup_seguimiento-gps_web_modal-new-unit.png',
	'/images/mitracking/034_mockup_seguimiento-gps_web_crear-ruta.png',
];

export const fuecPix = [
	'/images/fuec/01.png',
	'/images/fuec/02.png',
	'/images/fuec/03.png',
	'/images/fuec/04.png',
	'/images/fuec/05.png',
];

export const misimPix = [
	'/images/misim/01.png',
	'/images/misim/02.png',
	'/images/misim/03.png',
	'/images/misim/04.png',
	'/images/misim/05.png',
	'/images/misim/06.png',
];

export const enlistAndroidPix = [
	'/images/enlist_android/01.png',
	'/images/enlist_android/02.png',
	'/images/enlist_android/03.png',
	'/images/enlist_android/04.png',
	'/images/enlist_android/05.png'
];

export const enlistWebPix = [
	'/images/enlist_web/01.png',
	'/images/enlist_web/02.png',
	'/images/enlist_web/03.png',
	'/images/enlist_web/04.png',
	'/images/enlist_web/05.png',
	'/images/enlist_web/06.png',
];

export const lacosPix = [
	'/images/lacosPix/01.png',
	'/images/lacosPix/02.png',
	'/images/lacosPix/03.png',
	'/images/lacosPix/04.png',
	'/images/lacosPix/05.png',
	'/images/lacosPix/06.png',
	'/images/lacosPix/07.png',
	'/images/lacosPix/08.png',
];

export const oldPortPix = [
	'/images/oldPortPix/port-01.png',
	'/images/oldPortPix/port-02.png',
	'/images/oldPortPix/port-03.png',
	'/images/oldPortPix/port-04.png',
	'/images/oldPortPix/port-05.png',
];

export const d3Pix = [
	'/images/d3Pix/00.png',
	'/images/d3Pix/01.png',
	'/images/d3Pix/02.png',
];

export const otherPix = [
	'/images/otherPix/00.png',
	'/images/otherPix/01.png',
	'/images/otherPix/02.png',
];

export const clickerPix = [
	'/images/clicker/1.png',
	'/images/clicker/2.png',
	'/images/clicker/3.png',
	'/images/clicker/4.png',
];

export const catabumPix = [
	'/images/catabum/1.png',
	'/images/catabum/2.png',
	'/images/catabum/3.png',
	'/images/catabum/4.png',
	'/images/catabum/5.png',
	'/images/catabum/6.png',
	'/images/catabum/7.png',
];

// export const waves = '../../assets/svg/svg-waves.svg';
// export const topWaves = '../../assets/svg/svg-waves-top.svg';
// export const avatar = '/images/new-avatar.jpeg';
