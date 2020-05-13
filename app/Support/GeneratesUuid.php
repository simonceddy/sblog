<?php
namespace App\Support;

use Illuminate\Support\Str;

trait GeneratesUuid
{
    /**
     * Boot the Model.
     */
    public static function boot()
    {
        parent::boot();

        static::creating(function ($instance) {
            $instance->uuid = Str::uuid();
        });
    }
}
