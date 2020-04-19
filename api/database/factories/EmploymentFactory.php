<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Company;
use App\Employment;
use App\Position;
use App\Student;
use Faker\Generator as Faker;

$factory->define(Employment::class, function (Faker $faker) {
    return [
        'student_id' => factory(Student::class)->create()->first()->id,
        'company_id' => factory(Company::class)->create()->first()->id,
        'position_id' => factory(Position::class)->create()->first()->id,
        'speciality' => $faker->boolean
    ];
});
