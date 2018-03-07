import React, { Component } from 'react'

import web3 from './web3'

import './App.css'

class App extends Component {
  render() {
    web3.eth.getAccounts()
      .then(console.log)

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ether Lottery Client</h1>
        </header>
      </div>
    )
  }
}

export default App
