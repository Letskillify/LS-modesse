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
                                    <h2 class="title">Register - Step 2: Address</h2>
                                </div>

                                <form method="POST" action="{{ route('register.step2') }}">
                                    @csrf

                                    <label for="address">
                                        Address
                                        <span class="required">*</span>
                                    </label>
                                    <input type="text" name="address" class="form-input form-wide" id="address"
                                        required />

                                    <label for="city">
                                        City
                                        <span class="required">*</span>
                                    </label>
                                    <input type="text" name="city" class="form-input form-wide" id="city" required />

                                    <label for="state">
                                        State
                                        <span class="required">*</span>
                                    </label>
                                    <input type="text" name="state" class="form-input form-wide" id="state" required />

                                    <label for="pincode">
                                        Pincode
                                        <span class="required">*</span>
                                    </label>
                                    <input type="text" name="pincode" class="form-input form-wide" id="pincode"
                                        required />

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