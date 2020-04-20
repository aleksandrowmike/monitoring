<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StudentFilterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'year' => 'date_format:Y|nullable',
            'category' => 'nullable|integer|exists:categories,id',
            'job' => 'nullable|boolean',
            'army' => 'nullable|boolean',
            'business' => 'nullable|boolean',
            'decree' => 'nullable|boolean',
            'other' => 'nullable|string',
            'education' => 'nullable|boolean',
            'level' => 'nullable|string',
            'university' => 'nullable|string',
            'agreement' => 'nullable|boolean',
            'specialty_activity' => 'nullable|boolean',
            'employment' => 'nullable|boolean',
            'company' => 'nullable|integer|exists:companies,id',
//            'city' => 'nullable|string',
            'position' => 'nullable|integer|exists:positions,id',
            'speciality' => 'nullable|boolean',
        ];
    }
}
