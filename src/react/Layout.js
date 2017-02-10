import React from "react";

export default class Layout extends React.Component{
	constructor(props){
		super(props)		
	}
	componentWillMount(){
		console.log("Component mounting")
	}

	render(){	
		return (
			<div>
				<hr/>
				<h1>React TO-DO</h1>
				<ul>{this.props.todos.map((todo,key)=>{
					return <li key={key} onClick={ (event) => {
									  this.props.markComplete(todo)
									}
								} className={["list-item", todo.done === true? "done-true":"done-false"].join(" ")}>{todo.text}
						    </li>})
				}</ul>
				<button id="click" onClick={ () => {
						this.props.newItem("Alter triggered from React but Fired from AngularJS")
					  }
					}>Click to make Angular Alert!!</button>
			</div>
		);
	}
}