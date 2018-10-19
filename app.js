$(function() {

    var titles = $("#titles");
    $.ajax({
        url: "http://localhost:8282/books/"})
        .done(function(result) {console.log(result);
        $(result).each(function(index, element) {
            titles.append($(`<li>${$(this).title}<div></div></li>`))
        })
        })
});