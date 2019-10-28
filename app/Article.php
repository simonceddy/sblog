<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    public $incrementing = false;

    /**
     * ID type.
     *
     * @var string
     */
    protected $keyType = 'string';

    protected $with = ['categories'];

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }
}
