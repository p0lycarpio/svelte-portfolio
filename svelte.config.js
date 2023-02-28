import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-netlify'

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({ scss: true}),
  adapter: adapter(),
  onwarn: (warning, handler) => {
    if (warning.code.startsWith('a11y-')) {
      return;
    }
    handler(warning);
  },
  kit: {
    alias: {
      'assets': 'src/lib/assets',
      'components': 'src/lib/components',
      'content': 'src/lib/content',
      'css': 'src/lib/css',
      'data': 'src/data'
    }
  }
}
