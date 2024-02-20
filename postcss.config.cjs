const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-preset-env": {
      stage: 3,
    },
    cssnano: {
      preset: "advanced",
    },
  },
};

module.exports = config;
