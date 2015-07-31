(function() {
  var app = angular.module('madlib', ['ngSanitize']);

  app.controller('MainController', function() {
	var self = this;
	self.finalWords = {};
	self.options = {
		nouns: '',
		verbs: '',
		verbings: '',
		adverbs: '',
		adjectives: ''
	};
	self.selectStory = {};
	self.asdf = "hello";

  	//object of each story's needed words, then assign to finalWords object
	 self.preStory = {
	  	bobby: {
	  		wordsNeeded: {nouns: 3, verbs: 2, verbings: 1, adverbs: 2, adjectives: 2},
	  		name: "bobby"
	  	},
	  	techdeck: {
	  		wordsNeeded: {nouns: 3, verbs: 3, verbings: 0, adverbs: 1, adjectives: 3},
	  		name: "techdeck"
	  	},
	  	ninja: {
	  		wordsNeeded: {nouns: 3, verbs: 4, verbings: 1, adverbs: 2, adjectives: 4},
	  		name: "ninja"
	  	}
  	};

  	self.defaults = {
  		nouns: ["toy", "gun", "church", "Canada", "George's grandfather", "biscuit"], 
  		verbs: ["run", "fly", "bounce", "kick", "smell"], 
  		verbings: ["hinking", "flying", "busting", "chopping", "yelling"], 
  		adverbs: ["extremely", "jankely", "funnily", "grotesquely", "happily"], 
  		adjectives: ["stanky", "crazy", "sick", "cool", "ugly"]
  	};

  	self.createStory = function(){
  		console.log('hello world!');
  		setFinalArray();

  		//last step
	  	self.postStory = {
		  	bobby: {
		  		title: "Bobby's Story",
		  		text: "One <span class='underline'>" + self.finalWords.adjectives.words[0] + "</span> day, Bobby was <span class='underline'>" + self.finalWords.verbings.words[0] + "</span> around the <span class='underline'>" + self.finalWords.nouns.words[0] + "</span>, when <span class='underline'>" + self.finalWords.adverbs.words[0] + "</span>, Bobby saw his aquaintence, <span class='underline'>" + self.finalWords.nouns.words[1] + "</span>. \"Hey,\" said Bobby, \"Wanna <span class='underline'>" + self.finalWords.verbs.words[0] + "</span> out of here and <span class='underline'>" + self.finalWords.verbs.words[1] + "</span> that <span class='underline'>" + self.finalWords.nouns.words[2] + "</span> over there?\" The two friends <span class='underline'>" + self.finalWords.adverbs.words[1] + "</span> became <span class='underline'>" + self.finalWords.adjectives.words[1] + "</span> friends. The end."
		  	},
		  	techdeck: {
		  		title: "Techdeck Story",
		  		text: "Teckdecks are <span class='underline'>" + self.finalWords.adjectives.words[0] + "</span>. Everyone in the whole <span class='underline'>" + self.finalWords.adjectives.words[1] + "</span> world should <span class='underline'>" + self.finalWords.verbs.words[0] + "</span> one. Techdecks can <span class='underline'>" + self.finalWords.verbs.words[1] + "</span> over <span class='underline'>" + self.finalWords.nouns.words[0] + "</span>s. Their wheels <span class='underline'>" + self.finalWords.adverbs.words[0] + "</span> <span class='underline'>" + self.finalWords.verbs.words[2] + "</span> when you do a trick right. Sometimes it's fun to try finding new <span class='underline'>" + self.finalWords.adjectives.words[2] + "</span> places to skate on, like <span class='underline'>" + self.finalWords.nouns.words[1] + "</span>s and <span class='underline'>" + self.finalWords.nouns.words[2] + "</span>s. The end."
		  	},
		  	ninja: {
		  		title: "Magical Ninja Story",
		  		text: "Once upon a <span class='underline'>" + self.finalWords.adjectives.words[0] + "</span> time, there lived a magical ninja who came from the <span class='underline'>" + self.finalWords.adjectives.words[1] + "</span> land of <span class='underline'>" + self.finalWords.nouns.words[0] + "</span>s. He liked to <span class='underline'>" + self.finalWords.verbs.words[0] + "</span> <span class='underline'>" + self.finalWords.adverbs.words[0] + "</span>, and it just so happened that the King of the land was announcing a <span class='underline'>" + self.finalWords.verbings.words[0] + "</span> competition, which he thought was similar enough. And so, the ninja went to <span class='underline'>" + self.finalWords.nouns.words[1] + "</span> and asked if he could <span class='underline'>" + self.finalWords.verbs.words[1] + "</span> the competition. \"Sorry,\" said the <span class='underline'>" + self.finalWords.adjectives.words[2] + "</span> manager in charge, \"you have to be able to <span class='underline'>" + self.finalWords.adverbs.words[1] + "</span> <span class='underline'>" + self.finalWords.verbs.words[2] + "</span> at least three miles in order to sign up\". The ninja thought that was a dumb prerequisite, so he didn't sign up, but instead began to <span class='underline'>" + self.finalWords.verbs.words[3] + "</span> <span class='underline'>" + self.finalWords.adjectives.words[3] + "</span> <span class='underline'>" + self.finalWords.nouns.words[2] + "</span>s. The end."
		  	}
	  	};
  	};

  	function setFinalArray(){

  		for(var prop in self.options){


  			//split sting into array
  			self.finalWords[prop] = {
  				words: self.options[prop].split(','),
  				numNeeded: self.selectStory.wordsNeeded[prop]
  			};

  			//trim the whitespace
	  		for(var i =0; i < self.finalWords[prop].words.length; i++){
	  			self.finalWords[prop].words[i] = self.finalWords[prop].words[i].trim();
	  		}

	  		//remove empty elements in array
	  		for(i = 0; i < self.finalWords[prop].words.length; i++){
	  			if(self.finalWords[prop].words[i] === ''){
	  				self.finalWords[prop].words.splice(i,1);
	  				i--;
	  			}
  			}

  			//fill the emplty spots of the array with random default values
  			self.finalWords[prop].words = defaultFill(prop, self.finalWords[prop].words, self.finalWords[prop].numNeeded);
  			console.log('afterFill:',angular.copy(self.finalWords));
  			//scramble the array
  			self.finalWords[prop].words = randomize(self.finalWords[prop].words);
  		}
  		console.log('afterRando:',angular.copy(self.finalWords));
  		//Output final Array
  	}

  	function defaultFill(wordType, wordArray, wordsNeeded){
  		var randoArray = [];
  		var rando;

		//make sure there are no duplicates
		while(wordArray.length < wordsNeeded){

			do{
				rando = Math.floor(Math.random()*(self.defaults[wordType].length));
			}while(randoArray.indexOf(rando) !== -1);
			randoArray.push(rando);

			wordArray.push(self.defaults[wordType][rando]);
		}

		return wordArray;
  	}

  	function randomize(wordArray){
  		var randoArray = [];
  		var rando;
  		var scrambledWords = [];

		
		for( i = 0; i < wordArray.length; i++){
			//make sure there are no duplicates
			do{
				rando = Math.floor(Math.random()*(wordArray.length));
			}while(randoArray.indexOf(rando) !== -1);
			randoArray.push(rando);

			scrambledWords[i]=wordArray[rando];
		}

		return scrambledWords;
  	}

		// /////////////////


		// 	this.story = {title: 'Hey player, choose a story first', description: '-_-'};


  });

  app.directive("story", function() {
    return{
      restrict: 'E',
      templateUrl: "templates/story.html",
      scope: {
      	story: '='
      },
      controller: function(){
      	var story = this;
      	console.log("I'm here!");
      },
      controllerAs: 'story',
      bindToController: true
    };
  });
})();

//ANGULARIZE NOTES:
//Create directive for stories
//Controller that accesses words {{noun}}
//Controller takes inputs and sends it to a service




