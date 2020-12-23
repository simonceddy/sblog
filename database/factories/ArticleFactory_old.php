<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Article;
use Faker\Generator as Faker;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;

$factory->define(Article::class, function (Faker $faker) {
    $date = $faker->unique()->date('Y-m-d H:i:s');
    return [
        'title' => $title = $faker->words(mt_rand(1, 5), true),
        'body' => $faker->paragraphs(mt_rand(1, 7), true),
        'slug' => Str::slug("{$title} {$date}")
    ];
});
