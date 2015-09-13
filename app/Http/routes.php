<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', ['uses'=> 'PagesController@index', 'as'=>'pages.frontend.index']);
Route::get('login', ['uses'=>'UsersController@getLogin', 'as'=>'users.frontend.login']);
Route::post('login', ['uses'=>'UsersController@postLogin', 'as'=>'users.frontend.login']);