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
                    <div class="col-md-6 mx-auto">
                        <div class="heading mb-1">
                            <h2 class="title">Register - Step 3: Profile Info</h2>
                        </div>

                        <form method="POST" action="{{ route('register.step3') }}" enctype="multipart/form-data">
                            @csrf

                            <label for="gender">
                                Gender
                                <span class="required">*</span>
                            </label>
                            <select name="gender" id="gender" class="form-input form-wide" required>
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>

                            <label for="dob">
                                Date of Birth
                                <span class="required">*</span>
                            </label>
                            <input type="date" name="dob" class="form-input form-wide" id="dob" required />

                            <label for="profile_photo">
                                Profile Photo (optional)
                            </label>
                            <input type="file" name="profile_photo" class="form-input form-wide" id="profile_photo"
                                accept="image/*" />

                            <button type="submit" class="btn btn-dark btn-md w-100 mt-3">
                                NEXT
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main><!-- End .main -->

        @include('frontend/footer')