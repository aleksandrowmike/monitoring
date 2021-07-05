<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Http\Response;

class StudentIncorrectException extends Exception
{
    public function render($request)
    {
        return response([
            'message' => 'Некореектные данные ресурса',
            'errors' => [$this->getMessage()],
            'type' => class_basename($this),
        ], Response::HTTP_UNPROCESSABLE_ENTITY);
    }
}
