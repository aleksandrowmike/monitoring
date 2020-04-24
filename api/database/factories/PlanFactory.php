<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Plan;
use Faker\Generator as Faker;

$factory->define(Plan::class, function (Faker $faker) {
    return [
        'job' => $faker->boolean,
        'army' => $faker->boolean,
        'business' => $faker->boolean,
        'decree' =>  $faker->boolean,
        'education' => $faker->boolean,
        'other' => $faker->randomAscii,
        'level' =>  'Бакалавриат',
        'university' => 'МГУ им Ломоносова'
    ];
});
