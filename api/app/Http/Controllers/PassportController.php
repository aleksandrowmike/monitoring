<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Helpers\Students\Create;

class PassportController extends Controller
{
    public function register(Request $request)
    {
        $user = User::create([
            'name' => "Центр Карьеры",
            'email' => "main@cstv.unn.ru",
            'password' => bcrypt("b34EnW&Z")
        ]);
        $token = $user->createToken('05dc360713efb78a62d32c15870878f1320312d32569d707a21e9227071baa23')->accessToken;
        return response()->json(['token' => $token], 200);
    }
    public function login(Request $request)
    {
        $credentials = [
            'email' => $request->email,
            'password' => $request->password
        ];

        if (auth()->attempt($credentials)) {
            $token = auth()->user()->createToken('05dc360713efb78a62d32c15870878f1320312d32569d707a21e9227071baa23')->accessToken;
            return response()->json(['token' => $token, 'user' => auth()->user()], 200);
        } else {
            return response()->json(['error' => 'UnAuthorised'], 401);
        }
    }

    /**
     * Returns Authenticated User Details
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function details()
    {
        return response()->json(['user' => [
            'name' =>  auth()->user()->name,
            'roles' => ['admin'],
            'avatar' => 'avatar',
            'introduction' => 'test'
        ], 'code' => 20000], 200);
    }
    public function test() {
        StudentsCreate::test();
    }

}
