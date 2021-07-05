<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Department
 *
 * @property int $id
 * @property string $title
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Department newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Department newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Department query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Department whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Department whereTitle($value)
 * @mixin \Eloquent
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Direction[] $directions
 * @property-read int|null $directions_count
 */
class Department extends Model
{
    public $timestamps = false;

    public function directions()
    {
        return $this->hasMany('App\Direction');
    }
}
