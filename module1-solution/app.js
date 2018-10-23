(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];
function LunchCheckerController($scope) {
    var msg="";
    $scope.name = "";
  $scope.checklunch = function () {
      if($scope.name.length>0){
      var nm=$scope.name
       var words = nm.split(',');
      if(words.length>3){
           msg="Too much";
      }else{
          msg="Enjoy";
      }
      }else{
          msg="Please enter data first";
      }
       $scope.finalresult = msg;
  };
    
}
})();



