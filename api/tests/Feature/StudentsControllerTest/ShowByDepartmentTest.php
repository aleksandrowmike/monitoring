<?php


namespace Tests\Feature\StudentsControllerTest;


use App\Direction;
use App\Student;
use App\User;
use DB;
use Tests\TestCase;

class ShowByDepartmentTest extends TestCase
{

    /**
     * Получаем студентов по выбранному факультету
     * @test
    */
    public function show_by_department()
    {
        $user = factory(User::class)->create();
        $student = factory(Student::class)->create();
        $direction = DB::table('directions')->find($student->direction_id);
        $response =
            $this->loginAs($user)->getJson(route('students.department',$direction->department_id))
        ->assertSuccessful();
        $this->assertEquals($student->direction_id, $response->json('data.0.direction_id'));
    }

    /**
     * Получаем студентов по выбранному факультету
     * @test
     */
    public function not_allowed_show_by_department()
    {
        $user = factory(User::class)->create();
        $response = $this->loginAs($user)->getJson(route('students.department', 250))
        ->assertStatus(422);
    }

}
