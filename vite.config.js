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
    ]
};

export default config;
