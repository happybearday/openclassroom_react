import React, { Component } from 'react'
import './App.css';

import Card from './Card'

const alphabet = 'azertyuiopqsdfghjklmwxcvbn'.split('')

//Card = ({ card, feedback, index, onClick})

class App extends Component {
  state = {
    chars : 'abc d ef g'.replace(/ /g, '_').split(''),
    guesses : [],
    guessed_letter_index : null,
    guessed_alphabet_index : null,
    count_number : 0
  }
  
  modifyFeedBack = (index) => {
    let {guesses} = this.state
    if (guesses.includes(index)){
      return 'found'
    }
    else{
      return ''
    }
  }


  
  clickOnACard = (index, alphabet_cases)=>{
    let {chars, guesses, count_number, guessed_letter_index, guessed_alphabet_index} = this.state

    console.log(guesses, guessed_letter_index, guessed_alphabet_index)
    let matched = false

    console.log('___37___')
    if (guessed_alphabet_index ===  null && guessed_letter_index === null){
      if (alphabet_cases){
          this.setState(() =>({guessed_alphabet_index : index}))
      
        } else {
          this.setState(() =>({guessed_letter_index   : index}))
      }
      return
    }

    console.log('___48___')

    //guessed_alphabet_index
    if ( guessed_letter_index != null && guessed_alphabet_index === null && alphabet_cases ) {
      console.log('___guessed_letter_index != null && guessed_alphabet_index === null && alphabet_cases___')
      matched = ( alphabet[index] === chars[guessed_letter_index] )
      if (matched){
        this.setState(()=>({guesses : [...guesses, ...[guessed_letter_index]]}))
        this.setState(() =>({guessed_alphabet_index : null, guessed_letter_index : null}))
        return 
      }else{
        this.setState(() =>({guessed_alphabet_index : null, guessed_letter_index : null}))
        this.setState(() =>({count_number : count_number +1}));
        return 
      }

    }

    if ( guessed_letter_index === null && guessed_alphabet_index === null && alphabet_cases ) {
      console.log('___guessed_letter_index === null && guessed_alphabet_index === null && alphabet_cases___')
      this.setState(() =>({guessed_alphabet_index : index}))
      return
    }

    //guessed_letter_index
    if ( guessed_letter_index === null && guessed_alphabet_index != null && !alphabet_cases ) {
      console.log('___guessed_letter_index === null && guessed_alphabet_index != null && !alphabet_cases___')
      matched = ( alphabet[guessed_alphabet_index] === chars[index] )
      if (matched){
        this.setState(()=>({guesses : [...guesses, ...[index]]}))
        this.setState(() =>({guessed_alphabet_index : null, guessed_letter_index : null}))
        return 
      } else{
        this.setState(() =>({guessed_alphabet_index : null, guessed_letter_index : null}))
        this.setState(() =>({count_number : count_number +1}));
        return 
      }

    }

    if ( guessed_letter_index === null && guessed_alphabet_index === null && !alphabet_cases ) {
      console.log('___guessed_letter_index === null && guessed_alphabet_index === null && !alphabet_cases___')
      this.setState(() =>({guessed_letter_index : index}))
      return

    }
  }

  render() {
    const {count_number , chars} = this.state
    return (
    <div>
      <div>Mistakes count : {count_number}</div>
    <ul> {chars.map( (char, index) => <Card card={char} feedback={this.modifyFeedBack(index)} key={index} index={index} onClick={() => this.clickOnACard(index, false)} /> )} </ul>
    <br/>
    <ul> {alphabet.map( (char, index) => <Card card={char} feedback='keyboard' key={index} index={index} onClick={() => this.clickOnACard(index,true)}/> )} </ul>
    </div>)
  }
}

export default App;
