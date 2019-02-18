
// Starts the game 
$(".start").on("click", function (){
    $(this).hide();

    // Questions appear
            $('.container').show();
            timer(60); 
            questions();
        });
    
        $(document).ready(function(){
            $("button").click(function(){
              $("#questions").fadeIn()
            });
          });

var questions = [{
        question: 'Name the fourth member of a Tribe Called Quest?',
        possibles: ['Busta Rhymes', 'Trugoy', 'Jarrobi', 'C L Smooth', 'Common'],
        id: 'question-one',
        answer: 2
    }, {
        question: 'Who is a rapper in Black Star?',
        possibles: ['Black Thought', 'Mos Def', 'Common', 'Hi-Tek', 'Pharoah Monch'],
        id: 'question-two',
        answer: 1
    }, {
        question: 'What town is in Queens, NY?',
        possibles: ['Rosedale', 'BedStuy', 'East NY', 'Canarsie', 'Cypress Hills'],
        id: 'question-three',
        answer: 0
    }, {
        question: 'What street did A Tribe Called Quest make famous?',
        possibles: ['Hollis Ave.', 'Springfield Blvd.', 'Merrick Blvd.', 'Linden Blvd.', 'Jamaica Ave.'],
        id: 'question-four',
        answer: 3
    }, {
        question: 'What crew did LL Cool J make famous?',
        possibles: ['Farmers', 'Far Rockaway', 'Hollis', 'Forty Projects', 'Jamaica'],
        id: 'question-five',
        answer: 0
    }
    ]


// The number of seconds given to answer a question
var secondsGiven = 60;

// The number of seconds left on the timer
var secondsLeft;

          var timer = setInterval(function() {

$('#container').show();
            countdown(60);

// Calculate seconds
var countdown = function(seconds) {
    var timer = setInterval(function() {
    seconds = seconds - 1;
    $("#time-remain").html(seconds);
    if (seconds <= 0) {
        $('.container').fadeOut(500);
    }})}

// If the count down is over, write some text 
$(function () {
$('#defaultCountdown').countdown({
    until: +5,
    onExpiry: function() {
      $('#defaultCountdown').css("background-color","red");
      $('#defaultCountdown').html('<div class="over">Time\'s up!</div>');
    },});

function run(){
    counter = setInterval(decrement, 1000);
}

// The stop function
function stop(){
// Clears our "counter" interval. The interval name is passed to the clearInterval function.
    clearInterval(counter);
}

// Execute the run function.
run();
})})