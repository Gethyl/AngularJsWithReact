import angular from 'angular'
// import reactDirective from './src/angular/reactDirective'

const  app = angular.module('app', []);
app.controller('TodoCtrl', function($scope) {
  $scope.todos = [
    {text:'learn angular', done:false},
    {text:'build an angular app', done:false}];

  $scope.addTodo = function() {
    $scope.todos.push({text:$scope.todoText, done:false});
    $scope.todoText = '';
  };

  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };

  $scope.markItemCompleted = function(todoText) {
    var index = $scope.todos.findIndex((item,index)=> { return (item.text === todoText) })
    console.log(index)
    $scope.todos[index].done = !$scope.todos[index].done
    $scope.$apply()
  };

})


export default app;