<?php

namespace App\Http\Controllers;

use App\Models\Design;
use Illuminate\Http\Request;

class ResponseController extends Controller
{
    public function getDesign(){
        return Design::find(3)->user;
    }
}
