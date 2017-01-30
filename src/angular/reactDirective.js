import app from '../../main'
import React from "react";
import ReactDOM from "react-dom";
import Layout from "../react/Layout";

const reactDirective = app.directive('reactDirective', function() {
  return {
      template: '<div id="reactapp" ></div>',
      scope: {
        todos: '=todos'
      },
      link: function(scope, el, attrs){
            const reactapp = document.getElementById('reactapp')

            scope.$watch('todos', function(newValue, oldValue) {
                if (angular.isDefined(newValue)) {
                 ReactDOM.render(
                    <Layout todos={newValue}/>
                    , reactapp);
                }
            }, true);

        }
    }
})

export default reactDirective
