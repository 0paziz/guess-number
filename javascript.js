let random_number = Math.floor(Math.random() * 100 + 1);
let score_id= $("#score");
let highscore_id= $("#highscore");
let highscore=0;
let Score= 0;


$("#check").click(function() {
    const guessed_number = Number($("#guess").val());
    
    if (!guessed_number || guessed_number < 1 || guessed_number > 100) {
        $(".user_helper").text("Please enter a valid number between 1 and 100.");
        return;
    }
    
    if (random_number > guessed_number) {
        $(".user_helper").text("My secret number is greater than " + guessed_number);
    } else if (random_number < guessed_number) {
        $(".user_helper").text("My secret number is less than " + guessed_number);
    } else {
        Score += 20;
        $(".user_helper").css("color", "green").text("Correct, it's " + guessed_number + "!");
        score_id.text(Score);
        if(Score > highscore){
            highscore=Score;
            
        }
        highscore_id.text(highscore);
    }
    

    $("#guess").val("");
});

$("#again").click(function() {
    random_number = Math.floor(Math.random() * 100 + 1); // Reset the random number
    $(".user_helper").text("").css("color", ""); // Reset feedback
    $("#guess").val(""); // Clear input field
});
