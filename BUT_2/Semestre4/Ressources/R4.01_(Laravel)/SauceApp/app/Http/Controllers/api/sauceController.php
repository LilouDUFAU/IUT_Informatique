<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Sauce;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\JsonResponse;

class sauceController extends Controller
{
    public function index(): JsonResponse
    {
        $sauces = Sauce::all();
        return response()->json($sauces);
    }

    public function show($id): JsonResponse
    {
        $sauce = Sauce::findOrFail($id);
        return response()->json($sauce);
    }

    public function store(Request $request): JsonResponse
    {
        $sauce = Sauce::create([
            'name' => $request->name,
            'manufacturer' => $request->manufacturer,
            'description' => $request->description,
            'imageUrl' => $request->image,
            'mainPepper' => $request->mainPepper,
            'heat' => $request->heat,
            'userId' => Auth::id(),
        ]);
        return response()->json($sauce, 201);
    }

    public function update(Request $request, $id): JsonResponse
    {
        $sauce = Sauce::findOrFail($id);
        $sauce->update($request->all());
        return response()->json($sauce);
    }

    public function destroy($id): JsonResponse
    {
        Sauce::destroy($id);
        return response()->json(['message' => 'Sauce deleted successfully'], 204);
    }
}
