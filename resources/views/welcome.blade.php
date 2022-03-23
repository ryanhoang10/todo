<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Todo</title>

        <script src="{{ asset('js/todo.js') }}" ></script>
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <meta name="csrf-token" content="{{ csrf_token() }}">

    </head>
    <body class="antialiased">
        <div>
            <h2 class="cursor-pointer">To Do List: </h2>
            <div>
                <form autocomplete="off">
                    <input type="text" id="todo">
                    <button id="add-new-todo">Create</button>
                </form>
            </div>
            <div>
                <ul>
                    @foreach ($todo as $item)
                     <li>
                         {{-- <input id='todo-item-id' type="hidden" value="{{ $item->id }}"> --}}
                         <span id="remove-todo-item" value="{{ $item->id }}">x</span> {!! $item->name !!} 
                    </li> 
                    @endforeach   
                </ul>
               
            </div>
        </div>
    </body>
</html>
