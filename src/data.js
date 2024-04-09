import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

const data = {
	pageSections: ["about", "projects", "contact"],
	skills: [
		"html",
		"css",
		"sass",
		"tailwind css",
		"styled-components",
		"javascript",
		"react.js",
		"next.js",
		"typescript",
		"git",
		"github",
		"figma",
	],
	socials: [
		{
			id: 1,
			name: "Github",
			icon: FiGithub,
			link: "https://github.com/Jatin-Rohilla",
		},
		{
			id: 2,
			name: "Twitter",
			icon: FiTwitter,
			link: "https://twitter.com/JatinRohilla_in",
		},
		{
			id: 3,
			name: "LinkedIn",
			icon: FiLinkedin,
			link: "https://www.linkedin.com/in/jatin-rohilla/",
		},
	],
	projects: [
		{
			id: 1,
			category: "featured",
			image: "https://res.cloudinary.com/dte9gted8/image/upload/v1711997065/Screenshot_2024-04-02_at_12.14.08_AM_ybmnuj.png",
			name: "Wood-Fans",
			description: [
				"Wood Fans - Where Comfort Meets Craftsmanship. Your premier destination for exquisite and sustainable furniture solutions that transform your living spaces into havens of comfort and style.",
			],
			skills: ["react.js", "tailwind css","node.js", "api"],
			github: "https://github.com/Jatin-Rohilla/Wood-Fans-MERN_Stack",
			live: "https://wood-fans.vercel.app/",
		},
		{
			id: 2,
			category: "featured",
			image: "https://res.cloudinary.com/dte9gted8/image/upload/v1711997469/Screenshot_2024-04-02_at_12.20.57_AM_dyxb1a.png",
			name: "Chat-App",
			description: [
				"Revolutionize social connections with our dynamic chat app! Engage in vibrant public groups, effortlessly find and connect with users, and elevate your networking experience through our user-friendly interface.",
			],
			skills: ["react.js", "tailwind css", "node.js", "api", "firebase"],
			github: "https://github.com/Jatin-Rohilla/Chat-app-MERN_Stack.git",
			live: "https://own-chat-app.vercel.app/login",
		},
		{
			id: 3,
			category: "featured",
			image: "https://res.cloudinary.com/dte9gted8/image/upload/v1712498843/Screenshot_2024-04-07_at_7.37.09_PM_hbxhh0.png",
			name: "Bed Bath and Beyond",
			description: [
				"Welcome to Bed bath and beyond, Your Home Upgrade Destination! Discover curated home and living essentials designed to elevate your space. We prioritize quality, offering a diverse range from bedding to furniture. Join us in creating your perfect home sanctuary!",
			],
			skills: ["HTML5", "CSS3", "javascript"],
			github: "https://github.com/Jatin-Rohilla/Bed-bath-and-beyond.git",
			live: "https://jatin-rohilla.github.io/Bed-bath-and-beyond/",
		},
	
	],
};

export default data;
