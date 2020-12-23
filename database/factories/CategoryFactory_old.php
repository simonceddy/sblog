<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Category;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Category::class, function (Faker $faker) {
    return [
        'name' => ($name = $faker->jobTitle)/* ->words(mt_rand(1, 2), true) */,
        'slug' => Str::slug($name)
    ];
});
