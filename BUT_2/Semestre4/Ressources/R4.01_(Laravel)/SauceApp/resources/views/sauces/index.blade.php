@extends('layouts.app')

@section('title', 'Liste des Sauces')

@section('content')
<div class="container">
    <h1 class="mb-4 text-center">Liste des Sauces</h1>
    <a href="{{ route('sauces.create') }}" class="btn btn-success mb-3">Ajouter une nouvelle sauce</a>
    <div class="row">
        @foreach($sauces as $sauce)
            <div class="col-md-4 mb-4">
                <div class="card" style="align-items: center">
                    <img src="{{ $sauce->imageUrl }}" class="card-img-top" style="max-height: 250px; max-width: fit-content" alt="{{ $sauce->name }}">
                    <div class="card-body">
                        <h5 class="card-title">{{ $sauce->name }}</h5>
                        <p class="card-text">{{ Str::limit($sauce->description, 100) }}</p>
                        <a href="{{ route('sauces.show', $sauce->id) }}" class="btn btn-primary">Voir plus</a>
                    </div>
                </div>
            </div>
        @endforeach
    </div>
</div>
@endsection
