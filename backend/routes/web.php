<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ResponseController;

Route::get('/', [ResponseController::class, 'getDesign']);
