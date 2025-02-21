@extends('layouts.app')

@section('title', $sauce->name)

@section('content')
<div class="container">
    <div class="card mx-auto" style="max-width: 600px; align-items: center">
        <img src="{{ $sauce->imageUrl }}" class="card-img-top" style="max-height: 250px; max-width: fit-content"  alt="{{ $sauce->name }}">
        <div class="card-body">
            <h1 class="card-title text-center">{{ $sauce->name }}</h1>
            <p class="card-text"><strong>Description :</strong> {{ $sauce->description }}</p>
            <p class="card-text"><strong>Fabricant :</strong> {{ $sauce->manufacturer }}</p>
            <p class="card-text"><strong>Épice principale :</strong> {{ $sauce->mainPepper }}</p>
            <p class="card-text"><strong>Force :</strong> {{ $sauce->heat }}/10</p>
            <a href="{{ route('sauces.edit', $sauce->id) }}" class="btn btn-warning">Modifier</a>
            <form action="{{ route('sauces.destroy', $sauce->id) }}" method="POST" class="d-inline">
                @csrf
                @method('DELETE')
                <button type="submit" class="btn btn-danger">Supprimer</button>
            </form>
        </div>
    </div>
</div>
@endsection
