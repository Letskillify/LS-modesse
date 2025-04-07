import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', "resources/css/bootstap.min.css", "resources/css/fontawesome.min.css", 'resources/js/app.js', 'resources/js/bootstrap.js', 'resources/js/isotope.js', 'resources/js/plugins.min.js', 'resources/js/jquery.appear.js', 'resources/js/jquery.min.js', 'resources/js/webfonts   .js'],
            refresh: true,
        }),
        tailwindcss(),
    ],
    server: {
        host: '0.0.0.0',
        port: 5173,
        hmr: {
            host: '192.168.1.10',
        },
        protocol: 'ws',
        cors: true,
    }
});
