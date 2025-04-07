import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		eslint({
			fix: true,
			include: ['src/**/*.{js,jsx,ts,tsx}'],
			exclude: ['node_modules', 'dist'],
		}),
	],

	// Оптимизация для Vercel
	optimizeDeps: {
		exclude: ['@rollup/rollup-linux-x64-gnu'],
		include: ['react', 'react-dom'],
	},

	// Настройки сборки
	build: {
		rollupOptions: {
			external: [], // Можно добавить модули для исключения из бандла
			output: {
				manualChunks: {
					react: ['react', 'react-dom'],
				},
			},
		},
		chunkSizeWarningLimit: 1500, // Увеличиваем лимит предупреждений о размере чанков
	},

	// Полифиллы для старых браузеров
	esbuild: {
		jsx: 'automatic',
		target: 'es2020',
	},

	// Настройки сервера разработки
	server: {
		port: 3000,
		open: true,
	},

	preview: {
		port: 3000,
	},
})
