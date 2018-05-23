$(document).ready(function() {
    $("#contact_submit").click(function() {
        sendquery();
    })
    $(".numbers_only").keypress(function(e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            //display error message
            return false;
        }
    })
    $(".numbers_only").keyup(function(e) {
        if (!$.isNumeric($(this).val())) {
            var numb = $(this).val().match(/\d/g);
            numb = numb.join("");
            $(this).val(numb);
        };
    })
    $(".numbers_only").change(function() {
        if (!$.isNumeric($(this).val())) {
            var numb = $(this).val().match(/\d/g);
            numb = numb.join("");
            $(this).val(numb);
        };
    })
    $("#contact_mobile").keypress(function() {
        if ($(this).val().length > 9) {
            return false;
        }
    })
})

function send_query() {
    var name = $("#contact_name").val();
    var mail = $("#contact_email").val();
    var mobile = $("#contact_mobile").val();
}