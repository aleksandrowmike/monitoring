<?php

namespace App\Exceptions;

use Exception;

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
