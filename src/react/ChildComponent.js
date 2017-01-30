import React from "react"
import ReactDOM from "react-dom"

export default class ChildComponent extends React.Component{
	constructor(props) {
		super(props);
		this.state = {output: ""};
	}

	render(){
		return(
			<div className="container">						
				<h4>React Component - Calculator</h4>
				
			</div>
		);
	}
}
