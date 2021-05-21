import React from "react";
import Square from "./Square";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      takeTurn: true,
      winner: {
        player: null,
        won: false,
      },
      counter: 0,
      outOfMoves: false,
    };
  }
  comupteWinner() {
    let arr = this.state.squares;
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
        return arr[a];
      }
    }
    return null;
  }
  handleClick(i) {
    let temp = this.state.squares;
    if (!this.state.winner.won) {
      temp[i] = this.state.takeTurn === false ? "X" : "O";
      this.setState({ squares: temp });
      let winner = this.comupteWinner();
      if (winner) {
        this.setState({
          winner: {
            player: winner,
            won: true,
          },
        });
      }
      this.setState({ takeTurn: !this.state.takeTurn });
    }
  }
  resetGame() {
    const initialState = {
      squares: Array(9).fill(null),
      takeTurn: true,
      winner: {
        player: null,
        won: false,
      },
      counter: 0,
      outOfMoves: false,
    };
    this.setState(initialState);
  }
  render() {
    return (
      <div style={GameStyle.container}>
        <h1>Tic Tac Toe</h1>
        <div style={GameStyle.row}>
          <Square
            style={GameStyle.square}
            onClick={() => this.handleClick(0)}
            value={this.state.squares[0]}
          />
          <Square
            style={GameStyle.square}
            onClick={() => this.handleClick(1)}
            value={this.state.squares[1]}
          />
          <Square
            style={GameStyle.square}
            onClick={() => this.handleClick(2)}
            value={this.state.squares[2]}
          />
        </div>
        <div style={GameStyle.row}>
          <Square
            style={GameStyle.square}
            onClick={() => this.handleClick(3)}
            value={this.state.squares[3]}
          />
          <Square
            style={GameStyle.square}
            onClick={() => this.handleClick(4)}
            value={this.state.squares[4]}
          />
          <Square
            style={GameStyle.square}
            onClick={() => this.handleClick(5)}
            value={this.state.squares[5]}
          />
        </div>
        <div style={GameStyle.row}>
          <Square
            style={GameStyle.square}
            onClick={() => this.handleClick(6)}
            value={this.state.squares[6]}
          />
          <Square
            style={GameStyle.square}
            onClick={() => this.handleClick(7)}
            value={this.state.squares[7]}
          />
          <Square
            style={GameStyle.square}
            onClick={() => this.handleClick(8)}
            value={this.state.squares[8]}
          />
        </div>

        {this.state.winner.won ? (
          <>
            <h1>{this.state.winner.player} is the winner! 🎉</h1>
            <button
              style={GameStyle.resetButton}
              onClick={() => this.resetGame()}
            >
              Reset
            </button>
          </>
        ) : null}
      </div>
    );
  }
}
export default Game;

const GameStyle = {
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    height: "100vh",
    width: "100%",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  square: {
    padding: "3vw",
    border: "1px solid black",
    width: "1rem",
    height: "1rem",
    textAlign: "center",
  },
  resetButton: {
    width: "16vw",
    height: "4vh",
    background: "#4DB33D",
    outline: "none",
    border: "none",
    borderRadius: "3rem",
    color: "#FFFFFF",
    weight: "bolder",
    marginTop: "5%",
  },
};
