import type { Options } from 'tsup'

export default <Options>{
  entryPoints: [
    'src/*.ts',
  ],
  clean: true,
  format: ['cjs', 'esm'],
  dts: {
    footer:"declare module '*.json?lottie'",
  },
  onSuccess: 'npm run build:fix',
}
