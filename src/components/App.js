import React, {Component} from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';
  
class App extends Component {
  state = {
    players: [
      {
        name: "Red Team",
        score: 0,
        id: 1
      },
      {
        name: "Blue Team",
        score: 0,
        id: 2
      },
      {
        name: "Green Team",
        score: 0,
        id: 3
      },
      {
        name: "Yellow Team",
        score: 0,
        id: 4
      }
    ]
  };
  

  handleScoreChange = (index, delta) => {
    this.setState( (prevState) => ({
      score: prevState.players[index].score += delta
    }));
    //console.log('index: ' + index, 'delta: ' + delta);
  }

  handleRemovePlayer = (id) => {
    {console.log(this.state.players)}
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    {console.log('player ',this.state.players)}
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players}
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            index={index}
            key={player.id.toString()} 
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}           
          />
        )}
        <AddPlayerForm />
      </div>
    );
  }
}

export default App;
