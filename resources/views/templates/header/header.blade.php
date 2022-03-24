<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Todo</title>

        <script src="{{ asset('js/todo.js') }}" ></script>
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="{{ asset('css/todo.css') }}" rel="stylesheet">

        {{-- <link rel="stylesheet" href="{{ tailwindcss('css/app.css') }}" > --}}

        <meta name="csrf-token" content="{{ csrf_token() }}">

    </head>
    <body class="text-center mx-7">
    <div class="mb-4">
        <h2 class="font-medium leading-tight text-4xl mt-0 mb-2 text-red-400">To Do List: </h2>
    </div>

    @extends('welcome')

    </body>
</html>