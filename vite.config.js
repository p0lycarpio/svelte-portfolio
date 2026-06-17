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
        paraglideVitePlugin({ project: './project.inlang', outdir: './src/lib/paraglide' })
    ],
    define: { __BUILD_DATE__: JSON.stringify(new Date().toISOString()) }
};

export default config;
