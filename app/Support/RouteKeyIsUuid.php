<?php
namespace App\Support;

trait RouteKeyIsUuid
{
    public function getRouteKeyName()
    {
        return 'uuid';
    }
}
