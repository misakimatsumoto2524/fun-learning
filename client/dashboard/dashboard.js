angular.module('funLearning.dashboard', [])
  .controller('DashboardCtrl', function($scope, TestsFactory, $location) {

    $scope.changeLocation = function(path) {
      console.log('clicked: ', path);
      $location.path(path);
    }
    $scope.getTest = function(){
      console.log(TestsFactory.getTest("Tre"));

      return TestsFactory.getTest("Tre");
    };


  });

