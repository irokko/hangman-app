var app=angular.module("HangmanApp",[]);
app.controller("GameController",['$scope',function($scope){
$scope.demo = "somestring";

var words = ["rat","cat","bat","mat"];
  $scope.incorrectLettersChosen=[];
  $scope.correctLettersChosen=[];
  var selectedWord='';
  $scope.guesses=6;
  $scope.displayWord='';
  $scope.input = {
    letter: ''
};
var selectRandomWord = function() {
    var index = Math.round(Math.random()*words.length);
    return words[index];
}
var newGame = function(){
  $scope.incorrectLettersChosen = [];
  $scope.correctLettersChosen = [];
  $scope.guesses = 6;
  $scope.displayWord = '';
  
  selectedWord = selectRandomWord();
  var tempDisplayWord = '';
  console.log(selectedWord);
  for(var i = 0; i < selectedWord.length; i++) {
    tempDisplayWord += '*';   
    }
    $scope.displayWord = tempDisplayWord;
} 
$scope.letterChosen = function() {    
  for(var i = 0; i < $scope.correctLettersChosen.length; i++) {
    if($scope.correctLettersChosen[i].toUpperCase() == $scope.input.letter.toUpperCase()) {
      $scope.input.letter = "";
      return;
    }
  }
  for(var i = 0; i < $scope.incorrectLettersChosen.length; i++) {
    if($scope.incorrectLettersChosen[i].toUpperCase() == $scope.input.letter.toUpperCase()) {
      $scope.input.letter = "";
      return;
    }
  }
  var correct = false;
  for(var i = 0; i < selectedWord.length; i++) {
    if(selectedWord[i].toLowerCase()==$scope.input.letter.toLowerCase()) {
      $scope.displayWord=$scope.displayWord.slice(0,i)+$scope.input.letter.toUpperCase()+$scope.displayWord.slice(i+1);
      correct = true;
      }
    }
    if(correct){
      $scope.correctLettersChosen.push($scope.input.letter.toUpperCase());
    } else {
      $scope.guesses--;
      $scope.incorrectLettersChosen.push($scope.input.letter.toUpperCase());
    }
    $scope.input.letter = "";
}

newGame();
    
}]);