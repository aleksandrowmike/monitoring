<?php


namespace Tests\Feature\AuthControllerTest;


use App\User;
use Carbon\Carbon;
use JWTAuth;
use Tests\TestCase;

class UserTest extends TestCase
{
    /**
     * @var User
     */
    protected $user;
    /**
     * @var string
     */
    protected $token;

    protected function setUp(): void
    {
        parent::setUp();

        $this->user = factory(User::class)->create();

    }

    /**
     * Возвращает информацию о пользователе
     * @test
    */
    public function success()
    {
        $this->token = JWTAuth::fromUser($this->user);
        $this->defaultHeaders = [
            'Authorization' => "Bearer {$this->token}"
        ];
        $response = $this->getJson(route('auth.user'));
        $response->assertSuccessful();
        $this->assertEquals($this->user->id, $response->json('data.user.id'));
    }

    /**
     * Возвращает 401, если пользователь не авторизован
     * @test
     */
    public function unauthorized_when_user_not_found()
    {
        $user = factory(User::class)->create();
        $token = JWTAuth::fromUser($user);
        $user->delete();
        $this->defaultHeaders = ['Authorization' => "Bearer {$token}"];
        $response = $this->getJson(route('auth.user'));
        $response->assertUnauthorized();
    }
    /**
     * Возвращает 401, если пользователь не авторизован
     * @test
     */
    public function unauthorized_when_token_no_passed()
    {
        $response = $this->getJson(route('auth.user'));
        $response->assertUnauthorized();
    }
    /**
     * Возвращает 401, если пользователь не авторизован
     * @test
     */
    public function unauthorized_when_token_invalid ()
    {
        \Config::set('jwt.ttl', 1);
        $wrongToken = JWTAuth::fromUser(factory(User::class)->create());
        Carbon::setTestNow('+1 day');
        $this->defaultHeaders = ['Authorization' => "Bearer {$wrongToken}"];
        $response = $this->getJson(route('auth.user'));
        $response->assertUnauthorized();
    }
}
