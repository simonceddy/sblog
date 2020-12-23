<?php
namespace App;

use App\Support\GeneratesUuid;
use Illuminate\Database\Eloquent\{
    Factories\HasFactory,
    Model
};

class Category extends Model
{
    use GeneratesUuid;
    use HasFactory;

    public function articles()
    {
        return $this->belongsToMany(Article::class);
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
