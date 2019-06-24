import React, { Component } from 'react'
import './App.css';
import ListBanks from './ListBanks'
import  BankData from './Bank.json'

class App extends Component{
  state={
    banks:BankData
  }
  render(){
    BankData.forEach(function(element) { element.isFav = false; });
    console.log(BankData)
    return(
      <div className="App">
      <h2>Bank Management</h2>
      <ListBanks banks={this.state.banks} /> 
    
    </div>
    )
  }
}
export default App;
