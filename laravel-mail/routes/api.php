<?php

use App\Http\Controllers\ContactController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Password;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/form', [ContactController::class, 'store']);
Route::post('/forgot-password', function (Request $request) {
    $request->validate(['email' => 'required|email']);
 
    try {
        $status = Password::sendResetLink(
            $request->only('email')
        );
     
        return response($status);
    } catch (\Throwable $th) {
        throw $th;
    }
})->name('password.reset');
