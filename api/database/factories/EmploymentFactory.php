<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Company;
use App\Employment;
use App\Position;
use App\Student;
use Faker\Generator as Faker;

$factory->define(Employment::class, function (Faker $faker) {
    return [
        'student_id' => $faker->numberBetween(7,1000),
        'company_id' => factory(Company::class),
        'position_id' => factory(Position::class),
        'speciality' => $faker->boolean
    ];
});
