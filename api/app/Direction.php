<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Direction
 *
 * @property int $id
 * @property string $title
 * @property string $code
 * @property int $department_id
 * @property int $degree_id
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Direction newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Direction newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Direction query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Direction whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Direction whereDegreeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Direction whereDepartmentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Direction whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Direction whereTitle($value)
 * @mixin \Eloquent
 */
class Direction extends Model
{
    //
}
