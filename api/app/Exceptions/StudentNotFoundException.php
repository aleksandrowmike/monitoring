<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Http\Response;


class StudentNotFoundException extends Exception
{
    public function render($request)
    {
        return response([
            'message' => 'Студенты не найдены',
            'errors' => [$this->getMessage()],
            'type' => class_basename($this),
        ], Response::HTTP_NOT_FOUND);
    }
}
