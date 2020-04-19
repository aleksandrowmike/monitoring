<?php

use App\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::create( [
            'id'=>1,
            'title'=>'Общая'
        ] );



        Category::create( [
            'id'=>2,
            'title'=>'Сирота'
        ] );



        Category::create( [
            'id'=>3,
            'title'=>'По целевому направлению'
        ] );



        Category::create( [
            'id'=>4,
            'title'=>'С ОВЗ'
        ] );
    }
}
