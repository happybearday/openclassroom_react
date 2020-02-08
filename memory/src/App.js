import React from 'react';
import Card from './Card'
import GuessCount from './GuessCount'

class App extends React.Component {
  
  handleCardClick(card) {
    console.log(card, 'clicked')
  }
  render() {
    return (
      <div className="memory">
        <GuessCount guesses={0} />
        <Card card="😀" feedback="hidden" prop_onClick={this.handleCardClick} />
        <Card card="🎉" feedback="justMatched" prop_onClick={this.handleCardClick}/>
        <Card card="💖" feedback="justMismatched" prop_onClick={this.handleCardClick}/>
        <Card card="🎩" feedback="visible" prop_onClick={this.handleCardClick}/>
        <Card card="🐶" feedback="hidden" prop_onClick={this.handleCardClick}/>
        <Card card="🐱" feedback="justMatched" prop_onClick={this.handleCardClick}/>
      </div>
    )
  }
}

export default App
