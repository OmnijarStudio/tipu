import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const output = [
    { format: 'es', suffix: '' },
].map((config) => {
    return {
        dir: 'lib',
        entryFileNames: `tipu${config.suffix}.js`,
        exports: 'named',
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
            'main',
            'module'
        ]
    }),
    typescript({
        tsconfig: 'src/tsconfig.json'
    })
];

export default {
    external: [],
    input: './src/index.ts',
    output,
    plugins
}