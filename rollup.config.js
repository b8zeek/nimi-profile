import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import image from '@rollup/plugin-image'
import svgr from '@svgr/rollup'
import dts from 'rollup-plugin-dts'

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/esm/index.js',
                format: 'esm',
                sourcemap: true
            }
        ],
        plugins: [
            peerDepsExternal(),
            nodeResolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            image(),
            svgr()
        ]
    },
    {
        input: 'dist/esm/index.js',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        plugins: [dts()]
    }
]
