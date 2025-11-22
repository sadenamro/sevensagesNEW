/** @type {import('tailwindcss').Config} */
export default {
  // يحدد هذا المسار جميع الملفات التي يجب على Tailwind فحصها لتوليد الفئات المطلوبة.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // تعريف خطوط مخصصة للاستخدام في Tailwind
      fontFamily: {
        sans: ['Cairo', 'sans-serif'], // تعيين القاهرة كالخط الافتراضي
        serif: ['Amiri', 'serif'], // خط أميري للنصوص الرسمية والجمالية
      },
    },
  },
  plugins: [],
}