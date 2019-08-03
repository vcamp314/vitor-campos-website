<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use App\Mail\SendContact;

class ContactController extends Controller
{
    //

    public function contact(Request $request) {

        Log::debug('name: '.$request->input('name'));
        Log::debug('email: '.$request->input('email'));
        Log::debug('message: '.$request->input('message'));
        $valid = \Validator::make($request -> json() -> all(), [
            'name' => 'required|string',
            'email' => 'required|email',
            'message' => 'required|string'
        ]);
        if ($valid -> fails()) {
            return\ Response::json($valid -> errors(), 400);
        }
        try {

            $name = $request->input('name');
            $email =$request->input('email');
            $message = $request->input('message');

            Mail::send('emails.contact_email', ['name' => $name, 'email' => $email, 'text' => $message ], function ($message)
            {
    
                $message->from('inquiries@vitorcampos.info', 'Vitor Personal Website');    
                $message->to('inquiries@vitorcampos.info');
                $message->subject('Contact Request');
    
            });
            return\ Response::json(['msg' => [0 => 'Thank you for your inquiry, I will get back to you shortly']], 200);
        } catch (\Exception $e) {
            return\ Response::json(['msg' => [0 => $e -> getMessage()]], 500);
        }
    }
}
