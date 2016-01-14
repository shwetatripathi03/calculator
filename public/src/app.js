var app = angular.module("calculator", []);           
app.controller("CalciCtrl", function($scope) {
  //display the value of button pressed
  $scope.current = "";

  //set default output to zero 
  $scope.output = 0;

  //set the new number to enter 
  $scope.flag = true;

  //set the default pending value 
  $scope.pendingValue = null;

  //set the default running total
  $scope.runningTotal = null;

  //set the default pending operation
  $scope.pendingOperation = null;

  //set the result status
  $scope.showResult = false;

  var ADD = "adding";
  var SUBTRACT = "subtracting";
  var DIVIDE = "dividing";
  var MULTIPLY = "multiplying";

  //to display the value of button pressed
  //on presseing cancel button all operations set to default
  //on pressing '=' result get displayed
  
  $scope.update = function(str) {
    if(str == 'C') {
      $scope.current = "";
      $scope.output = 0;
      $scope.flag = true;
      $scope.pendingValue = null;
      $scope.runningTotal = null;
      $scope.pendingOperation = null;
      $scope.showResult = false;
    }   else {
          $scope.current += str;
        }
    if(str == '=') {
      $scope.showResult = true;
    }
  };
 


  $scope.updateOutput = function(val) {
    if($scope.output === 0 || $scope.flag === true) {
      $scope.output = val;
      $scope.flag = false;
    } else {
      $scope.output += String(val); 
    }
    $scope.pendingValue = parseInt($scope.output); 
  };

  $scope.add = function() {
    if($scope.pendingValue) { 
      if($scope.runningTotal && $scope.pendingOperation == ADD ) {
        $scope.runningTotal += $scope.pendingValue;
      } else if($scope.runningTotal && $scope.pendingOperation == SUBTRACT ) {
        $scope.runningTotal -= $scope.pendingValue;
      }  else if($scope.runningTotal && $scope.pendingOperation == MULTIPLY ) {
        $scope.runningTotal *= $scope.pendingValue;
      } else if($scope.runningTotal && $scope.pendingOperation == DIVIDE ) {
        $scope.runningTotal /= $scope.pendingValue;
      }
      else {
        $scope.runningTotal = $scope.pendingValue;
      }
    } 
    
    $scope.output = String($scope.runningTotal);
    $scope.pendingOperation = ADD;
    $scope.flag = true;
    $scope.pendingValue = null;
  };

  $scope.divide = function() {
    if($scope.pendingValue) { 
      if($scope.runningTotal && $scope.pendingOperation == ADD ) {
        $scope.runningTotal += $scope.pendingValue;
      } else if($scope.runningTotal && $scope.pendingOperation == SUBTRACT ) {
        $scope.runningTotal -= $scope.pendingValue;
      }  else if($scope.runningTotal && $scope.pendingOperation == MULTIPLY ) {
        $scope.runningTotal *= $scope.pendingValue;
      } else if($scope.runningTotal && $scope.pendingOperation == DIVIDE ) {
        $scope.runningTotal /= $scope.pendingValue;
      }
      else {
        $scope.runningTotal = $scope.pendingValue;
      }
    } 
    
    $scope.output = String($scope.runningTotal);
    $scope.pendingOperation = DIVIDE;
    $scope.flag = true;
    $scope.pendingValue = null;
  };
  
  $scope.multiply = function() {
    if($scope.pendingValue) { 
      if($scope.runningTotal && $scope.pendingOperation == ADD ) {
        $scope.runningTotal += $scope.pendingValue;
      } else if($scope.runningTotal && $scope.pendingOperation == SUBTRACT ) {
        $scope.runningTotal -= $scope.pendingValue;
      } else if($scope.runningTotal && $scope.pendingOperation == MULTIPLY ) {
        $scope.runningTotal *= $scope.pendingValue;
      } else if($scope.runningTotal && $scope.pendingOperation == DIVIDE ) {
        $scope.runningTotal /= $scope.pendingValue;
      }
      else {
        $scope.runningTotal = $scope.pendingValue;
      }
    } 
    
    $scope.output = String($scope.runningTotal);
    $scope.pendingOperation = MULTIPLY;
    $scope.flag = true;
    $scope.pendingValue = null;
  };
  
  $scope.subtract = function() {
    if($scope.pendingValue) {
      if($scope.runningTotal && ($scope.pendingOperation == SUBTRACT) ) {
        $scope.runningTotal -= $scope.pendingValue;
      } else if($scope.runningTotal && $scope.pendingOperation == ADD ) {
        $scope.runningTotal += $scope.pendingValue;
      } else if($scope.runningTotal && $scope.pendingOperation == DIVIDE ) {
        $scope.runningTotal /= $scope.pendingValue;
      } else {
        $scope.runningTotal = $scope.pendingValue; //36
      }
    }
    
    $scope.output = String($scope.runningTotal); //"36"
    $scope.pendingOperation = SUBTRACT; 
    $scope.flag = true;
    $scope.pendingValue = null;
  };

 

  $scope.calculate = function() {
    if(!$scope.flag) {
      $scope.pendingValue = parseInt($scope.output);
      $scope.lastValue = $scope.pendingValue;
    } 
    if($scope.pendingOperation == ADD) {
      $scope.runningTotal += $scope.pendingValue;
      $scope.lastOperation = ADD;
    } else if($scope.pendingOperation == SUBTRACT) {
      $scope.runningTotal -= $scope.pendingValue;
      $scope.lastOperation = SUBTRACT;
    } else if($scope.pendingOperation == MULTIPLY) {
      $scope.runningTotal *= $scope.pendingValue;
      $scope.lastOperation = MULTIPLY;
    } else if($scope.pendingOperation == DIVIDE) {
      $scope.runningTotal /= $scope.pendingValue;
      $scope.lastOperation = DIVIDE;
    } else {
      if($scope.lastOperation) {
        if($scope.lastOperation == ADD) {
          if($scope.runningTotal) {
            $scope.runningTotal += $scope.lastValue;
          } else {
            $scope.runningTotal = 0;
          }
        } else if($scope.lastOperation == MULTIPLY) {
            if($scope.runningTotal) {
              $scope.runningTotal *= $scope.lastValue;
          } else {
            $scope.runningTotal = 0;
          }
        } else if($scope.lastOperation == MULTIPLY) {
            if($scope.runningTotal) {
              $scope.runningTotal *= $scope.lastValue;
          } else {
            $scope.runningTotal = 0;
          }
        } else if($scope.lastOperation == SUBTRACT) {
          if($scope.runningTotal) {
            $scope.runningTotal -= $scope.lastValue;
          } else {
            $scope.runningTotal = 0;
          }
        }
      } else {
        $scope.runningTotal = 0;
      }
    }
    $scope.output = String($scope.runningTotal);
    $scope.pendingOperation = null;
    $scope.pendingValue = null;
  };
});


  




