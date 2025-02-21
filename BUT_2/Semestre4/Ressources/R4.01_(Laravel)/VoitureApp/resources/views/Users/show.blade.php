@extends('layouts.app')

@section('content')
<div class="container">
    <h2>Détails du Client</h2>
    <p><strong>ID:</strong> {{ $client->id }}</p>
    <p><strong>Nom:</strong> {{ $client->nom }}</p>
    <p><strong>Email:</strong> {{ $client->email }}</p>

    <a href="{{ route('user.index') }}" class="btn btn-secondary">Retour</a>
</div>
@endsection
