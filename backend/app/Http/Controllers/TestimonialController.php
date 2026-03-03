<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Testimonial;

class TestimonialController extends Controller
{
    public function getTestimonials(){
        return Testimonial::leftJoin('users', 'users.id', '=', 'testimonials.user_id')
                ->select('testimonials.*', 'users.nickname as user_nickname', 'users.avatar as user_avatar' )
                ->get();
    }
}
