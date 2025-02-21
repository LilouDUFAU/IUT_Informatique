@extends('layouts.app')

@section('content')
<div class="container">
    <h2>Ajouter un Client</h2>

    <form action="{{ route('user.store') }}" method="POST">
        @csrf
        <div class="mb-3">
            <label for="nom" class="form-label">Nom :</label>
            <input type="text" class="form-control" name="nom" required>
        </div>

        <div class="mb-3">
            <label for="email" class="form-label">Email :</label>
            <input type="email" class="form-control" name="email" required>
        </div>

        <button type="submit" class="btn btn-success">Ajouter</button>
        <a href="{{ route('user.index') }}" class="btn btn-secondary">Retour</a>
    </form>
</div>
@endsection
