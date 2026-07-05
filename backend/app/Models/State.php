<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class State extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'states';

    protected $fillable = [
        'name',
        'slug',
        'region',
        'cities'
    ];
}
