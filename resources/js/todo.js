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

    function hideTodoButtons(id)
    {
        $('.todo-item-' + id).hide();
        $('.edit-' + id).hide();
        $('.remove-' + id).hide();
        
        showEditTodoButton(id);

    }

    function showTodoButtons(id)
    {
        $('.todo-item-' + id).show();
        $('.edit-' + id).show();
        $('.remove-' + id).show();

        hideEditTodoButton(id);
    }

    function showEditTodoButton(id)
    {
        $('.editing-' + id).show();
        $('.cancel-' + id).show();
        $('.update-' + id).show();
    }

    function hideEditTodoButton(id)
    {
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
