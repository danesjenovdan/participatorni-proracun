module.exports = {
  root: true,
  extends: [
    "airbnb-base",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    // allow importing dev dependencies in configs
    "import/no-extraneous-dependencies": [
      "error",
      {
        optionalDependencies: false,
        devDependencies: ["build/**", "**/.eslintrc.js", "**/vite.config.js"],
      },
    ],
    // allow a single named export in file
    "import/prefer-default-export": ["off"],
    // allow mutating param object props
    "no-param-reassign": ["error", { props: false }],
    // always require import file extensions
    "import/extensions": ["error", "ignorePackages"],

    // TODO: remove
    "vue/multi-word-component-names": ["off"],
    "vue/require-explicit-emits": ["off"],
  },
};
