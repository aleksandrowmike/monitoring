<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->bigInteger('direction_id')->unsigned();
            $table->bigInteger('category_id')->unsigned();
            $table->bigInteger('plan_id')->unsigned();

            $table->string('name');
            $table->string('email');
            $table->string('phone');

            $table->boolean('specialty_activity');

            $table->year('year_graduate');
            $table->boolean('agreement');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('students');
    }
}
