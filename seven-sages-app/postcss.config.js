// PostCSS Configuration: Switching to CommonJS format (module.exports and require)
// هذا التنسيق هو الأكثر موثوقية وغالباً ما يحل مشاكل التوافق في بيئات البناء الخارجية مثل Vercel.

module.exports = {
  plugins: [
    // استخدام require() لتحميل الإضافات بدلاً من import
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}