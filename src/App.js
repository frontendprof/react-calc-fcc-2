import React from "react";
import './App.css';

import Button from "./components/Button";
import Input from "./components/Input";





class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      input:0
    }
  }
  
  render(){
    return(
      <div className="App">
        <div className="calc-wrapper">
          <Input id="display" className="input" input={this.state.input}/>
          <div className="row">
            <Button onClick={this.blah}id="seven">7</Button>
            <Button id="eight">8</Button>
            <Button id="nine">9</Button>
            <Button id="divide">/</Button>
          </div>
          
          <div className="row">
            <Button id="four">4</Button>
            <Button id="five">5</Button>
            <Button id="six">6</Button>
            <Button id="multiply">X</Button>
          </div>
          
          <div className="row">
            <Button id="one">1</Button>
            <Button id="two">2</Button>
            <Button id="three">3</Button>
            <Button id="subtract">-</Button>
          </div>
          
          <div className="row">
            <Button id="decimal">.</Button>
            <Button id="zero">0</Button>
            <Button id="equals">=</Button>
            <Button id="add">+</Button>
          </div>
          
        </div>
      </div>
      )
  }
  
    
}


export default App;