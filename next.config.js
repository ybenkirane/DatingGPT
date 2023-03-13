/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: "/github",
				destination: "https://github.com/ybenkirane/DatingGPT",
				permanent: false,
			},
			{
				source: "/deploy",
				destination: "https://vercel.com/templates/next.js/twitter-bio",
				permanent: false,
			},
		];
	},
};
