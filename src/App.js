import './App.css';
import { Component } from 'react'
import {inject, observer} from 'mobx-react';

@inject('BirdStore')
@observer
class App extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.BirdStore.addBird(this.bird.value)
    this.bird.value = ''
  }

  render(){
    const {BirdStore} = this.props

    return (
      <div className="App">
        <header className="App-header">
          <h2>You Have {BirdStore.birdCount} birds</h2>
          <form onSubmit={e => this.handleSubmit(e)}>
            <input
              type="text"
              placeholder="Enter Bird"
              ref={input => this.bird = input}
            />
            <button>Add Bird</button>
          </form>
          <ul>
            {
              BirdStore.birds.map((bird,i) => (
                <li key={i}>{bird}</li>
              ))
            }
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
