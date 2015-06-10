var noun = ["toy", "gun", "church", "Canada", "George's grandfather", "biscuit"];
var verb = ["run", "fly", "bounce", "kick", "smell"];
var verbing = ["hinking", "flying", "busting", "chopping", "yelling"];
var adjective = ["stanky", "crazy", "sick", "cool", "ugly"];
var adverb = ["extremely", "jankely", "funnily", "grotesquely", "happily"];

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
	else{
		var title = "Hey player, choose a story first";
		var story = "-_-";
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

function getInput(wordType,wordsNeeded){

	inputs = document.getElementById(wordType).value;

	//if no user inputs, make inputArray blank
	if(inputs === ""){
		var inputArray = [];
	}else{
		var inputArray = inputs.split(', ');
	}

	console.log("Before inputArray", inputArray);
	var nounRandArray = [];
	var nounRand;
	var verbRandArray = [];
	var verbRand;
	var adjectiveRandArray = [];
	var adjectiveRand;
	var adverbRandArray = [];
	var adverbRand;
	var verbingRandArray = [];
	var verbingRand;

	//if default values are needed, load the defaults
	while(inputArray.length < wordsNeeded){

		if(wordType === "noun"){
			//make sure there are no duplicates
			do{
				nounRand = Math.floor(Math.random()*(noun.length));
			}while(nounRandArray.indexOf(nounRand) !== -1)
			nounRandArray.push(nounRand);
			console.log("nounRandArray",nounRandArray);
			inputArray.push(noun[nounRand]);

		}else if(wordType === "verb"){
			//make sure there are no duplicates
			do{
				verbRand = Math.floor(Math.random()*(verb.length));
			}while(verbRandArray.indexOf(verbRand) !== -1)
			verbRandArray.push(verbRand);
			console.log("verbRandArray",verbRandArray);
			inputArray.push(verb[verbRand]);

		}else if(wordType === "adjective"){
			//make sure there are no duplicates
			do{
				adjectiveRand = Math.floor(Math.random()*(adjective.length));
			}while(adjectiveRandArray.indexOf(adjectiveRand) !== -1)
			adjectiveRandArray.push(adjectiveRand);
			console.log("adjectiveRandArray",adjectiveRandArray);
			inputArray.push(adjective[adjectiveRand]);

		}else if(wordType === "adverb"){
			//make sure there are no duplicates
			do{
				adverbRand = Math.floor(Math.random()*(adverb.length));
			}while(adverbRandArray.indexOf(adverbRand) !== -1)
			adverbRandArray.push(adverbRand);
			console.log("adverbRandArray",adverbRandArray);
			inputArray.push(adverb[adverbRand]);

		}else if(wordType === "verbing"){
			//make sure there are no duplicates
			do{
				verbingRand = Math.floor(Math.random()*(verbing.length));
			}while(verbingRandArray.indexOf(verbingRand) !== -1)
			verbingRandArray.push(verbingRand);
			console.log("verbingRandArray",verbingRandArray);
			inputArray.push(verbing[verbingRand]);

		}
	}

	var finalArray = [];
	console.log("After inputArray", inputArray);
	var rando;
	var randoArray = [];

	for(i = 0; i < wordsNeeded; i++) {

		//make sure there are no duplicates in final array of random values
		do{
			rando = Math.floor(Math.random()*(wordsNeeded));
		}while(randoArray.indexOf(rando) !== -1)
		randoArray.push(rando);

		console.log("rando",rando);
		finalArray[i]=inputArray[rando];
	}
	
	console.log("finalArrays",finalArray);
	return finalArray;
}