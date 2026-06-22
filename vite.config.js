import { paraglideVitePlugin } from '@inlang/paraglide-js';
import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import Icons from 'unplugin-icons/vite';
import UnoCSS from 'unocss/vite';

const config = {
    plugins: [
        UnoCSS(),
        sveltekit(),
        imagetools(),
        Icons({ compiler: 'svelte' }),
        paraglideVitePlugin({
            project: './project.inlang',
            outdir: './src/lib/paraglide',
            strategy: ["url", "localStorage", "preferredLanguage", "baseLocale"],
            urlPatterns: [
                {
                    pattern: "/",
                    localized: [
                        ["fr", "/fr"],
                        ["en", "/en"],
                    ],
                },
                {
                    pattern: "/:path(.*)?",
                    localized: [
                        ["fr", "/fr/:path(.*)?"],
                        ["en", "/en/:path(.*)?"],
                    ],
                },
            ]
        })
    ],
    define: { __BUILD_DATE__: JSON.stringify(new Date().toISOString()) }
};

export default config;
