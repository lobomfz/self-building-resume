export const Data = {
	profile: {
		name: 'Matheus Fernandes',
		ocupation: 'DevOps Engineer',
		location: 'Vila Velha, ES, Brazil',
		email: 'lobomfz@protonmail.com',
		telephone: '+55 27 99955-6560',
		image: 'images/pfp.jpg',
	},
	skills: {
		softLabel: 'Skills',
		softSkills: [
			'Linux',
			'Scripting',
			'Python',
			'AWS/Cloud',
			'Docker & k8s',
			'Jenkins',
			'Terraform',
		],
	},
	socialMedia: {
		label: 'SOCIAL',
		social: [
			{
				label: 'Matheus Fernandes',
				name: 'linkedin',
				url: 'https://www.linkedin.com/in/matheus-lobo-mazarim-fernandes-5891431bb/',
				className: 'bxl-linkedin-square',
			},
			{
				label: 'lobomfz',
				name: 'github',
				url: 'https://github.com/lobomfz/resume-full',
				className: 'bxl-github',
			},
		],
	},
	experience: {
		works: [
			{
				title: 'CTO',
				period: 'Nov. 2021 - March 2022',
				company: 'Orbe888',
				description: [
					'Worked managing dozens of high end bare metal servers, using bleeding edge 3d hardware acceleration to create a low cost, high performance solution of hundreds of virtual machines, constantly finding ways to optimize our infrastructure to create the best price/performance/scalability possible.',
					'Developed an internal API and leaded a team of web developers to create an all-in-one site around it for our customers to access their instances, along with a highly optimized python and bash graphical automation script.',
					'Supervised all of our team to guarantee a high quality and technically optimized workflow.',
				],
			},
		],
		academic: [
			{
				career: 'Self-Educated',
				date: '2019 - Present',
				institution: 'TODO2',
			},
		],
		projects: [
			{
				name: 'Self-building resume',
				period: 'June 2022',
			},
		],
	},
};
