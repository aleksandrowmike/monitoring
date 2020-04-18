<?php


namespace Tests\Feature\StudentsControllerTest;


use App\Company;
use App\Employment;
use App\Plan;
use App\Position;
use App\Student;
use App\User;
use Tests\TestCase;

class IndexTest extends TestCase
{
    /**
     * Получение всех студентов
     * @test
     */

    public function index()
    {
        $user = factory(User::class)->create();
        $employment = factory(Employment::class)->create();
        $student = factory(Student::class)->create()->each(function ($st) {
            $st->plans = Plan::findOrFail($st->plan_id);
            $st->employment = Employment::where('student_id', $st->id)->get()->each(function ($employment){
                $employment->company = Company::findOrFail($employment->company_id);
                $employment->position = Position::findOrFail($employment->position_id)->title;
            });
        });

        $response = $this->loginAs($user)->getJson(route('students.index'));
        $this->assertEquals(true, $student);
    }
}
