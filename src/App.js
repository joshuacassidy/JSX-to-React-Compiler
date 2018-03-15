import React, { Component } from 'react';
import './App.css';
import Console from './Components/Console'
import Header from './Components/Header'
import Input from './Components/Input'
import Output from './Components/Output'

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '/* Compile your JSX to React!  */',
      output: '',
      err: ''
    }
  }

  transpile = (e) => { 
    let code = e.target.value;
    try{
      this.setState({
        output: window.Babel.transform(code, {presets: ['es2016','react']}).code,
        err: ''
      })
    }catch(err){
      this.setState({err: err.message})
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Input transpile={this.transpile} input={this.state.input} />
        <Output output={this.state.output} />          
        <Console err={this.state.err}/>
      </div>
    );
  }
}


export default App;
