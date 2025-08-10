import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
	plugins: [tailwindcss()],

	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				page1: resolve(__dirname, 'src/html/index-en.html'),
				page2: resolve(__dirname, 'src/html/index-ru.html'),
			},
		},
	},
})
