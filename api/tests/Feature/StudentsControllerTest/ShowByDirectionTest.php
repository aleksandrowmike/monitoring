<?php


namespace Tests\Feature\StudentsControllerTest;


use App\Student;
use App\User;
use Tests\TestCase;

class ShowByDirectionTest extends TestCase
{
    /**
     * Получаем студентов по выбранному направлению
     * @test
     */
    public function show_by_direction()
    {
        $user = factory(User::class)->create();
        $student = factory(Student::class)->create();
        $response =
            $this->loginAs($user)->getJson(route('students.directions',$student->direction_id))
                ->assertSuccessful();
        $this->assertEquals($student->direction_id, $response->json('data.0.direction_id'));
    }

    /**
     * Получаем студентов по выбранному направлению
     * @test
     */
    public function not_allowed_show_by_department()
    {
        $user = factory(User::class)->create();
        $response = $this->loginAs($user)->getJson(route('students.directions', 250))
            ->assertStatus(422);
    }
}
