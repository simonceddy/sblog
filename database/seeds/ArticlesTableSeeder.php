<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ArticlesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Article::class, 50)->create()->each(
            function (App\Article $article) {
                $categories = factory(App\Category::class, mt_rand(1, 12))->create();
                $article->categories()->attach($categories);
            }
        );
    }
}
