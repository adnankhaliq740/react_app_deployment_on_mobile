import React, { Component } from 'react'
import logos from './logos.svg'
import './App.css'

class App extends Component {
  state = {
    count: 'loading...'
  }

  componentDidMount = async () => {
    const { count } = await window.fetch(`/api/count`).then(res => res.json())
    this.setState({ count })
  }

  increment = async () => {
    const { count } = await window
      .fetch(`/api/count/increment`, { method: 'POST' })
      .then(res => res.json())
    this.setState({ count })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logos} className="App-logo" alt="logo" />
          <p>
            {'Learn '}
            <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              React
            </a>
            {', '}
            <a href="https://expressjs.com" target="_blank" rel="noopener noreferrer">
              Express
            </a>
            {', and '}
            <a href="https://kubernetes.io" target="_blank" rel="noopener noreferrer">
              Kubernetes
            </a>
          </p>
          <p>
            React app deployed
          </p>
        </header>
      </div>
    )
  }
}

export default App
