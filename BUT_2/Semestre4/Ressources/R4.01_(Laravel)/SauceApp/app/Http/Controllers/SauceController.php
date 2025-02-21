<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sauce;
use Illuminate\Support\Facades\Auth;

class SauceController extends Controller
{
    public function index() {
        $sauces = Sauce::all();
        return view('sauces.index', compact('sauces'));
    }

    public function show($id) {
        $sauce = Sauce::findOrFail($id);
        return view('sauces.show', compact('sauce'));
    }

    public function create() {
        return view('sauces.create');
    }

    public function edit($id) {
        $sauce = Sauce::findOrFail($id);
        return view('sauces.edit', compact('sauce'));
    }

    public function store(Request $request)
{
    Sauce::create([
        'name' => $request->name,
        'manufacturer' => $request->manufacturer,
        'description' => $request->description,
        'imageUrl' => $request->imageUrl,
        'mainPepper' => $request->mainPepper,
        'heat' => $request->heat,
        'userId' => Auth::id(), // Récupérer l'utilisateur connecté
    ]);
}

    public function update(Request $request, $id)
    {
        $sauce = Sauce::findOrFail($id);
        $sauce->update($request->all());
        return response()->json($sauce, 200);
    }

    public function destroy($id)
    {
        Sauce::destroy($id);
        return response()->json(null, 204);
    }
}
