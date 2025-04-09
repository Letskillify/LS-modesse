import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['css/bootstrap.min.css', 'css/style.css', 'css/fontawesome.min.css', 'css/webfonts.js', 'js/jquery.js', 'js/bootstrap.js', 'js/isotope.js', 'js/plugins.min.js', 'js/jquery.appear.js', 'js/main.js'],
            refresh: true,
        }),
    ],
});
