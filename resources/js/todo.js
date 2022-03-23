require('./bootstrap');

$(document).ready(function() {
    $('.editing-todo-item, .update-todo-item, .cancel-todo-item').hide();

    $.ajaxSetup({
        method: 'post',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        error: function(e) {
            console.log(e)
        }
    });

    $('#add-todo-item').on('click', function() {
        let todo = $('#todo').val();
        let createTodoObj = {
            'todo': todo,
        };
        ajaxTodoRequest('/store', createTodoObj);
    });

    $('.remove-todo-item').on('click', function(event) {
        let id = $(this).attr('data-id');
        let deleteTodoObj = {
            'id': id,
        };
        ajaxTodoRequest('/delete', deleteTodoObj);
    });   

    $('.edit-todo-item').on('click', function(event) {
        let id = $(this).attr('data-id');
        let todoItem = $(this).attr('data-item');
        // hiding buttons
        $('.todo-item-' + todoItem).hide();
        $('.edit-' + id).hide();
        $('.remove-' + id).hide();

        // showing buttons
        $('.editing-' + id).show();
        $('.cancel-' + id).show();
        $('.update-' + id).show();


        // hitting cancel button returns back to span + edit button
        $('.cancel-' + id).on('click', function() {
            // showing buttons
            $('.todo-item-' + todoItem).show();
            $('.edit-' + id).show();
            $('.remove-' + id).show();

            // hiding buttons
            $('.editing-' + id).hide();
            $('.cancel-' + id).hide();
            $('.update-' + id).hide();
        })

        // hitting update button hits ajax to update todo item in db
        $('.update-' + id).on('click', function() {
            let editTodoItem = $('.editing-' + id).val();
            let editTodoObj = {
                'id': id,
                'todo': editTodoItem,
            };
            ajaxTodoRequest('/edit', editTodoObj);
        })
    });   

    function ajaxTodoRequest(url, data)
    {
        $.ajax({
            url: url,
            data: data, 
            success: function(result) {
                location.reload();
            }
        });
    }
});
