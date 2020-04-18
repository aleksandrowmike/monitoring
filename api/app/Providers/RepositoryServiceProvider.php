<?php

namespace App\Providers;

use App\Repositories\Interfaces\StudentStatisticInterface;
use App\Repositories\StatisticRepositories;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(
            StudentStatisticInterface::class,
            StatisticRepositories::class
        );
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
