import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools'
import Icons from 'unplugin-icons/vite'
import UnoCSS from 'unocss/vite'

const config = {
    plugins: [
        UnoCSS(),
        sveltekit(),
        imagetools(),
        Icons({
            compiler: 'svelte',
        }),
    ],
    define: {
        __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
    },
};

export default config;
