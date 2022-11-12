// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Toby',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'buttons', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '3661f1a06b233d50014ef2ae610a6c88', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '50.850696',
	defaultLongitude: '-1.155208',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',


		// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
		// ├┴┐│ │ │  │ │ ││││└─┐
		// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

		firstButtonsContainer: [
			{
				id: '1',
				name: 'Github',
				icon: 'github',
				link: 'https://github.com/',
			},
			{
				id: '2',
				name: 'Google Mail',
				icon: 'at-sign',
				link: 'https://mail.salmon.host/',
			},
			{
				id: '3',
				name: 'Mail',
				icon: 'mail',
				link: 'https://mail.salmon.host',
			},
			{
				id: '4',
				name: 'Calendar',
				icon: 'calendar',
				link: 'https://calendar.google.com/calendar/r',
			},
			{
				id: '5',
				name: 'Classroom',
				icon: 'graduation-cap',
				link: 'https://classroom.google.com/h',
			},
			{
				id: '6',
				name: 'Jellyfin',
				icon: 'film',
				link: 'https://jelly.willow.112c.co.uk/',
			},
		],

		secondButtonsContainer: [
			{
				id: '1',
				name: 'Music',
				icon: 'headphones',
				link: 'https://open.spotify.com',
			},
			{
				id: '2',
				name: 'Twitter',
				icon: 'twitter',
				link: 'https://twitter.com/',
			},
			{
				id: '3',
				name: 'Discord',
				icon: 'message-square',
				link: 'https://discord.com/app',
			},
			{
				id: '4',
				name: 'iCloud',
				icon: 'cloud',
				link: 'https://beta.icloud.com/',
			},
			{
				id: '5',
				name: 'Proxmox',
				icon: 'x',
				link: 'https://pmox.112c.co.uk/',
			},
			{
				id: '6',
				name: 'Invivious',
				icon: 'youtube',
				link: 'https://uk1.watchtube.app/',
			},
		],

		// ┬  ┬┌─┐┌┬┐┌─┐
		// │  │└─┐ │ └─┐
		// ┴─┘┴└─┘ ┴ └─┘

		// First Links Container
		firstlistsContainer: [
			{
				icon: 'music',
				id: '1',
				links: [
					{
						name: 'Inspirational',
						link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
					},
					{
						name: 'Classic',
						link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
					},
					{
						name: 'Oldies',
						link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
					},
					{
						name: 'Rock',
						link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
					},
				],
			},
			{
				icon: 'coffee',
				id: '2',
				links: [
					{
						name: 'Linkedin',
						link: 'https://www.linkedin.com',
					},
					{
						name: 'Dribbble',
						link: 'https://www.dribbble.com',
					},
					{
						name: 'Trello',
						link: 'https://www.trello.com',
					},
					{
						name: 'Slack',
						link: 'https://www.slack.com',
					},
				],
			},
		],

		// Second Links Container
		secondListsContainer: [
			{
				icon: 'binary',
				id: '1',
				links: [
					{
						name: 'Spotify',
						link: 'https://www.spotify.com',
					},
					{
						name: 'Reddit',
						link: 'https://www.reddit.com',
					},
					{
						name: 'Hashnode',
						link: 'https://www.hashnode.com',
					},
					{
						name: 'Pocket',
						link: 'https://www.pocket.com',
					},
				],
			},
			{
				icon: 'github',
				id: '2',
				links: [
					{
						name: 'Front',
						link: 'https://www.reddit.com/r/Frontend/',
					},
					{
						name: 'Rust',
						link: 'https://www.reddit.com/r/rust/',
					},
					{
						name: 'Go',
						link: 'https://www.reddit.com/r/golang/',
					},
					{
						name: 'Repos',
						link: 'https://github.com/migueravila',
					},
				],
			},
		],
	};
