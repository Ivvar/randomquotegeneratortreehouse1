// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//variables to get a random color
var red;
var green;
var blue;

//variable to hold what i want to print
var message = '';

//array to hold all the used quotes (already seen ones)
var usedQuotes =[];

//array to hold quotes sources and tags
var quotes = [
	{
		quote: "Try to be a rainbow in someone's cloud.",
		source: "Maya Angelou",
		tags: "love",
		
	},
	{
		quote: "So many books, so little time.",
		source: "Frank Zappa",
		tags: "humor",
		
	},
	{
		quote: "It is during our darkest moments that we must focus to see the light.",
		source: "Aristotle",
		tags: "inspiration",
	},
	{
		quote: "Happiness is not something you postpone for the future; it is something you design for the present.",
		source: "Jim Rohn",
		tags: "inspiration",
		
	},
	{
		quote: "Not knowing anything is the sweetest life.",
		source: "Sophocles",
		tags: "humor",
		
	},
	{
		quote: "Dream big and dare to fail",
		source: "Norman Vaughan",
        tags: "inspiration",
	},
];



function print(quote) 
{
	var outputDiv = document.getElementById('quote-box');
	outputDiv.innerHTML = quote;
}


//function to get a random quote
function getRandomQuote() 
{
    //selects a random quote within the length of the array
	var randomQuote = Math.floor(Math.random() * quotes.length);
	
    //"splice", removes item from array
	var spQuote = quotes.splice(randomQuote, 1)[0];
	usedQuotes.push(spQuote);
	
    //if statement to keep going, when all quotes are used, old quotes array becomes the new array which hold used quotes, usedQuotes
    if ( quotes.length === 0 ) 
    {
		quotes = usedQuotes;
		usedQuotes = [];
	}
	return spQuote;
}

//function to get random color for background
function getRandomColor() 
{
	var randomColor;
	red = Math.floor(Math.random() * 256 );
	green = Math.floor(Math.random() * 256 );
	blue = Math.floor(Math.random() * 256 );
	randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}



//final foncution to print everything out
function printQuote() 
{
	
	var quotes = getRandomQuote();
	message ='<p class="quote">' + quotes.quote + '</p>';
	message  += '<p class="source">' + quotes.source;
    message += '<h3>' + quotes.tags + '<h3>';
	
    //calling the functions print, getrandomcolor
	print(message);
	getRandomColor();
    
	document.getElementById('bgcolor').style.backgroundColor = getRandomColor();
}
