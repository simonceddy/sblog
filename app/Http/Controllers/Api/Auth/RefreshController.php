<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Support\RespondsWithToken;
use Illuminate\Http\Request;

class RefreshController extends Controller
{
    use RespondsWithToken;

    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        return $this->respondWithToken(auth()->refresh());
    }
}
