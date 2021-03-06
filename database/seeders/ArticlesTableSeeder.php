<?php
namespace Database\Seeders;

use Illuminate\Database\Eloquent\Collection;
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
        factory(App\Article::class, 250)->create()->each(
            function (\App\Article $article) {
                $a = mt_rand(1, 12);

                $categories = new Collection();

                for ($i = 0; $i < $a; $i++) {
                    $categories[] = \App\Category::firstOrCreate(
                        factory(\App\Category::class)->raw()
                    );
                }

                // dd($categories);

                $article->categories()->attach($categories->unique('name'));
            }
        );
    }
}
