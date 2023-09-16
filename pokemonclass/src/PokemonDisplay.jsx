import React from "react";
// Capital R in the "from" bit is an error
// import React from "React";


// Extend from Component to make sure that this works as a React Component
export default class PokemonDisplay extends React.Component{
	constructor(props){
		super(props);

		// State stores data per component
		this.state = {
			pokemonName: null
		}
	}

	render(){
		return(
			<div>
				<h1>Some content here</h1>
			</div>
		)
	}
}