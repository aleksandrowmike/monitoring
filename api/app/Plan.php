<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    protected $fillable = ['job','decree','education','army','business','other','level','university'];
    public $timestamps = false;
}
