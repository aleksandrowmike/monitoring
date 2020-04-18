<?php
namespace Tests\Feature\AuthControllerTest;

use App\User;
use JWTAuth;
use Tests\TestCase;

class SignInTest extends TestCase
{
    /**
     * @var User
     */
    protected $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->user = factory(User::class)->create([
            'password' => '12345678'
        ]);
    }

    /**
     * Пользователь успешно авторизовался
     * @test
     */
    public function success()
    {

        // Проверяем авторизацию
        $response = $this->postJson(route('auth.sign-in'), [
            'email' => $this->user->email,
            'password' => '12345678'
        ]);

        // Проверяем валидный ли токен
        $response->assertSuccessful();
        $payload = JWTAuth::user()->getJWTIdentifier();
        $this->assertEquals($this->user->id, $payload);
    }

    /**
     * При неккоректной паре логин/пароль
     * @test
     */
    public function not_allowed()
    {
        $response = $this->postJson(route('auth.sign-in'), [
            'email' => $this->user->email,
            'password' => '123123'
        ]);

        $response->assertJsonValidationErrors(['email']);
    }


}
