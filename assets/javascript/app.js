//pseudo code
//load front page to begin with instructions
//on click quiz page loads
$("#startButton").click(function () {
    window.location.replace("Quiz.html");
});
//four pictures load, one from each category
var badScore = 0
var aestScore = 0
var tortScore = 0
var intScore = 0
$(".badArt").attr('src', "assets/images/imgBadOne.jpg"); 
$(".aestArt").attr('src', "assets/images/imgAestOne.jpg");
$(".tortArt").attr('src', "assets/images/imgTortOne.jpeg");
$(".intArt").attr('src', "assets/images/imgIntOne.jpg");
//timer begins countdown
//user makes selection it highlights
$("#bad").on("click", function () {
    console.log("hello")
    $("#aest, #tort, #int, #bad").hide();
    badScore ++
    $(".hiddenArt").attr('src', "assets/images/imgBadOne.jpg"); 
    console.log(badScore)
});
$("#aest").on("click", function () {
    console.log("hello")
    $("#bad, #tort, #int").hide();
    aestScore ++
    console.log(aestScore)
});
$("#tort").on("click", function () {
    console.log("hello")
    $("#aest, #bad, #int").hide();
    tortScore ++
    console.log(tortScore)
});
$("#int").on("click", function () {
    console.log("hello")
    $("#aest, #bad, #tort").hide();
    intScore ++
    console.log(intScore)
});
//user either commits seletion or resets and chooses another,  timer does not stop
//on selection the four pictures load and timer resets
//chosen picture is added to final score  5% in one of the categories
//process repeats for 20 pages unless timer runs out in which case the front page is loaded again
//results page loads
//results are parsed into the result page, all pictures chosen are shown and percentages are given.
//user can retake test