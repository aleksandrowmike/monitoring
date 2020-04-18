<?php

namespace App\Http\Controllers;

use App\Company;
use App\Employment;
use App\Http\Requests\StudentSaveRequest;
use App\Http\Resources\StudentCreateResource;
use App\Http\Resources\StudentResource;
use App\Plan;
use App\Position;
use App\Student;
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
     * Show the form for creating a new resource.
     *
     * @return void
     */
    public function create()
    {

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
