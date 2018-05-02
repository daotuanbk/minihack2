import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Games from './components/Games'



class App extends Component {
  state = {
    redirect: true,
    players: ['','','','']
  };

getName = (players) => {this.setState({redirect:false, players: players})}
  render() {
  return (   
    this.state.redirect ? (<div>
      <NavBar/>
      <Home getName={this.getName} />
    </div> 
    ) : (
      <div>
        <NavBar/>
        <Games players={this.state.players}/>
        </div>
    )
  )
  }
}

export default App;
