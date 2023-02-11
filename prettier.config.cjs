module.exports = {
    trailingComma: "es5",
    tabWidth: 4,
    useTabs: true,
    tailwindConfig: "./tailwind.config.cjs",
    plugins: [
        require("prettier-plugin-tailwindcss"),
        require("prettier-plugin-astro"),
    ],
};
