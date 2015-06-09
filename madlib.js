var noun = ["toy", "gun", "church", "Canada", "George's grandfather", "biscuit"];
var verb = ["run", "fly", "bounce", "kick", "smell"];
var verbing = ["hinking", "flying", "busting", "chopping", "yelling"];
var adjective = ["stanky", "crazy", "sick", "cool", "ugly"];
var adverb = ["extremely", "jankely", "funnily", "grotesquely", "happily"];

var nounRand = Math.floor(Math.random()*(noun.length));
var verbRand = Math.floor(Math.random()*(verb.length));
var verbingRand = Math.floor(Math.random()*(verbing.length));
var adjectiveRand = Math.floor(Math.random()*(adjective.length));
var adverbRand = Math.floor(Math.random()*(adverb.length));

//how can I make it change the order of words upon click?
//why doesn't the h1 color: white; work?

function createStory() {

	if(document.getElementById('a').checked) {

		finalNouns = getInput("noun",3);
		finalVerbs = getInput("verb",2);
		finalAdjectives = getInput("adjective",2);
		finalAdverbs = getInput("adverb",2);
		finalVerbings = getInput("verbing",1);

		var title = "Bobby\'s Story";
		var story = "One <span class='underline'>" + finalAdjectives[0] + "</span> day, Bobby was <span class='underline'>" + finalVerbings[0] + "</span> around the <span class='underline'>" + finalNouns[0] + "</span>, when <span class='underline'>" + finalAdverbs[0] + "</span>, Bobby saw his aquaintence, <span class='underline'>" + finalNouns[1] + "</span>. \"Hey,\" said Bobby, \"Wanna <span class='underline'>" + finalVerbs[0] + "</span> out of here and <span class='underline'>" + finalVerbs[1] + "</span> that <span class='underline'>" + finalNouns[2] + "</span> over there?\" The two friends <span class='underline'>" + finalAdverbs[1] + "</span> became <span class='underline'>" + finalAdjectives[1] + "</span> friends. The end.";

	}else if(document.getElementById('b').checked) {

		finalNouns = getInput("noun",3);
		finalVerbs = getInput("verb",3);
		finalAdjectives = getInput("adjective",3);
		finalAdverbs = getInput("adverb",1);
		//finalVerbings = getInput("verbing",0);

	  	var title = "Techdeck Story";
	  	var story = "Teckdecks are <span class='underline'>" + finalAdjectives[0] + "</span>. Everyone in the whole <span class='underline'>" + finalAdjectives[1] + "</span> world should <span class='underline'>" + finalVerbs[0] + "</span> one. Techdecks can <span class='underline'>" + finalVerbs[1] + "</span> over <span class='underline'>" + finalNouns[0] + "</span>s. Their wheels <span class='underline'>" + finalAdverbs[0] + "</span> <span class='underline'>" + finalVerbs[2] + "</span> when you do a trick right. Sometimes it's fun to try finding new <span class='underline'>" + finalAdjectives[2] + "</span> places to skate on, like <span class='underline'>" + finalNouns[1] + "</span>s and <span class='underline'>" + finalNouns[2] + "</span>s. The end.";
	
	}else if(document.getElementById('c').checked) {
	  	
		finalNouns = getInput("noun",3);
		finalVerbs = getInput("verb",4);
		finalAdjectives = getInput("adjective",4);
		finalAdverbs = getInput("adverb",2);
		finalVerbings = getInput("verbing",1);

		var title = "Magical Ninja Story";
	  	var story = "Once upon a <span class='underline'>" + finalAdjectives[0] + "</span> time, there lived a magical ninja who came from the <span class='underline'>" + finalAdjectives[1] + "</span> land of <span class='underline'>" + finalNouns[0] + "</span>s. He liked to <span class='underline'>" + finalVerbs[0] + "</span> <span class='underline'>" + finalAdverbs[0] + "</span>, and it just so happened that the King of the land was announcing a <span class='underline'>" + finalVerbings[0] + "</span> competition, which he thought was similar enough. And so, the ninja went to <span class='underline'>" + finalNouns[1] + "</span> and asked if he could <span class='underline'>" + finalVerbs[1] + "</span> the competition. \"Sorry,\" said the <span class='underline'>" + finalAdjectives[2] + "</span> manager in charge, \"you have to be able to <span class='underline'>" + finalAdverbs[1] + "</span> <span class='underline'>" + finalVerbs[2] + "</span> at least three miles in order to sign up\". The ninja thought that was a dumb prerequisite, so he didn't sign up, but instead began to <span class='underline'>" + finalVerbs[3] + "</span> <span class='underline'>" + finalAdjectives[3] + "</span> <span class='underline'>" + finalNouns[2] + "</span>s. The end.";
	}

	//Output elements
	var h2 = document.createElement("h2");
	h2.innerHTML = title;
	h2.className = "title";
    var out = document.getElementById("out");
    out.className = "out ostyle";
    out.innerHTML = story;
    out.insertBefore( h2, out.firstChild);

}

function getInput(x,y){

	inputs = document.getElementById(x).value;

	if(inputs === ""){
		var inputArray = [];
	}else{
		var inputArray = inputs.split(', ');
	}

	while(inputArray.length < y){
		if(x === "noun"){
			inputArray.push(noun[nounRand]);
		}else if(x === "verb"){
			inputArray.push(verb[verbRand]);
		}else if(x === "adjective"){
			inputArray.push(adjective[adjectiveRand]);
		}else if(x === "adverb"){
			inputArray.push(adverb[adverbRand]);
		}else if(x === "verbing"){
			inputArray.push(verbing[verbingRand]);
		}
	}

	var finalArray = [];

	for(i = 0; i < y; i++) {
		//How do I make sure no duplicates are included????!!!!
		rando = Math.floor(Math.random()*(y));
		console.log(rando);
		finalArray[i]=inputArray[rando];
		console.log(finalArray[i]);
	}
	
	return finalArray;
}