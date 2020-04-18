<?php

Route::fallback(function () {
    View::addExtension('html', 'php');
    return View::make('index');
});

