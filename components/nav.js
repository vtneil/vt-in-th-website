$(document).ready(function () {
    $.get("/components/nav.html", function (data) {
        $("#navbar").replaceWith(data);
    });
});