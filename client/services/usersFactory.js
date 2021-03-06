angular.module('funLearning.users', [])
  .factory('UsersFactory', function($http, $location) {

    var currentUser = [];
    var currentTeacher = {}; //dont need (?)
    var allUsers = [];
    var allTeachers = []; //dont need(?)


    // TODO: function to add a game to the users gameResults array
    var getAllUsers = function() {
      return $http({
        method: 'GET',
        url: '/api/users',
      }).then(function(res){
        console.log('usersFactory.js - results for (Users) res.data', res.data);
        // console.log('usersFactory.js - GET request succeeded! :)')
        allUsers.push(res.data);
      })
    };

    var getCurrentUser = function(username, password){
      return $http({
        method: 'GET',
        url: '/api/users/' + username + '/' + password
      }).then(function(res){
        console.log('usersFactor.js - getCurrentUser result', res);
        // allUsers.push(res.data);
        //
        if (res.data) {
          currentUser.push(res.data);
          $location.path('/dashboard');
        } else {
          alert('login didn\'t work! If you haven\'t created account, please create!');
          $location.path('/login');
        }
        console.log(currentUser);
        return currentUser;
      });
    };


    var getUserProfile = function() {
      console.log(currentUser);
      return currentUser;
    };

    var addNewUser = function(data) {
      return $http({
        method: 'POST',
        url: '/api/users',
        data: data
      }).then(function(res){
        getCurrentUser(res.data.username, res.data.password);
        console.log('usersFactory.js - post request succeeded! :)');
        //$location.path('/game');
      });
    };

    return {
      currentUser: currentUser,
      currentTeacher: currentTeacher,
      allUsers: allUsers,
      allTeachers: allTeachers,
      addNewUser: addNewUser,
      getAllUsers: getAllUsers,
      getCurrentUser: getCurrentUser
    };
  });






