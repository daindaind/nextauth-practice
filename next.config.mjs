/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
				protocol: "https",
				hostname: "lh3.googleusercontent.com",
				port: "",
				// ** : 아무거나 올 수 있음
				pathname: "/**",
			},
        ]
    }
};

export default nextConfig;
