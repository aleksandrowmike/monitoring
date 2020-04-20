<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Employment
 *
 * @property int $id
 * @property int $student_id
 * @property int $company_id
 * @property int $position_id
 * @property bool $speciality
 * @property-read \App\Company $companies
 * @property-read \App\Position $positions
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Employment newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Employment newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Employment query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Employment whereCompanyId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Employment whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Employment wherePositionId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Employment whereSpeciality($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Employment whereStudentId($value)
 * @mixin \Eloquent
 */
class Employment extends Model
{
    public $timestamps = false;

    public function students()
    {
        return $this->belongsTo('App\Student');
    }

    public function companies()
    {
        return $this->belongsTo('App\Company');
    }
    public function positions()
    {
        return $this->belongsTo('App\Position');
    }
}
