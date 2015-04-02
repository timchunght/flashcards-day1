var app = angular.module('FlashCards', [])
.controller('FlashCardController', function($scope){
	$scope.flashCard = {
      question: 'What is Angular?',
      answers: [
          { text: 'A front-end framework for great power!', correct: true },
          { text: 'Something lame, who cares, whatever.', correct: false },
          { text: 'Some kind of fish, right?', correct: false }
      ]
    }
	$scope.answerQuestion = function (theAnswer) {
		$scope.answeredCorrectly = theAnswer.correct;
		$scope.answered = true;
		console.log($scope.answeredCorrectly);
    console.log(theAnswer);
	};

})
.controller('MainController', function($scope){

	$scope.answerQuestion = function (flashCard, answer) {
		flashCard.answeredCorrectly = answer.correct;
		flashCard.answered = true;
		console.log(flashCard.answeredCorrectly);
    console.log(answer);
	};

	$scope.flashCards = [
    {
        question: 'What is Angular?',
        answers: [
            { text: 'A front-end framework for great power!', correct: true },
            { text: 'Something lame, who cares, whatever.', correct: false },
            { text: 'Some kind of fish, right?', correct: false }
        ]
    },
    {
        question: 'What is a controller?',
        answers: [
            { text: 'Something that manages my front-end routes', correct: false },
            { text: 'A function that allows me to manage a scope', correct: true },
            { text: 'An Angular template', correct: false }
        ]
    },
    {
        question: 'What does {{ }} do?',
        answers: [
            { text: 'It runs some Javascript', correct: false },
            { text: 'It looks for variables in HTML', correct: false },
            { text: 'It runs an Angular expression that accesses my $scope', correct: true }
        ]
    }
	];
	
});

