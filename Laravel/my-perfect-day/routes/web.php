<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use App\Policies\PostPolicy;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/login', [AuthController::class, 'login']);
Route::post('/login', [AuthController::class, 'authenticate']);
Route::get('/post', [PostController::class, 'view']);
// ->middleware("can:view,App\Models\Post")
// ->can('view', App\Models\Post::class);

Route::fallback(function(){
    return view('not-found');
});