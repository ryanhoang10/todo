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
        $.ajax({
            url: '/store',
            data: {
                'todo' : todo,
            },
            success: function(result) {
                location.reload();
            }
        });
    });

    $('.remove-todo-item').on('click', function(event) {
        let id = $(this).attr('data-id');

        $.ajax({
            url: '/delete',
            data: {
                'id': id,
            }, 
            success: function(result) {
                console.log(id, " <== success")
                location.reload();
            }
        });
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
            console.log('hit')
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
            console.log(editTodoItem)

            $.ajax({
                url: '/edit',
                data: {
                    'id': id,
                    'todo': editTodoItem,
                }, 
                success: function(result) {
                    location.reload();
                }
            });
        })
    });   
});
