<?php


namespace Tests\Feature\DepartmentsControllerTest;


use Tests\TestCase;

class ShowTest extends TestCase
{
    /**
     * Получение всех направлений
     * @test
     */
    public function show()
    {
        $response = $this->getJson(route('departments.show',1 ));
        $response->assertSuccessful();
    }
}
