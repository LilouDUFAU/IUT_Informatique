<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a class="navbar-brand logo" href="{{ url('/') }}">
            <img src="https://wallpapercave.com/wp/wp2092578.jpg" style="max-height: 50px; max-width: fit-content; border-radius: 25%;" alt="logo">
            HOT TAKES
        </a>
        <div class="collapse navbar-collapse justify-between">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('sauces.index') }}">All Sauce</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('sauces.create') }}">Create Sauce</a>
                </li>
            </ul>
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
