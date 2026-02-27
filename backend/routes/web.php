<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ResponseController;
use App\Http\Controllers\TestimonialController;

Route::get('/', [ResponseController::class, 'getDesign']);
Route::get('/testimonials', [TestimonialController::class, 'getTestimonials']);
