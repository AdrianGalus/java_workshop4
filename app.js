$(function() {

    var titles = $("#titles");
    titles.on("click","li",function(){
       $(this).find("div").slideToggle();
       var bookid = this.dataset.id;
        console.log(bookid);
        $.ajax({url:"http://localhost:8282/books/"})



    });
    $.ajax({
        url: "http://localhost:8282/books/"})
        .done(function(result) {console.log(result);
        $(result).each(function(index, element) {

            titles.append($(`<li data-id="${this.id}">${this.title}<div style="display:none"></div></li>`))

        })

        })
});
