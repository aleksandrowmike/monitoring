<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Plan
 *
 * @property int $id
 * @property bool $job
 * @property bool $army
 * @property bool $business
 * @property bool $decree
 * @property bool $education
 * @property string $other
 * @property string $level
 * @property string $university
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Plan newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Plan newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Plan query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Plan whereArmy($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Plan whereBusiness($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Plan whereDecree($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Plan whereEducation($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Plan whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Plan whereJob($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Plan whereLevel($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Plan whereOther($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Plan whereUniversity($value)
 * @mixin \Eloquent
 */
class Plan extends Model
{
    protected $fillable = ['job','decree','education','army','business','other','level','university'];
    public $timestamps = false;

    public function student()
    {
        return $this->hasMany('App\Student');
    }
}
