<?php

Route::group(['prefix' => 'auth'], function () {
    Route::post('sign-in', 'AuthController@signIn')->name('auth.sign-in');
    Route::post('sign-up', 'AuthController@signUp')->name('auth.sign-up');
    Route::get('user', 'AuthController@user')->name('auth.user')->middleware('auth:api');
});

Route::resource('departments', 'DepartmentController')
    ->only(['index', 'show'])
    ->names('departments');

Route::resource('students', 'StudentsController')
    ->only(['store']);

Route::middleware('auth:api')->group(function () {
    Route::resource('students', 'StudentController')
        ->only(['index','update', 'delete']);

    Route::resource('statistics', 'StatisticsController')
        ->only(['index','show']);

    Route::prefix('students')->group(function (){
        Route::get('department/{id}', 'StudentController@showByDepartment');
        Route::get('direction/{id}', 'StudentController@showByDirection');
        Route::get('filter/{query}', 'StudentController@filter');
    });
});
