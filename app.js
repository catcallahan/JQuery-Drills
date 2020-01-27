// $('#btnSubmit').click(function() {
//     alert('A message')
// })

$(document).on('keyup', function () {
    if ($("input[type=text]").val() != '') {
        $('#btnSubmit').prop('disabled', false)
    }
});

$('body').append('<ul></ul');

$('#btnSubmit').click(function (event) {
    // alert($("input[type=text]").val())
    event.preventDefault()
    // $('body').append('<h2>' + $('input[type=text]').val() + '</h2>')
    // $('h2').mouseover(function(){
        //     $('h2').css({
            //         'background-color': 'blue',
            //         'border-radius' : '10em'
            //     })
            // })
    let colors = ['red', 'yellow', 'green', 'purple']
    $('ul').append('<li>' + $('input[type=text]').val() + '</li>')
    $('li').click(function(event){
        $(event.target).css({
            'color': colors[Math.floor(Math.random() * colors.length)]
        })
    })
    $('li').dblclick(function(event){
        $(event.target).remove()
    })

})