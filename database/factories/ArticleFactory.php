<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Article;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Article::class, function (Faker $faker) {
    return [
        'title' => $faker->words(mt_rand(1, 5), true),
        'body' => $faker->paragraphs(mt_rand(1, 7), true)
    ];
});
