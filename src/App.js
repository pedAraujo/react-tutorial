import React, { Component, Text } from "react"
import Table from "./Table"
import Form from "./Form"

class App extends Component {
	state = {
		characters: [],
	}

	handleSubmit = (character) => {
		this.setState({ characters: [...this.state.characters, character] })
		//spread operator
	}

	removeCharacter = (index) => {
		const { characters } = this.state

		this.setState({
			characters: characters.filter((character, i) => {
				//filter((element, index)
				return i !== index
			}),
		})
	}
	render() {
		const { characters } = this.state

		return (
			<div className="container">
				<h1>React Tutorial</h1>
				<div>
					Simple form app for practicing React. Create, add and remove from
					table.
				</div>
				<Table
					characterData={characters}
					removeCharacter={this.removeCharacter}
				/>
				<Form handleSubmit={this.handleSubmit} />
			</div>
		)
	}
}

export default App
