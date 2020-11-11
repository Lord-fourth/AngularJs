var app=angular.module("HangmanApp",[]);
app.controller("GameController",['$scope',function($scope){
    var words=["rat","bat","mat","cat"];
    $scope.incorrectChosenLetters=[];
    $scope.correctChosenLetters=[];
    $scope.guesses=6;
    $scope.displayWord='';
    $scope.input={
        letter:''
    };

    var selectRandomWord=function(){
        var index=Math.floor(1+Math.random()*words.length);
        return words[index-1];
    }

    var newGame=function(){
        $scope.incorrectChosenLetters=[];
        $scope.correctChosenLetters=[];
        $scope.guesses=6;
        $scope.displayWord='';
        selectedWord=selectRandomWord();
        
        var tempWord='';
        for (let index = 0; index < selectedWord.length; index++) {
            tempWord=tempWord+'*';
            

        }
        
        $scope.displayWord=tempWord;
        $scope.letterChosen=function(){
            console.log('hi');

            for(var i=0;i<$scope.correctChosenLetters.length;i++) {
                if($scope.correctChosenLetters[i].toUpperCase()==$scope.input.letter.toUpperCase()) {
                    $scope.input.letter="";
                    return;
                }
            }
            for(var i=0;i<$scope.incorrectChosenLetters.length;i++) {
                if($scope.incorrectChosenLetters[i].toUpperCase()==$scope.input.letter.toUpperCase()) {
                    $scope.input.letter="";
                    return;
                }
            }

            var correct =false;
            for (let index = 0; index < selectedWord.length; index++) {
                if($scope.input.letter==selectedWord[index])
                {
                    correct=true;
                    $scope.displayWord=$scope.displayWord.slice(0,index) + $scope.input.letter + $scope.displayWord.slice(index+1);

                    break;
                    
                }
                
            }
            if(correct)
            {
                    $scope.correctChosenLetters.push($scope.input.letter);
            }
            else
            {
                $scope.incorrectChosenLetters.push($scope.input.letter);
                $scope.guesses=$scope.guesses-1;
            }

            $scope.input.letter='';
            if($scope.displayWord==selectedWord)
            {
                
                console.log('hi');
                alert('you have won!');
                newGame();
            }
            if($scope.guesses==0)
            {
                alert('you lost!');
                newGame();
            }
            

        }
       // console.log('hi' + displayWord);

    }
    newGame();

}]);
