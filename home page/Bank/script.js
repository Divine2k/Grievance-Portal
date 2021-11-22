$('.block').remove()
$('.submit').click(function(){
    alert("Form Submitted")
    var txt = $('.textBox').val()
    var firstName = $('.firstName').val()
    $('.section').after('<div class="block"><article class="box">'+ txt +'<br>'+ '~' + firstName +'</article></div>')
})
