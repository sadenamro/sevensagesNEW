// يجب استخدام صيغة import ليتوافق مع "type": "module" في package.json
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('postcss').Config} */
export default {
  // يجب تعريف الإضافات هنا كدوال، وليس مجرد مراجع (مطلوب في بعض بيئات Vite/PostCSS)
  plugins: [
    tailwindcss(),
    autoprefixer(),
  ],
}