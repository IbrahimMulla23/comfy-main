$(document).ready(function(){

    $("#switch").click(function(){
        $("h1, h2, p, h3, h4, h5, testadj, li, #shop, .item, .conatiner, .card, a").toggleClass("textclr");
        $("body").toggleClass("bg");
    })
});