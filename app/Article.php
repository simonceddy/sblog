<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

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

    /**
     * Boot the Model.
     */
    public static function boot()
    {
        parent::boot();

        static::creating(function ($instance) {
            $instance->id = Str::uuid();
        });
    }
}
