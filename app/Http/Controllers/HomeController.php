<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\Todo;

class HomeController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function index()
    {
        $todo = Todo::get();

        return view('welcome', compact('todo'));
    }

    public function store(Request $request)
    {
        dd($request);
    }

    public function destroy(Request $request)
    {

    }

    public function edit(Request $request)
    {

    }
}
