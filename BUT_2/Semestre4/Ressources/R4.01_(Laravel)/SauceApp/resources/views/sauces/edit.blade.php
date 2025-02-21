@extends('layouts.app')

@section('content')
<div class="container mt-5">
    <div class="card shadow-sm">
        <div class="card-header bg-warning text-dark">
            <h2 class="mb-0">Modifier la Sauce</h2>
        </div>
        <div class="card-body">
            <form action="{{ route('sauces.update', $sauce->id) }}" method="POST">
                @csrf
                @method('PUT')
                <div class="mb-3">
                    <label class="form-label">Nom :</label>
                    <input type="text" name="name" class="form-control" value="{{ $sauce->name }}" required>
                </div>
                <div class="mb-3">
                    <label class="form-label">Fabricant :</label>
                    <input type="text" name="manufacturer" class="form-control" value="{{ $sauce->manufacturer }}" required>
                </div>
                <div class="mb-3">
                    <label class="form-label">Description :</label>
                    <textarea name="description" class="form-control" rows="3" required>{{ $sauce->description }}</textarea>
                </div>
                <div class="mb-3">
                    <label class="form-label">Ingrédient principal :</label>
                    <input type="text" name="mainPepper" class="form-control" value="{{ $sauce->mainPepper }}" required>
                </div>
                <div class="mb-3">
                    <label class="form-label">Force :</label>
                    <input type="number" name="heat" class="form-control" min="1" max="10" value="{{ $sauce->heat }}" required>
                </div>
                <button type="submit" class="btn btn-success w-100">Mettre à jour</button>
            </form>
        </div>
    </div>
</div>
@endsection
