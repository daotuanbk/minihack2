import React, { Component } from 'react';

class Games extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playersName : []      
    };

  }
  render() {
    return (
      <div>
        <table id="table" className="table" border="0" cellspacing="0" cellpadding="5">
  <tr className="playerName">
    <td className="player_name"></td>
    <td className="player_name">{this.props.players[0]}</td>
    <td className="player_name">{this.props.players[1]}</td>
    <td className="player_name">{this.props.players[2]}</td>
    <td className="player_name">{this.props.players[3]}</td>
  </tr>
  <tr className="sum">
    <td className="sum_score">Sum of Score</td>
    <td className="sum_score">1</td>
    <td className="sum_score">2</td>
    <td className="sum_score">3</td>
    <td className="sum_score">4</td>
  </tr>
  <tr className="score">
    <td>Round 1</td>
    <td>
      <textarea className="player_score" cols="7" rows="1" maxlength="5"></textarea>
    </td>
    <td>
      <textarea className="player_score" cols="7" rows="1" maxlength="5"></textarea>
    </td>
    <td>
      <textarea className="player_score" cols="7" rows="1" maxlength="5"></textarea>
    </td>
    <td>
      <textarea className="player_score" cols="7" rows="1" maxlength="5"></textarea>
    </td>
  </tr>
  <div className="add"></div>
</table>

<button className="button_glow add_round" id="add_round">ADD ROUND</button>
      </div>
    );
  }
}

export default Games;