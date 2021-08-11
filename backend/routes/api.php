<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CourseController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);
Route::post('addcourse', [CourseController::class, 'addCourse']);
Route::get('list', [CourseController::class, 'list']);
Route::delete('delete/{id}', [CourseController::class, 'delete']);
Route::get('course/{id}', [CourseController::class, 'getCourse']);
Route::put('update/{id}', [CourseController::class, 'updateCourse']);
Route::get('search/{key}', [CourseController::class, 'search']);