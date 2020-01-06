import React, { Component } from 'react';
import './App.css';
import ResultComponent from './Components/Result';
import KeypadComponent from './Components/Keypad';

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: ""
    };
  };

  onClick = button => {
    if(button === "=") {
      this.calculate()
    } else if (button === "C") {
      this.reset()
    } else if (button === "CE") {
      this.backspace()
    } else {
      this.setState({
        result: this.state.result + button
      });
    };
  };

  //Binds to "="
  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + ""
      })
    } catch (error) {
      this.setState({
        result: "error"
      });
    };
  };
  //Binds to "C"
  reset = () => {
    this.setState({
      result: ""
    });
  };

  //Binds to "CE"
  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  };

  render() {
    return (
      <div>
        <div className="calculator-body">
          <h1>React Calculator</h1>
          <ResultComponent result={this.state.result}/>
          <KeypadComponent onClick={this.onClick}/>
        </div>
      </div>
    );
  };
};

export default App;
