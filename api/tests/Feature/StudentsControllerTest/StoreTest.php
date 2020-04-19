<?php


namespace Tests\Feature\StudentsControllerTest;


use App\Employment;
use App\Plan;
use App\Student;
use Tests\TestCase;

class StoreTest extends TestCase
{
    /**
     * Создание студента
     * @test
    */

    public function store()
    {
        $response = $this->postJson(route('students.store'), [
            'name' => 'Иванов Иван Иванович',
            'email' => 'test@test.ru',
            'phone' => '89024567654',
            'plans' => [
                'job' => true,
                'army' => true,
                'business' => true,
                'decree' =>  true,
                'education' => true,
                'other' => 'Я собираюсь ничего не делать',
                'level' =>  'Бакалавриат',
                'university' => 'МГУ им Ломоносова'
            ],
            'employment' => [
                'company' => [
                    'title' => 'Netcraker',
                    'city' => 'Нижний Новгород',
                ],
                'position' => 'UX - инженер',
                'speciality' => true
            ],
            'specialty_activity' => true,
            'year_graduate' => '2020',
            'agreement' => true,
            'direction_id' => 1,
            'category_id' => 1
        ]);
        $this->assertNotNull($response->json('data.id'));
        $student = Student::findOrFail($response->json('data.id'));
        $plan = Plan::findOrFail($student->plan_id);
        $employment = Employment::where('student_id',$student->plan_id);
    }

    /**
     * Создание студента который не указал свои планы
     * @test
     */
    public function store_for_plans_null()
    {
        $response = $this->postJson(route('students.store'), [
            'name' => 'Иванов Иван Иванович',
            'email' => 'test@test.ru',
            'phone' => '89024567654',
            'plans' => null,
            'employment' => [
                'company' => [
                    'title' => 'Netcraker',
                    'city' => 'Нижний Новгород',
                ],
                'position' => 'UX - инженер',
                'speciality' => true
            ],
            'specialty_activity' => true,
            'year_graduate' => '2020',
            'agreement' => true,
            'direction_id' => 1,
            'category_id' => 1
        ]);
        $this->assertNotNull($response->json('data.id'));
        $student = Student::findOrFail($response->json('data.id'));
        $employment = Employment::where('student_id',$student->plan_id);
    }

    /**
     * Создание студента который не указал где работает
     * @test
     */
    public function store_for_employments_null()
    {
        $response = $this->postJson(route('students.store'), [
            'name' => 'Иванов Иван Иванович',
            'email' => 'test@test.ru',
            'phone' => '89024567654',
            'plans' => [
                'job' => true,
                'army' => true,
                'business' => true,
                'decree' =>  true,
                'education' => true,
                'other' => 'Я собираюсь ничего не делать',
                'level' =>  'Бакалавриат',
                'university' => 'МГУ им Ломоносова'
            ],
            'employment' => null,
            'specialty_activity' => true,
            'year_graduate' => '2020',
            'agreement' => true,
            'direction_id' => 1,
            'category_id' => 1
        ])->assertSuccessful();
        $this->assertNotNull($response->json('data.id'));
        $student = Student::findOrFail($response->json('data.id'));
        $plan = Plan::findOrFail($student->plan_id);
    }
    /**
     * Создание студента который не указал ничего
     * @test
     */
    public function store_for_employments_and_plans_null()
    {
        $response = $this->postJson(route('students.store'), [
            'name' => 'Иванов Иван Иванович',
            'email' => 'test@test.ru',
            'phone' => '89024567654',
            'plans' => null,
            'employment' => null,
            'specialty_activity' => true,
            'year_graduate' => '2020',
            'agreement' => true,
            'direction_id' => 1,
            'category_id' => 1
        ])->assertSuccessful();
        $this->assertNotNull($response->json('data.id'));
        $student = Student::findOrFail($response->json('data.id'));
    }
    /**
     * Создание студента который не указал ничего
     * @test
     */
    public function not_allowed_store()
    {
       $this->postJson(route('students.store'))->assertStatus(422);
    }
}
