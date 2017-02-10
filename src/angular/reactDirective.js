import app from '../../main'
import React from "react";
import ReactDOM from "react-dom";
import Layout from "../react/Layout";

const reactDirective = app.directive('reactDirective', function() {
  return {
      template: '<div id="reactapp" class="react-part"></div>',
      scope: {
        todos: '=',
        markComplete:'&'
      },
      link: function(scope, el, attrs){
            scope.newItem = (value) => {alert (value)}
            // scope.markComplete = (todoItem) => {scope.markItemCompleted(todoItem)}

            const reactapp = document.getElementById('reactapp')
            scope.$watch('todos', function(newValue, oldValue) {
                if (angular.isDefined(newValue)) {
                 ReactDOM.render(
                    <Layout todos={newValue} newItem={scope.newItem} markComplete={scope.markComplete}/>
                    , reactapp);
                }
            }, true);

        }
    }
})

export default reactDirective
