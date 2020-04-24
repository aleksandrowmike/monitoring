<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('plans', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->boolean('job')->nullable();
            $table->boolean('army')->nullable();
            $table->boolean('business')->nullable();
            $table->boolean('decree')->nullable();
            $table->boolean('education')->nullable();
            $table->string('other')->nullable();
            $table->string('level')->nullable();
            $table->string('university')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('plans');
    }
}
