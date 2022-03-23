require('./bootstrap');

$(document).ready(function() {
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


        console.log('editing')

        return false;
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
});
