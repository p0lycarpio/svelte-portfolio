import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools'
import Icons from 'unplugin-icons/vite'

const config = {
    plugins: [
        sveltekit(),
        imagetools(),
        Icons({
            compiler: 'svelte',
        })
    ]
};

export default config;
