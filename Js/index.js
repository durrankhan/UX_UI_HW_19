console.log("Your index.js file is loaded correctly!");

$(document).ready(function () {
    $("#resumeButton").click(function () {

        $(this).animate({
            opacity: 0.5,
            width: "200px",
            height: "50px"
        }, 1000);
    });
});