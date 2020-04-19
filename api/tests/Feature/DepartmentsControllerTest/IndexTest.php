<?php


namespace Tests\Feature\DepartmentsControllerTest;


use Tests\TestCase;

class IndexTest extends TestCase
{
    /**
     * Получение всех факультетов
     * @test
    */
    public function index()
    {
        $response = $this->getJson(route('departments.index'));
        $response->assertSuccessful();
    }

}
