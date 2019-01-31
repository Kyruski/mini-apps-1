import React from "react";
import ReactDOM from "react-dom";
import Title from './components/title.jsx';
import Score from './components/score.jsx'
import Board from './components/board.jsx'
import SlotSelector from './components/slotselector.jsx'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
    <div>
      <div>
        <Title />
      </div>
        <SlotSelector />
      <div>
        <Board />
      </div>
      <div>
        <Score />
      </div>
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));