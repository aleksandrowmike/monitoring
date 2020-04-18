<?php

require __DIR__ . '/../bootstrap/autoload.php';

(new class() {
    use \Tests\CreatesApplication;
})->createApplication()[\Illuminate\Contracts\Console\Kernel]->call('migrate:fresh');
