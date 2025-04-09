import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import packageJson from './package.json'

export default defineConfig({
    define: {
        global: 'window',
    },
    server: {
        port: 3001,
    },
    plugins: [
        react(),
        libInjectCss(),
        dts({
            insertTypesEntry: true,
            include: ['src'],
        }),
        tsconfigPaths(),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.tsx'),
            name: 'lexical-math',
            formats: ['es'],
            fileName: format => `lexical-math.${format}.js`,
        },
        rollupOptions: {
            external: [...Object.keys(packageJson.peerDependencies), 'react/jsx-runtime'],
        },
        sourcemap: true,
    },
})
