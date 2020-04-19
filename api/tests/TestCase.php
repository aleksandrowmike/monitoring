<?php

namespace Tests;

use App\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use JWTAuth;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication, DatabaseTransactions;

    protected $auth;

    public function loginAs(User $user = null)
    {
        $this->auth = $user;

        $token = JWTAuth::fromUser($user);
        $this->defaultHeaders = ['Authorization' => "Bearer {$token}"];

        return $this;
    }
}
