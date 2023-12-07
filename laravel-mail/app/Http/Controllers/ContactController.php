<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\Contact;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    static function store(Request $request) {
        Mail::send(new Contact($request->all()));
        var_dump('Email enviado');
    }
}
