<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Todo</title>

        <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    </head>
    <body class="antialiased">
        <div>
            <h2 class="cursor-pointer">To Do List: </h2>
            <div>
                <input type="text" />
                <button> Create </button>
            </div>
            <div>
                <ul>
                    @foreach ($todo as $item)
                     <li>{!! $item->name !!}</li>
                    @endforeach   
                </ul>
               
            </div>
        </div>
    </body>
</html>
