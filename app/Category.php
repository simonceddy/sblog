<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

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
