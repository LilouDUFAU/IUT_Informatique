<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::apiResource('sauces', 'App\Http\Controllers\API\SauceController');
