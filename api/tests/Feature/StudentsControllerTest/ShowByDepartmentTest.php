<?php


namespace Tests\Feature\StudentsControllerTest;


use App\Direction;
use App\Student;
use App\User;
use Tests\TestCase;

class ShowByDepartmentTest extends TestCase
{

    /**
     * @var \Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model|mixed
     */
    protected $user;

    protected function setUp(): void
    {
        parent::setUp();
        $this->user = factory(User::class)->create();
    }


    /**
     * Получаем студентов по выбранному факультету
     * @test
    */
    public function show_by_department()
    {
        $student = factory(Student::class)->create();
        $direction = Direction::findOrFail($student->direction_id);
        $response = $this->loginAs($this->user)
            ->getJson(route('students.department',$direction->department_id));
        dd($response);
        $this->assertEquals($student->direction_id, $response->json('data.0.direction_id'));
    }

    /**
     * Получаем студентов по выбранному факультету
     * @test
     */
    public function not_allowed_show_by_department()
    {
        $response = $this->loginAs($this->user)->getJson(route('students.department', 250))
        ->assertStatus(422);
    }

}
