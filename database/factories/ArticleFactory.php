<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Article;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Article::class, function (Faker $faker) {
    return [
        'id' => Str::uuid(),
        'title' => $faker->words(3, true),
        'body' => $faker->paragraphs(3, true)
    ];
});
