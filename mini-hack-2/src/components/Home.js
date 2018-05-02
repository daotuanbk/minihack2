import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: ['', '', '', '']
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(index, value) {
    var newPlayers = this.state.players.map((name, nIndex) => nIndex === index ? value : name);

    this.setState({
      players: newPlayers
    });
  }

  handleSubmit(event) {
    this.props.getName(this.state.players);
    console.log(this.state.players);


    event.preventDefault();
  }

  getState(state) {

  }

  render() {
    const playerInputs = this.state.players.map((player, index) => (
      <textarea className="text_area row" rows="1" cols="135" maxLength="100" placeholder={`Player ${index + 1}...`}
        name={`player${index + 1}`} value={player} onChange={(event) => this.handleChange(index, event.target.value)}></textarea>)
    )
    return (
      <form onSubmit={this.handleSubmit}>
        {playerInputs}
        <p className="button">
          <button className="button_glow" type="submit">CREATE NEW GAME</button>
        </p>
      </form>
    );
  }
}

export default Home;