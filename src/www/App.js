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
                this was deployed on mobile with the help of github action and was deployed on surge
          </p>
          <p>
            <code>yarn deploy</code> to build containers and deploy them to production
          </p>
          <p>
            Call <code>/api/count/increment</code>
            <button onClick={this.increment} className="App-button">
              Go
            </button>
          </p>
        </header>
      </div>
    )
  }
}

export default App
