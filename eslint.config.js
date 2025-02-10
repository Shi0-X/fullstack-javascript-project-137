export default [
  {
    ignores: ["node_modules/", "dist/"], // Ignora directorios innecesarios
  },
  {
    files: ["**/*.js"], // Se aplica a todos los archivos JS
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      "indent": ["error", 2],
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
    },
  },
];
  