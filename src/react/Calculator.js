import React from "react"
import ReactDOM from "react-dom"


let IntegerArray = []

export default class Calculator extends React.Component{
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
