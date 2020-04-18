<?php

namespace App\Utils;


class UtilsArr
{
    public static function returnStudentsArray($fetched): array {
        $return = [];
        foreach($fetched as $student) {
            array_push($return, [
                'student' => [
                    'id' => $student->id,
                    'name' => $student->name,
                    'email' => $student->email,
                    'phone' => $student->phone,
                    'category' => $student->category_student,
                    'year_graduate' => $student->year_graduate,
                    'agreement' => $student->agreement,
                    'activity' => $student->activity
                ],
                'plans' => [
                    'education' => $student->education,
                    'job' => $student->job,
                    'decree' => $student->decree,
                    'army' => $student->army,
                    'business' => $student->business,
                    'other' => $student->other
                ],
                'job' => [
                    'employment' => $student->employment,
                    'position' => $student->position,
                    'specialty' => $student->specialty,
                    'company' => [
                        'name' => $student->company_name,
                        'city' => $student->company_city
                    ]
                ],
                'continuing_education' => [
                    'university' => $student->university,
                    'level' => $student->level
                ],
                'direction' => [
                    'id' => $student->directions_id,
                    'name' => $student->directions_name,
                    'level' => $student->traning_name,
                    'code' => $student->code
                ],
                'faculty' => [
                    'id' => $student->faculty_id,
                    'name' => $student->faculty_name
                ]
            ]);
        }
        return $return;
    }
}
