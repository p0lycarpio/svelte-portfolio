const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = ({env}) => ({
    plugins: [
        env === "production" ? purgecss({
            content: ['./**/*.html', './**/*.svelte'],
            safelist: [/svelte/,/s-/] }) : false
    ]
})