<?php

namespace Database\Factories;

use App\Article;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ArticleFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Article::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $date = $this->faker->unique()->date('Y-m-d H:i:s');
        return [
            'title' => $title = $this->faker->words(mt_rand(1, 5), true),
            'body' => $this->faker->paragraphs(mt_rand(1, 7), true),
            'slug' => Str::slug("{$title} {$date}")
        ];
    }
}
