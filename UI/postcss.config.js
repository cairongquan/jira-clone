export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 1620, // 视口宽度，根据项目实际需求调整
      minPixelValue: 1,
    }
  },
}
