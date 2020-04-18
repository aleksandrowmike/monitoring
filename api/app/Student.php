<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{

    public function directions()
    {
        return $this->hasMany('App\Direction');
    }

    public function categories()
    {
        return $this->hasMany('App\Category');
    }

    public function plans()
    {
        return $this->belongsTo('App\Plan');
    }
}
