/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
	webpack(config, options) {
		config.module.rules.push({
			loader: '@svgr/webpack',
			options: {
				prettier: false,
				svgo: true,
				svgoConfig: {
					plugins: [{
						name: 'preset-default',
						params: {
							override: {
								removeViewBox: false
							}
						}
					}],
				},
				images: {
					domains: ['courses-top.ru']
				},
				titleProp: true,
				use: ["@svgr/webpack"],
			},
			test: /\.svg$/,
		});

		return config;
	},
};

module.exports = nextConfig;
