<?php

namespace App\Http\Controllers;

use App\Company;
use App\Direction;
use App\Employment;
use App\Exceptions\StudentIncorrectException;
use App\Exceptions\StudentNotFoundException;
use App\Http\Requests\StudentFilterRequest;
use App\Http\Requests\StudentSaveRequest;
use App\Http\Resources\StudentCreateResource;
use App\Http\Resources\StudentResource;
use App\Plan;
use App\Position;
use App\Student;
use DB;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return AnonymousResourceCollection
     */
    public function index()
    {
        return StudentResource::collection(Student::all()->each(function ($student) {
            $student->plans = Plan::findOrFail($student->plan_id);
            $student->employment = Employment::where('student_id', $student->id)->get()->each(function ($employment){
                $employment->company = Company::findOrFail($employment->company_id);
                $employment->position = Position::findOrFail($employment->position_id)->title;
            });
        }));
    }

    /**
     * Получение студентов выбранного факультета
     * @param $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|AnonymousResourceCollection|\Illuminate\Http\Response
     */
    public function showByDepartment($id)
    {
        if(!is_int($id))
        {
            return response([
                'error' => [
                    'code' => 422,
                    'error_message' => 'Некореектные данные ресурса'
                ]
            ], 422);
        }
        $directions = Direction::where('department_id', '=', $id)->get('id');
        $response = Student::whereIn('direction_id', $directions)->get()->each(function ($student) {
            $student->plans = Plan::findOrFail($student->plan_id);
            $student->employment = Employment::where('student_id', $student->id)->get()->each(function ($employment){
                $employment->company = Company::findOrFail($employment->company_id);
                $employment->position = Position::findOrFail($employment->position_id)->title;
            });
        });
        if($response->isEmpty())
        {
            return response([
                'error' => [
                    'code' => 422,
                    'error_message' => 'Некореектные данные ресурса'
                ]
            ], 422);
        }
        return StudentResource::collection($response);
    }

    public function showByDirection($id)
    {
        $response = Student::where('direction_id', $id)->get();
        if($response->isEmpty())
        {
            return response([
                'error' => [
                    'code' => 422,
                    'error_message' => 'Некореектные данные ресурса'
                ]
            ], 422);
        }
        return StudentResource::collection($response);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StudentSaveRequest $request
     * @return StudentCreateResource
     */
    public function store(StudentSaveRequest $request)
    {
       $student = new Student();

       if($request->input('plans'))
       {
           $student->plan_id = $student->plans()->create($request->input('plans'))->first()->id;
       }
       $student->direction_id = $request->input('direction_id');
       $student->category_id = $request->input('category_id');

       $student->name = $request->input('name');
       $student->email = $request->input('email');
       $student->phone = $request->input('phone');
       $student->specialty_activity = $request->input('specialty_activity');
       $student->year_graduate = $request->input('year_graduate');
       $student->agreement = $request->input('agreement');

       $student->save();

       if ($request->input('employment'))
       {
           $employment = new Employment();
           $employment->student_id = $student->id;
           $employment->company_id = $employment->companies()
               ->create($request->input('employment.company'))->first()->id;
           $employment->position_id = $employment->positions()
               ->create(['title' => $request->input('employment.position')])->first()->id;
           $employment->speciality = $request->input('employment.speciality');
           $employment->save();
       }

       return new StudentCreateResource($student);
    }

    public function filter(StudentFilterRequest $request)
    {
        if ($request->getQueryString() == null)
        {
          throw new StudentIncorrectException('Некореектные данные для фильтрации');
        }
        $student = new Student();

        if($request->has('year'))
        {
            $student->where('year_graduate','=',$request->input('year'));
        }

        if ($request->has('category'))
        {
            $student->where('category_id','=',$request->input('category'));
        }

        if ($request->has('job'))
        {
            $student->plans()->where('job', '=', $request->input('job'));
        }

        if ($request->has('army'))
        {
            $student->plans()->where('army', '=', $request->input('army'));
        }

        if ($request->has('business'))
        {
            $student->plans()->where('job', '=', $request->input('job'));
        }

        if ($request->has('decree'))
        {
            $student->plans()->where('decree', '=', $request->input('decree'));
        }

        if ($request->has('other'))
        {
            $student->plans()->where('other', '=', $request->input('other'));
        }

        if ($request->has('education'))
        {
            $student->plans()->where('education', '=', $request->input('education'));
        }

        if ($request->has('level'))
        {
            $student->plans()->where('level', '=', $request->input('level'));
        }

        if ($request->has('university'))
        {
            $student->plans()->where('level', '=', $request->input('level'));
        }

        if ($request->has('specialty_activity'))
        {
            $student->where('specialty_activity', '=', $request->input('specialty_activity'));
        }

        if($request->has('company'))
        {
            $student->employments()->where('company_id','=', $request->input('company'));
        }

        if($request->has('position'))
        {
            $student->employments()->where('position_id','=', $request->input('position'));
        }

        if($request->has('speciality'))
        {
            $student->employments()->where('speciality','=', $request->input('speciality'));
        }

        if($request->has('employment'))
        {
            if($request->input('employment'))
            {
                $response = $student->has('employments')->get()->each(function ($student){
                    $student->plans = Plan::findOrFail($student->plan_id);
                    $student->employment = Employment::where('student_id', $student->id)->get()->each(function ($employment){
                        $employment->company = Company::findOrFail($employment->company_id);
                        $employment->position = Position::findOrFail($employment->position_id)->title;
                    });
                });
                if ($response->isEmpty())
                {
                    throw new StudentNotFoundException('По вашему запросу ничего не найдено');
                }
                return StudentResource::collection($response);
            }else{
                $response = $student->doesntHave('employments')->get()->each(function ($student){
                    $student->plans = Plan::findOrFail($student->plan_id);
                    $student->employment = Employment::where('student_id', $student->id)->get()->each(function ($employment){
                        $employment->company = Company::findOrFail($employment->company_id);
                        $employment->position = Position::findOrFail($employment->position_id)->title;
                    });
                });
                if ($response->isEmpty())
                {
                    throw new StudentNotFoundException('По вашему запросу ничего не найдено');
                }
                return StudentResource::collection($response);
            }
        }
        $response = $student->get()->each(function ($student){
            $student->plans = Plan::findOrFail($student->plan_id);
            $student->employment = Employment::where('student_id', $student->id)->get()->each(function ($employment){
                $employment->company = Company::findOrFail($employment->company_id);
                $employment->position = Position::findOrFail($employment->position_id)->title;
            });
        });
        if ($response->isEmpty())
        {
            throw new StudentNotFoundException('По вашему запросу ничего не найдено');
        }
        return StudentResource::collection($response);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function show(Student $student)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function edit(Student $student)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Student $student)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function destroy(Student $student)
    {
        //
    }
}
