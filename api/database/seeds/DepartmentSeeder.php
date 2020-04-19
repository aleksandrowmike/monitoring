<?php

use App\Department;
use Illuminate\Database\Seeder;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Department::create( [
            'id'=>1,
            'title'=>'Арзамасский филиал - Естественно-географический факультет'
        ] );
        Department::create( [
            'id'=>2,
            'title'=>'Арзамасский филиал - Историко-филологический факультет'
        ] );
        Department::create( [
            'id'=>3,
            'title'=>'Арзамасский филиал - Психолого-педагогический факультет'
        ] );
        Department::create( [
            'id'=>4,
            'title'=>'Арзамасский филиал - Факультет дошкольного и начального образования'
        ] );
        Department::create( [
            'id'=>5,
            'title'=>'Арзамасский филиал - Факультет экономики и права'
        ] );
        Department::create( [
            'id'=>6,
            'title'=>'Арзамасский филиал - Физико-математический факультет'
        ] );
        Department::create( [
            'id'=>7,
            'title'=>'Балахнинский филиал'
        ] );
        Department::create( [
            'id'=>8,
            'title'=>'Высшая школа общей и прикладной физики'
        ] );
        Department::create( [
            'id'=>9,
            'title'=>'Дзержинский филиал'
        ] );
        Department::create( [
            'id'=>10,
            'title'=>'Институт биологии и биомедицины'
        ] );
        Department::create( [
            'id'=>11,
            'title'=>'Институт информационных технологий, математики и механики'
        ] );
        Department::create( [
            'id'=>12,
            'title'=>'Институт международных отношений и мировой истории'
        ] );
        Department::create( [
            'id'=>13,
            'title'=>'Институт реабилитации и здоровья человека'
        ] );
        Department::create( [
            'id'=>14,
            'title'=>'Институт филологии и журналистики'
        ] );



        Department::create( [
            'id'=>15,
            'title'=>'Институт экономики и предпринимательства'
        ] );



        Department::create( [
            'id'=>16,
            'title'=>'Павловский филиал'
        ] );



        Department::create( [
            'id'=>17,
            'title'=>'Радиофизический факультет'
        ] );



        Department::create( [
            'id'=>18,
            'title'=>'Факультет социальных наук'
        ] );



        Department::create( [
            'id'=>19,
            'title'=>'Факультет физической культуры и спорта'
        ] );



        Department::create( [
            'id'=>20,
            'title'=>'Физический факультет'
        ] );



        Department::create( [
            'id'=>21,
            'title'=>'Химический факультет'
        ] );



        Department::create( [
            'id'=>22,
            'title'=>'Юридический факультет'
        ] );



        Department::create( [
            'id'=>23,
            'title'=>'Арзамасский филиал - Отделение среднего профессионального образования (Колледж им. В.А.Новикова)'
        ] );
    }
}
