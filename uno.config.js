import { presetWind4 } from '@unocss/preset-wind4';
import { defineConfig } from 'unocss';

export default defineConfig({
  presets: [
    presetWind4(),
  ],
  shortcuts: [
    ['btn', 'inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-tight rounded-md transition-colors duration-200'],
    ['btn-outline-light', 'btn border border-white text-white bg-transparent hover:bg-white hover:text-gray-900'],
  ],
  safelist: [
    Array.from({ length: 6 }, (_, i) => `order-${i + 1} md:order-${i + 1}`.split(' ')).flat(),
  ]
});