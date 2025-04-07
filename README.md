🛍️ Mod-Esse — Elegant Contemporary Women's Wear (Laravel + Vite Project)

Welcome to the Mod-Esse E-commerce Platform — a premium platform for elegant, contemporary women's wear. Built with Laravel, Blade, and Vite.

🚀 Getting Started (Development Setup)

Follow the steps below to run this project on any system:

📦 Step 1: Clone the Repository

git clone https://github.com/your-username/mod-esse.git
cd mod-esse

Or extract the ZIP if you're sharing without Git.

⚙️ Step 2: Install PHP Dependencies

composer install

🧪 Step 3: Setup Environment File

cp .env.example .env

Update .env with your local database and app info:

APP_NAME="Mod-Esse"
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=mod_esse_db
DB_USERNAME=root
DB_PASSWORD=

🔐 Step 4: Generate App Key

php artisan key:generate

🛠️ Step 5: Run Migrations (if needed)

php artisan migrate

💻 Step 6: Install Node Packages

npm install

🏗️ Step 7: Build Frontend (Production)

npm run build

Or for development:

npm run dev

🚦 Step 8: Start Laravel Server

php artisan serve

Visit: http://localhost:8000

To run it on mobile or another device on the same network:

Update vite.config.js:

server: {
  host: '0.0.0.0',
  port: 5173
}

Run with:

php artisan serve --host=0.0.0.0

🖼️ Images & Assets

Put your images inside public/images/

Use like:

<img src="{{ asset('images/logo.png') }}" alt="Mod-Esse">

🧩 Blade Components / Layouts

Use layouts for common parts like header, footer, meta etc.

Example:

layouts/app.blade.php

<html>
<head>
  @include('layouts.head')
</head>
<body>
  @include('layouts.header')
  @yield('content')
  @include('layouts.footer')
</body>
</html>

Any Page (e.g. index.blade.php)

@extends('layouts.app')
@section('title', 'Home')
@section('content')
  <!-- Your Page Content Here -->
@endsection

🔐 Authentication Pages

Create common components for:

header.blade.php

footer.blade.php

login.blade.php

signup.blade.php

Use @include() to add them in main pages.

🌐 SEO & Meta Tags (in layouts/head.blade.php)

Include:

<title>{{ config('app.name') }} | Page Name</title>

Meta Description

Open Graph Tags

Twitter Card

Favicon

Structured Data Schema (JSON-LD)

📁 Folder Structure (Overview)

resources/views — Blade templates (HTML pages)

public/ — CSS, JS, Images, and Vite build output

routes/web.php — All your frontend routes

app/Http/Controllers — Laravel backend logic

.env — Environment config

vite.config.js — Vite setup

🧠 Notes

Always run npm run build before deployment.

For hosting (AWS or VPS), set root to /public

Images should go in public/images/

Use php artisan serve --host=0.0.0.0 for mobile testing