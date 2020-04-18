<?php
namespace Tests\Feature\AuthControllerTest;

use App\User;
use JWTAuth;
use Tests\TestCase;

class SignUpTest extends TestCase
{
    /**
     * Пользователь успешно зарегистрировался
     * @test
     */
    public function success()
    {
        $response = $this->postJson(route('auth.sign-up'), [
            'email' => 'test@test.ru',
            'name' => 'Василий',
            'password' => '12345',
            'password_confirmation' => '12345'
        ]);
        $response->assertSuccessful();
        $user = User::whereEmail('test@test.ru')->first();
        $this->assertNotNull($user);
        $this->assertEquals($user->id, $response->json('data.user.id'));
        $this->assertEquals($user->name, $response->json('data.user.name'));
        $response->assertHeader('api-token');
    }

    /**
     * Возвращает корректные ошибки валидации
     * @test
     * @dataProvider provider_validation
     * @param $params
     * @param $errors
     */
    public function validation($params, $errors)
    {
        $response =
            $this
                ->postJson(route('auth.sign-up'), $params)
                ->assertJsonValidationErrors($errors);
    }

    public function provider_validation()
    {
        return [
            'Отсутствует email' => [['name' => 'Василий', 'password' => '12345678', 'password_confirmation' => '12345678'], ['email']],
            'Отсутствует name' => [['email' => 'test@test.ru', 'password' => '12345678', 'password_confirmation' => '12345678'], ['name']],
            'Отсутствует password' => [['email' => 'test@test.ru', 'name' => 'Василий', 'password_confirmation' => '12345678'], ['password']],
            'Пароли не совпадают' => [['email' => 'test@test.ru', 'name' => 'Василий', 'password_confirmation' => '123456789'], ['password']],
        ];
    }
}
