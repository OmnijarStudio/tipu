import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

const output = [
    { format: 'cjs', suffix: '.cjs' },
    { format: 'amd', suffix: '.amd' },
    { format: 'es', suffix: '' },
    { format: 'umd', suffix: '.umd' }
].map((config) => {
    return {
        exports: 'named',
        file: `lib/tipu${config.suffix}.js`,
        format: config.format,
        name: 'Tipu',
        sourceMap: true,
        globals: {
        }
    };
});

const plugins = [
    commonjs({
        exclude: 'node_modules/process-es6/**',
        include: [
        ],
        namedExports: {
        }
    }),
    resolve({
        browser: true,
        jsnext: true,
        main: true,
        module: true
    }),
    typescript(),
]

export default {
    external: [],
    input: './src/index.ts',
    output,
    plugins
}