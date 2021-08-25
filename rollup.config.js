// rollup.config.js
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import cleaner from 'rollup-plugin-cleaner';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from "@rollup/plugin-babel";
import svg from "rollup-plugin-svg";
import packageJson from './package.json';
import postcss from "rollup-plugin-postcss";



export default {
    input: 'src/index.js',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true,
        },
    ],
    inlineDynamicImports: true,
    plugins: [
         cleaner({
             targets: ['./lib'],
         }),
        babel({
            presets: ["@babel/preset-react"],
        }),
        postcss({
            plugins: []
        }),
        svg(),
        peerDepsExternal(),
        resolve(),
        commonjs(),
    ],
};
