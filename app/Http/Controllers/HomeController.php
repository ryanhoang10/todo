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

        return view('templates.header.header', compact('todo'));
    }

    public function store(Request $request)
    {
        $todo = new Todo;
        $todo->name = $request->get('todo');
        $todo->save();
    }

    public function delete(Request $request)
    {
        $todo = Todo::where('id', $request->get('id'))
                    ->delete();
    }

    public function edit(Request $request)
    {
        $todo = Todo::where('id', $request->id)
                    ->update(['name' => $request->todo]);
    }
}
