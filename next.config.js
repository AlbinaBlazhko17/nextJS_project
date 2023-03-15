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
					// plugins: [{ removeViewBox: false }],
					plugins: [{
						name: 'preset-default',
						params: {
							override: {
								removeViewBox: false
							}
						}
					}],
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
