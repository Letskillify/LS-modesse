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
                                    <h2 class="title">Login</h2>
                                </div>

                                <form method="POST" action="{{ route('login') }}">
                                    @csrf
                                    <label for="login-email">
                                        Username or email address
                                        <span class="required">*</span>
                                    </label>
                                    <input type="email" class="form-input form-wide" id="login-email" required />

                                    <label for="login-password">
                                        Password
                                        <span class="required">*</span>
                                    </label>
                                    <input type="password" class="form-input form-wide" id="login-password" required />

                                    <div class="form-footer">
                                        <div class="custom-control custom-checkbox mb-0">
                                            <input type="checkbox" class="custom-control-input" id="lost-password" />
                                            <label class="custom-control-label mb-0" for="lost-password">Remember
                                                me</label>
                                        </div>

                                        <a href="forgot-password.html"
                                            class="forget-password text-dark form-footer-right">Forgot
                                            Password?</a>
                                    </div>
                                    <button type="submit" class="btn btn-dark btn-md w-100">
                                        LOGIN
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main><!-- End .main -->

        @include('frontend/footer')