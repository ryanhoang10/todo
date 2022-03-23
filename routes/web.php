<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

Route::get('/', [HomeController::class, 'index']);
Route::post('/store', [HomeController::class, 'store'])->name('store.todo');
Route::post('/edit', [HomeController::class, 'edit'])->name('edit.todo');
Route::post('/delete', [HomeController::class, 'delete'])->name('delete.todo');
