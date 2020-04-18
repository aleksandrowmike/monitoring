<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddKeyToStudents extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('students', function (Blueprint $table) {
            $table->foreign('direction_id')->references('id')->on('directions');
            $table->foreign('plan_id')->references('id')->on('plans');
            $table->foreign('category_id')->references('id')->on('categories');

            $table->index('direction_id');
            $table->index('plan_id');
            $table->index('category_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('students', function (Blueprint $table) {
            $table->dropForeign('direction_id');
            $table->dropForeign('plan_id');
            $table->dropForeign('category_id');

            $table->dropIndex('direction_id');
            $table->dropIndex('plan_id');
            $table->dropIndex('category_id');
        });
    }
}
