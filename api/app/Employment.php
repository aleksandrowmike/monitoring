<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employment extends Model
{
    public $timestamps = false;
    public function companies()
    {
        return $this->belongsTo('App\Company');
    }
    public function positions()
    {
        return $this->belongsTo('App\Position');
    }
}
