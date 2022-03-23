require('./bootstrap');

$(document).ready(function() {
    $('#add-new-todo').on('click', function() {
        let todo = $('#todo').val();
        $.ajax({
            url: '/store',
            method: 'post',
            data: {
                'todo' : todo,
            },
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            success: function(result) {
                location.reload();
            },
            error: function(e) {
                console.log(e)
            }
        });
    });

    $('#remove-todo-item').on('click', function() {
        let id = $(this).val();
        console.log(id, " ,-- hello")
        $.ajax({
            url: '/delete',
            method: 'post',
            data: {
                'id': id,
            }, 
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            success: function(result) {
                console.log(id, " <== success")
                location.reload();
            },
            error: function(e) {
                console.log(id, " <== fail")
                console.log(e)
                return false;
            }
        });
    });   
});
