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
                    <button id="add-todo-item">Create</button>
                </form>
            </div>
            <div>
                <ul>
                    @foreach ($todo as $item)
                    <div>
                        <li>
                            <span class="todo-item-{{ $item->id }}">{!! $item->name !!}</span>
                            <input type="text" name="todo-item" class="editing-todo-item editing-{{ $item->id }}" value="{{ $item->name }}">
                            <span class="edit-todo-item edit-{{ $item->id }}" data-id="{{ $item->id }}" data-item="{{ $item->name }}">edit</span>
                            <span class="update-todo-item update-{{ $item->id }}">update</span>
                            <span class="cancel-todo-item cancel-{{ $item->id }}">cancel</span>
                            <span class="remove-todo-item remove-{{ $item->id }}" data-id="{{ $item->id }}">x</span>
                        </li>   
                    </div>
                    @endforeach   
                </ul>
               
            </div>
        </div>
    </body>
</html>
