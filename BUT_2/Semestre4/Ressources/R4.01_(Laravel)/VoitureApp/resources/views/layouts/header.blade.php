<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand" href="{{ route('user.index') }}">Gestion user</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('user.index') }}">Liste des user</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('user.create') }}">Ajouter un Client</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
