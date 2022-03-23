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
        let id = $('.remove-todo-item').attr('data-id');

        // console.log(id2.event.target.innerHTML, " <-- here")

        console.log(id, " <-- id")

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

    $('.edit-todo-item').on('click', function(event) {
        // let id = $('.remove-todo-item').attr('data-id');
        // let id2 = $('.todo-item-id').val();

        // console.log(id2.event.target.innerHTML, " <-- here")

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
