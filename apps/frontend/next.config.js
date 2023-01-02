module.exports = {
  reactStrictMode: true,
  rewrites: async () => {
    return [
      {
        source: '/blog',
        destination: '/',
      },
    ];
  },
};
