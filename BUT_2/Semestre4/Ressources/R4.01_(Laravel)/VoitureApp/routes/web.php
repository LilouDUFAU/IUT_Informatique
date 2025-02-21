<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return view('welcome');
});

Route::resource('users', UserController::class);
// Afficher la liste des user
Route::get('/user', [UserController::class, 'index'])->name('user.index');

// Afficher le formulaire de création d'un user
Route::get('/user/create', [UserController::class, 'create'])->name('user.create');

// Enregistrer un nouveau user
Route::post('/user', [UserController::class, 'store'])->name('user.store');

// Afficher un user spécifique
Route::get('/user/{user}', [UserController::class, 'show'])->name('user.show');

// Afficher le formulaire d'édition d'un user
Route::get('/user/{user}/edit', [UserController::class, 'edit'])->name('user.edit');

// Mettre à jour un user existant
Route::put('/user/{user}', [UserController::class, 'update'])->name('user.update');
Route::patch('/user/{user}', [UserController::class, 'update'])->name('user.update');

// Supprimer un user
Route::delete('/user/{user}', [UserController::class, 'destroy'])->name('user.destroy');


Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
