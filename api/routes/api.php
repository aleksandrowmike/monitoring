<?php
Route::group(['prefix' => 'auth'], function () {

    Route::post('sign-in', 'AuthController@signIn')
        ->name('auth.sign-in');
    Route::post('sign-up', 'AuthController@signUp')
        ->name('auth.sign-up');

    Route::get('user', 'AuthController@user')
        ->name('auth.user')
        ->middleware('auth:api');
});

Route::prefix('students')->group(function (){

    Route::get('department/{id}', 'StudentController@showByDepartment')
        ->name('students.department');

    Route::get('direction/{id}', 'StudentController@showByDirection')
        ->name('students.directions');

    Route::get('filter', 'StudentController@filter')
        ->name('students.filter');
});

Route::resource('departments', 'DepartmentController')
    ->only(['index', 'show'])
    ->names('departments');

Route::resource('students', 'StudentController')
    ->only(['store'])
    ->names('students');

Route::middleware('auth:api')->group(function () {

    Route::resource('directions', 'DirectionController')
        ->only(['show']);

    Route::resource('students', 'StudentController')
        ->only(['index','update', 'delete']);

//    Route::resource('statistics', 'StatisticsController')
//        ->only(['index','show']);


});
