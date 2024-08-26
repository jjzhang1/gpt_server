module.exports = {
  reactStrictMode: true,
  compress: true,

  async rewrites() {
    const env = process.env.NODE_ENV;
    const testUrl = "http://52.77.241.219:8443";
    // const prodUrl = "http://balance.game:8888";
    const prodUrl = "http://52.77.241.219:8443";

    const destination = env === "production" ? prodUrl : testUrl;
    return [
      {
        source: "/api/:path*",
        destination: `${destination}/api/:path*`, // 代理到后端API
      },
    ];
  },
};
