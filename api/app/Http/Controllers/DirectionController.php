<?php

namespace App\Http\Controllers;

use App\Direction;
use App\Http\Resources\DirectionResource;
use Illuminate\Http\Request;

class DirectionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param $id
     * @return DirectionResource
     */
    public function show($id)
    {
        return new DirectionResource(Direction::findOrFail($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Direction  $direction
     * @return \Illuminate\Http\Response
     */
    public function edit(Direction $direction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Direction  $direction
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Direction $direction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Direction  $direction
     * @return \Illuminate\Http\Response
     */
    public function destroy(Direction $direction)
    {
        //
    }
}
