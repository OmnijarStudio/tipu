import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';

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
        sourcemap: true,
        globals: {
        }
    };
});

const plugins = [
    resolve({
        browser: true,
        mainFields: [
            'jsnext:main',
            'main',
            'module'
        ]
    }),
    commonjs({
        exclude: 'node_modules/process-es6/**',
        include: [
        ],
        namedExports: {
        }
    }),
    typescript({
        tsconfig: 'tsconfig.json'
    })
];

export default {
    external: [],
    input: './src/index.ts',
    output,
    plugins
}