<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class PostController extends Controller
{
  
    
    public function view(Request $request) {

        auth()->loginUsingId(1);
        // dd(auth()->user());
        
        // if(Gate::allows('view', $post)){
        //     return view('post');
        // }
        if($this->authorize('view', Post::class)){
            return view('post');
        }
        

        
    }
}
