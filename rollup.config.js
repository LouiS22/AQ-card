import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import replace from '@rollup/plugin-replace';

const BUILD_TIMESTAMP = new Date().toISOString().replace(/[:.T]/g, '-').substring(0, 16);

export default {
  input: 'src/aq-card.js',
  output: {
    file: 'dist/aq-card.js',
    format: 'iife',
    sourcemap: true,
    name: 'IndoorAirQualityCard',
    generatedCode: 'es2015',
  },
  plugins: [
    replace({
      __BUILD_TIMESTAMP__: JSON.stringify(BUILD_TIMESTAMP),
      preventAssignment: true,
    }),
    resolve(),
    terser({
      format: { comments: false },
      mangle: { keep_classnames: true, keep_fnames: true, properties: false },
      compress: { defaults: false, drop_console: false },
    }),
  ],
};
