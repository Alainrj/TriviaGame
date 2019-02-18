
// Starts the game 
$(".start").on("click", function (){
    // Questions appear
            $('.wrapper').show();
    
            $(this).hide();
        });
    
var x = setInterval(function() {

var game = {
    questions: [
    {
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
        answer: 4
    }
    ]}

    
// Calculate seconds
var start = new Date;

setInterval(function() {
    $('.Timer').text((new Date - start) / 1000 + " Seconds");
}, 1000);

// Output the time left with id="demo"
document.getElementById("demo").innerHTML = seconds + "s ";

    // If the count down is over, write some text 
if (distance < 0) {
  clearInterval(x);
  document.getElementById("demo").innerHTML = "Time's UP!";
}
}, 1000);

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