<?php

use App\Http\Controllers\ContactController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Password;
use App\Models\User;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


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

Route::post('/user', function(Request $request) {
    $request->validate([
        'name'=>'required',
        'email' => 'required|email',
        'password' => 'required|min:8',
    ]);

    try {
        return User::create($request->only('name','email','password'));

    } catch (\Throwable $th) {
        throw $th;
    }
 
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

Route::post('/reset-password', function (Request $request) {
    $request->validate([
        'token' => 'required',
        'email' => 'required|email',
        'password' => 'required|min:8|confirmed',
    ]);
 
    $status = Password::reset(
        $request->only('email', 'password', 'password_confirmation', 'token'),
        function (User $user, string $password) {
            $user->forceFill([
                'password' => bcrypt($password)
            ])->setRememberToken(Str::random(60));
            
            $user->save();
 
            event(new PasswordReset($user));
        }
    );
    // dd($status);
    return $status === Password::PASSWORD_RESET
                ? 'deu certo!'
                : $status;
})->middleware('guest')->name('password.update');
