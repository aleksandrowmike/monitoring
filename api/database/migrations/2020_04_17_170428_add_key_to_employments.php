<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddKeyToEmployments extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('employments', function (Blueprint $table) {
            $table->foreign('student_id')->references('id')->on('students');
            $table->foreign('company_id')->references('id')->on('companies');
            $table->foreign('position_id')->references('id')->on('positions');

            $table->index('student_id');
            $table->index('company_id');
            $table->index('position_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('employments', function (Blueprint $table) {
            $table->dropForeign('student_id');
            $table->dropForeign('company_id');
            $table->dropForeign('position_id');
        });
    }
}
