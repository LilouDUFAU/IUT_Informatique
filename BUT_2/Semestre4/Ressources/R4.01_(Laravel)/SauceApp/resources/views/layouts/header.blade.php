<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a class="navbar-brand logo" href="{{ url('/') }}">
            <img src="https://wallpapercave.com/wp/wp2092578.jpg" style="max-height: 50px; max-width: fit-content; border-radius: 25%;" alt="logo">
            HOT TAKES
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
            <div class="d-flex gap-2">
                <a class="btn btn-outline-primary" href="{{ route('sauces.index') }}">All Sauce</a>
                <a class="btn btn-primary" href="{{ route('sauces.create') }}">Create Sauce</a>
            </div>
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('login') }}">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('register') }}">Sign Up</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
