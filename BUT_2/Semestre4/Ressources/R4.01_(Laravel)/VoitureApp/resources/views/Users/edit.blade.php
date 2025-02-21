@extends('layouts.app')

@section('content')
<div class="container">
    <h2>Modifier le Client</h2>

    <form action="{{ route('user.update', $client) }}" method="POST">
        @csrf @method('PUT')

        <div class="mb-3">
            <label for="nom" class="form-label">Nom :</label>
            <input type="text" class="form-control" name="nom" value="{{ $client->nom }}" required>
        </div>

        <div class="mb-3">
            <label for="email" class="form-label">Email :</label>
            <input type="email" class="form-control" name="email" value="{{ $client->email }}" required>
        </div>

        <button type="submit" class="btn btn-primary">Mettre à jour</button>
        <a href="{{ route('user.index') }}" class="btn btn-secondary">Retour</a>
    </form>
</div>
@endsection
