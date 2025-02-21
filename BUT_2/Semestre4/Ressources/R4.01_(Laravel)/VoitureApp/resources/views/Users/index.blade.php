@extends('layouts.app')

@section('content')
<div class="container">
    <h2>Liste des users</h2>
    <a href="{{ route('user.create') }}" class="btn btn-primary mb-3">Ajouter un Client</a>

    @if(session('success'))
        <div class="alert alert-success">{{ session('success') }}</div>
    @endif

    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            @foreach($user as $client)
            <tr>
                <td>{{ $client->id }}</td>
                <td>{{ $client->nom }}</td>
                <td>{{ $client->email }}</td>
                <td>
                    <a href="{{ route('user.show', $client) }}" class="btn btn-info">Voir</a>
                    <a href="{{ route('user.edit', $client) }}" class="btn btn-warning">Éditer</a>
                    <form action="{{ route('user.destroy', $client) }}" method="POST" class="d-inline">
                        @csrf @method('DELETE')
                        <button type="submit" class="btn btn-danger" onclick="return confirm('Supprimer ce client ?')">Supprimer</button>
                    </form>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>

    {!! $user->links('pagination::bootstrap-4') !!}
</div>
@endsection
