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

	async componentDidMount(){
		console.log("This message will appear once.");

		// Grab a Pokemon and store its name 

		// Generate a random number or use a user-provided number
		function getRandomPokemonId(){
			return Math.floor(Math.random() * 1010) + 1
		}

		// Retrieve the API data
		let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + getRandomPokemonId()).catch(error => {
			throw new Error("API failure.");
		});
		console.log("Fetch has finished.");

		if (response.status === 404){
			throw new Error("API did not have data for the requested ID.");
		}

		// Convert the response into usable JSON 
		let data = await response.json().catch(error => {
			throw new Error("API did not return valid JSON.");
		}); 

		// Save Pokemon name to component state 
		this.setState({pokemonName: data.name});
	}

	componentWillUnmount(){
		console.log("Component is being removed from the page.");
	}

	// Render is how we return JSX up to the React app
	// so that something is displayed to the browser 
	render(){

		if (this.state.pokemonName) {
			return (
				<div>
					<h1>{this.state.pokemonName}</h1>
				</div>
			)
		} else {
			return(
				<div>
					<h1>Loading...</h1>
				</div>
			)
		}
	}
}