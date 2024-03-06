<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Policies\PostPolicy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class PostController extends Controller
{
  
    
    public function view(Request $request) {

        auth()->loginUsingId(1);

        
        // auth()->logout();
        
        
        

        // if($this->authorize('view', Post::class)){
        //     return view('post',['post' => Post::class]);
        // }
        
        // if($request->user()->can('view', Post::class)){
        //     return view('post',['post' => Post::class]);
        // }else{
        //     abort(403);
        // }

        // if(auth()->user()->can('view', Post::class)){
        //     return view('post',['post' => Post::class]);
        // }else{
        //     abort(403);
        // }

        
        return view('post',['post' => Post::class]);
        
    }
}
