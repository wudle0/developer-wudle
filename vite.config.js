import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
			"@scss": resolve(__dirname, "./src/scss"),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "@scss/abstracts" as *;`,
			},
		},
	},
});
