module.exports = {
  reactStrictMode: true,
  rewrites: async () => {
    return [
      {
        source: '/articles',
        destination: '/',
      },
    ];
  },
};
