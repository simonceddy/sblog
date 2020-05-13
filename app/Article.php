<?php

namespace App;

use App\Support\GeneratesUuid;
use Illuminate\Database\Eloquent\Model;
// use Illuminate\Support\Str;

class Article extends Model
{
    use GeneratesUuid;

    protected $with = ['categories'];

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    /**
     * Get the route key for the model.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'slug';
    }
}
