<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class City extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'cities';

    protected $fillable = [
        'name',
        'slug',
        'state',
        'region',
        'description',
        'food',
        'festivals',
        'language',
        'art',
        'architecture',
        'history',
        'images'
    ];
}
