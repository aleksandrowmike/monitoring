<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Http\Response;

class JwtAuthFailedException extends Exception
{
    public function render($request)
    {
        return response([
            'message' => 'Пользователь не авторизован',
            'errors' => [$this->getMessage()],
            'type' => class_basename($this),
        ], Response::HTTP_UNAUTHORIZED);
    }
}
