require('./bootstrap');
$(document).ready(function() {
    $('.editing-todo-item, .update-todo-item, .cancel-todo-item').hide();

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

    function hideTodoButtons(id)
    {
        $('.todo-item-' + id).hide();
        $('.edit-' + id).hide();
        $('.remove-' + id).hide();

        $('.editing-' + id).show();
        $('.cancel-' + id).show();
        $('.update-' + id).show();
    }

    function showTodoButtons(id)
    {
        $('.todo-item-' + id).show();
        $('.edit-' + id).show();
        $('.remove-' + id).show();

        $('.editing-' + id).hide();
        $('.cancel-' + id).hide();
        $('.update-' + id).hide();    
    }

    $('.edit-todo-item').on('click', function(event) {
        let id = $(this).attr('data-id');
        let todoItem = $(this).attr('data-item');

        hideTodoButtons(id, todoItem);

        $('.cancel-' + id).on('click', function() {
            showTodoButtons(id, todoItem);
        })

        $('.update-' + id).on('click', function() {
            let editTodoItem = $('.editing-' + id).val();
            let editTodoObj = {
                'id': id,
                'todo': editTodoItem,
            };
            ajaxTodoRequest('/edit', editTodoObj);
        })
    });   

    $('#remove-all-todo-items').on('click', function() {
        ajaxTodoRequest('/deleteAll', {})
    })

    function ajaxTodoRequest(url, data)
    {
        $.ajax({
            method: 'post',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            url: url,
            data: data, 
            success: function(result) {
                location.reload();
            },
            error: function(e) {
                console.log(e)
            }
        });
    }
});