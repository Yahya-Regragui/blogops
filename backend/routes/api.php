<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArticleController;

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

//List Articles

Route::get('/articles', [ArticleController::class, 'index']);

//List one article
Route::get('/article/{id}', [ArticleController::class, 'show']);

//Add Article
Route::post('/article', [ArticleController::class, 'store']);

//Edit Article
Route::put('/article', [ArticleController::class, 'store']);

//Delete Article
Route::delete('/article/{id}', [ArticleController::class, 'destroy']);