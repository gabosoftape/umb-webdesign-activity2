import { Skill, SkillNames, skillsList } from './skills';
import {
	catabumPix, clickerPix,
	enlistAndroidPix, enlistWebPix,
	fuecPix,
	gordinhoPix,
	lacosPix,
	misimPix,
	mitrackingPix,
	oldPortPix,
	videoURLs
} from './helpers';

export interface IProject {
	id: IProjectId;
	title: string;
	description: string;
	videoUrl: string;
	links: {
		github: string | null;
		www: string | null;
	};
	imageUrls?: string[];
	techs: Skill[];
}

type IProjectId =
	| 'gordinho'
	| 'd3'
	| 'mel'
	| 'mel-mobile'
	| 'lacos'
	| 'oldPortfolio'
	| 'capoeira'
	| 'happyPlants'
	| 'mitracking'
	| 'mifuec'
	| 'misim'
	| 'logistics'
	| 'enlistcontrol_android'
	| 'enlistcontrol_web'
	| 'catabum'
	| 'clicker'
	| 'motion';

// prettier-ignore
const lacosTechs: SkillNames[] = ['Angular','RxJS','Sass','Typescript','firebase','firestore'];
const clickerTechs: SkillNames[] = [
	'Html',
	'Css',
	'Typescript',
];
const catabumTechs: SkillNames[] = ['React','Redux','tailwind','Typescript','firebase','firestore', 'MongoDB'];


const gordinhoTechs: SkillNames[] = [
	'Html',
	'Css',
	'Typescript',
	'threejs',
	'aws',
];
const mitrackingTechs: SkillNames[] = [
	'Html',
	'Css',
	'React',
	'Redux',
	'Golang',
	'MongoDB',
	'Postgres',
];

const fuecTechs: SkillNames[] = [
	'Html',
	'Css',
	'Angular',
	'Node',
	'Postgres',
];

const misimTechs: SkillNames[] = [
	'Html',
	'Css',
	'Angular',
	'Golang',
	'Postgres',
];


const enlistAndroidTechs: SkillNames[] = [
	'Android',
	'Flutter',
];

const enlistWebTechs: SkillNames[] = [
	'Angular',
	'Node',
	'Styled Components',
	'Postgres',
	'Html',
	'Css',
];

const d3Techs: SkillNames[] = [
	'Angular',
	'RxJS',
	'Sass',
	'Typescript',
	'd3',
	'aws',
];
const capoeiraTechs: SkillNames[] = ['Javascript', 'React', 'threejs', 'vite'];
const oldPorfolioTechs: SkillNames[] = [
	'Typescript',
	'Css',
	'React',
	'next',
	'vercel',
];
const happyPlantsTechs: SkillNames[] = [
	'React Native',
	'Styled Components',
	'Typescript',
	'Lottie',
	'axios',
];

const getTechs = (techList: string[]) =>
	skillsList.filter(skill => techList.includes(skill.name));

export const projects: IProject[] = [
	{
		id: 'clicker',
		title: 'CLICKER',
		description:
			"CLicker Game for Wplay Event.\n",
		videoUrl: videoURLs.clicker,
		techs: getTechs(clickerTechs),
		imageUrls: clickerPix,
		links: {
			github: null,
			www: "https://clicker.knot.com.co",
		},
	},
	{
		id: 'catabum',
		title: 'CATABUM',
		description:
			"Platform for Influencers Stream, free or pay.\n",
		videoUrl: videoURLs.catabum,
		techs: getTechs(catabumTechs),
		imageUrls: catabumPix,
		links: {
			github: null,
			www: null,
		},
	},
	{
		id: 'mitracking',
		title: 'Mi Tracking',
		description:
			"Platform for GPS and IoT tracking. It consists of the MITRACKING satellite tracking system and the MIPORTAL management system. The satellite tracking system is designed for end users (without dealer rights) and allows them to monitor vehicles, machinery, people, pets and other units.\n" +
			"\n" +
			"The management system is designed for top-level users and users with distributor rights and allows them to configure the service structure, manage accounts, resources, users, units and other system objects.",
		videoUrl: videoURLs.mitracking,
		techs: getTechs(mitrackingTechs),
		imageUrls: mitrackingPix,
		links: {
			github: null,
			www: null,
		},
	},
	{
		id: 'mifuec',
		title: 'MI FUEC',
		description:
			"Web application for the management of unique contract extract formats. Unique Contract Extract Format is the transport document that drivers of vehicles that are providing passenger transport services in the special modality must carry, according to Colombian legislation in resolution 1069 of 2015 by the Ministry of transport.",
		videoUrl: videoURLs.fuec,
		techs: getTechs(fuecTechs),
		imageUrls: fuecPix,
		links: {
			github: null,
			www: null,
		},
	},
	{
		id: 'misim',
		title: 'MI SIM',
		description:
			"Web Application for the management of International SIM cards, M2M/IoT Connectivity, Recharges and Sponsored Roaming.",
		videoUrl: videoURLs.misim,
		techs: getTechs(misimTechs),
		imageUrls: misimPix,
		links: {
			github: null,
			www: null,
		},
	},
	{
		id: 'enlistcontrol_android',
		title: 'ENLIST CONTROL ANDROID',
		description:
			"Mobile Application for the management of pre-operational enlistments, and emerging covid health forms by drivers.",
		videoUrl: videoURLs.enlist_android,
		techs: getTechs(enlistAndroidTechs),
		imageUrls: enlistAndroidPix,
		links: {
			github: null,
			www: null,
		},
	},
	{
		id: 'enlistcontrol_web',
		title: 'ENLIST CONTROL WEB',
		description:
			"Mobile Application for the Administrative management of pre-operational enlistments, and emerging covid health forms.",
		videoUrl: videoURLs.enlist_web,
		techs: getTechs(enlistWebTechs),
		imageUrls: enlistWebPix,
		links: {
			github: null,
			www: null,
		},
	},
	{
		id: 'gordinho',
		title: 'Gordinho Defense',
		description:
			"A 3D Tower Defense game. Enemies swarm in a generative 3D maze trying to find their way out. It's your duty to stop them! Build towers shooting towers and see how long you can endure.",
		videoUrl: videoURLs.gordinho,
		techs: getTechs(gordinhoTechs),
		imageUrls: gordinhoPix,
		links: {
			github: 'https://github.com/gabosoftape/ts-map',
			www: 'https://main.d2797vtjwvpw5j.amplifyapp.com/',
		},
	},
	{
		id: 'lacos',
		title: 'Laços App',
		description:
			'An Angular enterprise app constructed for a real Psychology Clinic in Brazil. The whole backend was built using a serverless architecture empowered by firebase services like authentication, firestore and firestorage.',
		links: {
			github: null,
			www: null,
		},
		techs: getTechs(lacosTechs),
		videoUrl: videoURLs.lacos,
		imageUrls: lacosPix,
	}
];

export const getProject = (projTitle: IProjectId): IProject =>
	projects.find(proj => proj.id === projTitle) || projects[0];
