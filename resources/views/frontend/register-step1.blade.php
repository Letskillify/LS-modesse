@include('frontend/head')
</head>

<body>
    <div class="page-wrapper">
        @include('frontend/notice')

        <header class="header">
            @include('frontend/header-top')

            @include('frontend/middle-header')

            @include('frontend/header-bottom')
        </header>
        <!-- End .header -->

        <main class="main">
            <div class="page-header">
                <div class="container d-flex flex-column align-items-center">
                    <nav aria-label="breadcrumb" class="breadcrumb-nav">
                        <div class="container">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="demo4.html">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">
                                    Login
                                </li>
                            </ol>
                        </div>
                    </nav>

                    <h1>Login</h1>
                </div>
            </div>

            <div class="container login-container">
                <div class="row">
                    <div class="col-lg-10 mx-auto">
                        <div class="row">
                            <div class="col-md-6 mx-auto">
                                <div class="heading mb-1">
                                    <h2 class="title">Register - Step 1</h2>
                                </div>

                                <form method="POST" action="{{ route('register.step1') }}">
                                    @csrf

                                    <label for="name">
                                        Full Name
                                        <span class="required">*</span>
                                    </label>
                                    <input type="text" name="name" class="form-input form-wide" id="name" required />

                                    <label for="phone">
                                        Phone Number
                                        <span class="required">*</span>
                                    </label>
                                    <input type="tel" name="phone" class="form-input form-wide" id="phone" required />

                                    <label for="email">
                                        Email address
                                        <span class="required">*</span>
                                    </label>
                                    <input type="email" name="email" class="form-input form-wide" id="email" required />

                                    <label for="password">
                                        Password
                                        <span class="required">*</span>
                                    </label>
                                    <input type="password" name="password" class="form-input form-wide" id="password"
                                        required />

                                    <label for="password_confirmation">
                                        Confirm Password
                                        <span class="required">*</span>
                                    </label>
                                    <input type="password" name="password_confirmation" class="form-input form-wide"
                                        id="password_confirmation" required />

                                    <button type="submit" class="btn btn-dark btn-md w-100 mt-3">
                                        NEXT
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main><!-- End .main -->

        @include('frontend/footer')