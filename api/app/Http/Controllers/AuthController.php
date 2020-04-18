<?php

namespace App\Http\Controllers;

use App\Http\Resources\AuthResource;
use App\User;
use Auth;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use JWTAuth;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    use AuthenticatesUsers;

    public function signUp(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
            'name' => 'required',
            'password' => 'required|confirmed'
        ]);

        $user = new User();
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = $request->input('password');

        $user->save();

        return $this->authenticated($request, $user);
    }

    public function signIn(Request $request)
    {
        $this->validateLogin($request);

        if ($this->attemptLogin($request)) {
            return $this->authenticated($request, auth()->user());
        }

        return $this->sendFailedLoginResponse($request);
    }
    public function user(Request $request)
    {
        return new AuthResource(auth()->user());
    }
    protected function authenticated(Request $request, $user)
    {
        $token = JWTAuth::fromUser($user);
        return (new AuthResource($user))->response()->header('Api-Token', $token);
    }
}
