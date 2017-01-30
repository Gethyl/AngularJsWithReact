import React from "react";
import ChildComponent from "./ChildComponent"

export default class Layout extends React.Component{
	constructor(props){
		super(props)		
	}

	render(){	
		console.log(this.props.newItem)
		return (
			<div>
				<hr/>
				<h1>React TO-DO</h1>
				<ul>{this.props.todos.map((todo,key)=>{
					return <li key={key} onClick={ (event) => {
									  this.props.markComplete(todo)
									}
								}>{todo.text}
						    </li>})
				}</ul>
				<button id="click" onClick={ () => {
						this.props.newItem("Alter triggered from React but Fired from AngularJS")
					  }
					}>Click to make Angular Alert!!</button>
				<ChildComponent/>
			</div>
		);
	}
}