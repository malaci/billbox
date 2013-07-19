$(document).ready(function(){
    $(".colorbox").on("click", "a", function() {
        $.colorbox({
            href: $(this).attr('href'),
            iframe: true,
            width: "97%",
            height: "97%"
        });
        
        return false;
    });
});