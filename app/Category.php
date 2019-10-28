<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public $incrementing = false;

    /**
     * ID type.
     *
     * @var string
     */
    protected $keyType = 'string';

    public function articles()
    {
        return $this->belongsToMany(Article::class);
    }
}
