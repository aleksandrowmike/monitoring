<?php

use Illuminate\Database\Seeder;

class DegreeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('degrees')->insert([
            'id'=>1,
            'title'=>'Бакалавриат'
        ]);

        DB::table('degrees')->insert( [
            'id'=>2,
            'title'=>'Специалитет'
        ]);
        DB::table('degrees')->insert( [
            'id'=>3,
            'title'=>'Магистратура'
        ] );
        DB::table('degrees')->insert( [
            'id'=>4,
            'title'=>'Среднее профессиональное'
        ] );
    }
}
