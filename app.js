$(function() {

    var form = $("#addBook");
    form.on("submit", function(event) {
        event.preventDefault();
    });
    var titles = $("#titles");
    titles.on("click","li",function(){
        var div = $(this).find("div");
        div.slideToggle();
        var bookid = this.dataset.id;
        console.log(bookid);
        $.ajax({url:"http://localhost:8282/books/"+ bookid})
            .done(function (data) {
                console.log(data);
                div.text("Autor: " + data.author + ", Wydawnictwo: " +  data.publisher + ", Rodzaj: " + data.type);
            })
    });
    $.ajax({
        url: "http://localhost:8282/books/"})
        .done(function(result) {console.log(result);
        $(result).each(function(index, element) {

            titles.append($(`<li data-id="${this.id}">${this.title}<div style="display:none"></div></li>`));
        })
        })
});
