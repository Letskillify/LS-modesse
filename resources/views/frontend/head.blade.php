<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  {{-- Page Title --}}
  <title>@yield('title', 'Mod-Esse | Stylish & Elegant Wear for Women')</title>

  {{-- Meta Tags --}}
  <meta name="description"
    content="@yield('meta_description', 'Shop graceful and trendy women’s clothing. Sarees, kurtas, and more from Mod-Esse.')">
  <meta name="keywords"
    content="@yield('meta_keywords', 'mod-esse, women fashion, stylish sarees, designer kurtas, samridhi jain fashion')">
  <meta name="author" content="Mod-Esse">

  {{-- Canonical --}}
  <link rel="canonical" href="{{ url()->current() }}" />

  {{-- Favicon --}}
  <link rel="icon" href="{{ asset('images/favicon.ico') }}" type="image/x-icon">

  {{-- Open Graph / Facebook --}}
  <meta property="og:title" content="@yield('og_title', 'Mod-Esse | Fashion for Modern Women')">
  <meta property="og:description"
    content="@yield('og_description', 'Explore stylish sarees and contemporary fashion designed by Samridhi Jain.')">
  <meta property="og:image" content="@yield('og_image', asset('images/social-preview.jpg'))">
  <meta property="og:url" content="{{ url()->current() }}">
  <meta property="og:type" content="website">

  {{-- Twitter Card --}}
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="@yield('og_title', 'Mod-Esse | Fashion for Modern Women')">
  <meta name="twitter:description"
    content="@yield('og_description', 'Explore stylish sarees and contemporary fashion designed by Samridhi Jain.')">
  <meta name="twitter:image" content="@yield('og_image', asset('images/social-preview.jpg'))">

  {{-- Structured Data (JSON-LD Schema) --}}
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Mod-Esse",
      "url": "https://mod-esse.com",
      "logo": "{{ asset('images/logo.png') }}",
      "sameAs": [
        "https://www.instagram.com/modesseofficial",
        "https://www.facebook.com/modesse"
      ],
      "founder": {
        "@type": "Person",
        "name": "Samridhi Jain"
      },
      "description": "Mod-Esse offers premium and elegant contemporary wear for women. From sarees to modern outfits, shop the essence of style.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "India",
        "addressCountry": "IN"
      }
    }
    </script>

  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="assets/images/icons/favicon.png">

  @vite(['js/webfonts.js'])
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800%7CPoppins:300,400,500,600,700,800%7COswald:300,400,500,600,700,800"
    media="all">

  {{-- Vite Assets --}}
  <!-- Plugins CSS File -->
  <link href="{{ asset('css/style.css') }}" rel="stylesheet">
  <link href="{{ asset('css/fontawesome.min.css') }}" rel="stylesheet">
  <link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet">