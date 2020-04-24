<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Student
 *
 * @property int $id
 * @property int $direction_id
 * @property int $category_id
 * @property int|null $plan_id
 * @property string $name
 * @property string $email
 * @property string $phone
 * @property bool $specialty_activity
 * @property string $year_graduate
 * @property bool $agreement
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Category[] $categories
 * @property-read int|null $categories_count
 * @property-read \App\Direction $direction
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Direction[] $directions
 * @property-read int|null $directions_count
 * @property-read \App\Plan $plans
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Student newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Student newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Student query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Student whereAgreement($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Student whereCategoryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Student whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Student whereDirectionId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Student whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Student whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Student whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Student wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Student wherePlanId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Student whereSpecialtyActivity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Student whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Student whereYearGraduate($value)
 * @mixin \Eloquent
 */
class Student extends Model
{

    /*
     * Используется для отоборажения планов студента
     * */
    public function plan()
    {
        return $this->belongsTo(Plan::class);
    }

    public function employment()
    {
        return $this->hasOne(Employment::class)
            ->join('companies', 'employments.company_id', '=', 'companies.id')
            ->join('positions', 'employments.position_id', '=', 'positions.id')
            ->select('employments.id',
                'employments.student_id',
                'companies.title as company',
                'positions.title as position',
                'companies.city');
    }

    public function directions()
    {
        return $this->hasMany('App\Direction');
    }

    public function employments()
    {
        return $this->hasOne('App\Employment');
    }

    public function direction()
    {
        return $this->belongsTo('App\Direction');
    }

    public function category()
    {
        return $this->belongsTo('App\Category');
    }

    public function plans()
    {
        return $this->belongsTo(Plan::class);
    }
}
