@extends('layouts.app')

@section('content')
<div class="container mt-5">
    <div class="card shadow-sm">
        <div class="card-header bg-primary text-white">
            <h2 class="mb-0">Ajouter une Sauce</h2>
        </div>
        <div class="card-body">
            <form action="{{ route('sauces.store') }}" method="POST" enctype="multipart/form-data">
                @csrf
                <div class="mb-3">
                    <label class="form-label">Nom :</label>
                    <input type="text" name="name" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label class="form-label">Fabricant :</label>
                    <input type="text" name="manufacturer" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label class="form-label">Description :</label>
                    <textarea name="description" class="form-control" rows="3" required></textarea>
                </div>
                <div class="mb-3">
                    <label class="form-label">Ingrédient principal :</label>
                    <input type="text" name="mainPepper" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label class="form-label">Force :</label>
                    <input type="number" name="heat" class="form-control" min="1" max="10" required>
                </div>
                <div class="mb-3">
                    <label class="form-label">Image :</label>
                    <input type="text" name="image" class="form-control">
                </div>
                <button type="submit" class="btn btn-primary w-100">Ajouter</button>
            </form>
        </div>
    </div>
</div>
@endsection
