import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vitest/config';
import dts from 'vite-plugin-dts';
import tailwindcss from 'tailwindcss';
import { peerDependencies } from './package.json';
import { UserConfigExport } from 'vite';
import { name } from './package.json';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import babel from '@rollup/plugin-babel';

const app = async (): Promise<UserConfigExport> => {
  /**
   * Removes everything before the last
   * @octocat/library-repo -> library-repo
   * vite-component-library-template -> vite-component-library-template
   */
  const formattedName = name.match(/[^/]+$/)?.[0] ?? name;

  return defineConfig({
    plugins: [
      react(),
      libInjectCss(),
      dts({
        insertTypesEntry: true,
      }),
    ],
    css: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
    build: {
      lib: {
        entry: {
          fetcher: path.resolve(__dirname, 'src/lib/services/index.ts'),
          ui: path.resolve(__dirname, 'src/lib/ui/index.ts'),
        },
        name: formattedName,
        fileName: (format, name) => `${name}.${format}.js`,
      },
      rollupOptions: {
        external: ['react/jsx-runtime', 'tailwindcss', ...Object.keys(peerDependencies)],
        output: {
          globals: {
            react: 'React',
            'react/jsx-runtime': 'react/jsx-runtime',
            'react-dom': 'ReactDOM',
            tailwindcss: 'tailwindcss',
          },
        },

        //@ts-ignore
        plugins: [babel({ babelHelpers: 'bundled' })],
      },
      target: 'esnext',
      sourcemap: true,
    },
    test: {
      globals: true,
      environment: 'jsdom',
    },
  });
};
// https://vitejs.dev/config/
export default app;
