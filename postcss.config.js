module.exports = {
  plugins: [
    require("autoprefixer", {
      browsers: [
        "ie >= 10",
        "ios >= 8",
        "android >= 4.0",
      ],
    }),
    require("css-mqpacker"),
    require("cssnano"),
  ],
}
