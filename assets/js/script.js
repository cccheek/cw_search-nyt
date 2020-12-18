$(document).ready(function() {
    $("#search-form").submit(function(event) {
        event.preventDefault();

        console.log(search($("#search-term").val(), parseInt($("#record-number").val()), $("#start-year").val().split("-").join(""), $("#end-year").val().split("-").join("")));
    })
})