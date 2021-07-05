<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Position
 *
 * @property int $id
 * @property string $title
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Position newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Position newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Position query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Position whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Position whereTitle($value)
 * @mixin \Eloquent
 */
class Position extends Model
{
    protected $fillable = ['title'];
    public $timestamps = false;
}
