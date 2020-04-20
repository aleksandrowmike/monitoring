<?php


namespace Tests\Feature\StudentsControllerTest;


use App\User;
use Tests\TestCase;

class FilterTest extends TestCase
{
    /**
     * @test
     * */

    public function filter()
    {
        $user = factory(User::class)->create();
        $response = $this->loginAs($user)->getJson(route('students.filter',[
            
        ]));
        dump($response);
    }



}
