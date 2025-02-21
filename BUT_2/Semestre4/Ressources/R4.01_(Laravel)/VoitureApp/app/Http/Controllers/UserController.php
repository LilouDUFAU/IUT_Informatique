<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    // 1️⃣ Afficher la liste des Users
    public function index()
    {
        $Users = User::paginate(5); // Paginer les résultats
        return view('Users.index', compact('Users'));
    }

    // 2️⃣ Afficher le formulaire de création
    public function create()
    {
        return view('Users.create');
    }

    // 3️⃣ Enregistrer un nouveau User
    public function store(Request $request)
    {
        $request->validate([
            'nom' => 'required|string|max:255',
            'email' => 'required|email|unique:Users,email',
        ]);

        User::create($request->all());
        return redirect()->route('user.index')->with('success', 'User ajouté avec succès.');
    }

    // 4️⃣ Afficher un User
    public function show(User $User)
    {
        return view('Users.show', compact('User'));
    }

    // 5️⃣ Afficher le formulaire d'édition
    public function edit(User $User)
    {
        return view('Users.edit', compact('User'));
    }

    // 6️⃣ Mettre à jour un User
    public function update(Request $request, User $User)
    {
        $request->validate([
            'nom' => 'required|string|max:255',
            'email' => 'required|email|unique:Users,email,'.$User->id,
        ]);

        $User->update($request->all());
        return redirect()->route('user.index')->with('success', 'User mis à jour avec succès.');
    }

    // 7️⃣ Supprimer un User
    public function destroy(User $User)
    {
        $User->delete();
        return redirect()->route('user.index')->with('success', 'User supprimé.');
    }
}
