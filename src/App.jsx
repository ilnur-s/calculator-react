import './styles/reset.scss';
import './styles/style.scss';

import React from 'react';
import * as math from 'mathjs';
import Display from './components/Display';
import Numpad from './components/Numpad';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: [],
    };
  }

  normalizeState = () => {
    const { expression } = this.state;
    const newState = expression;
    return newState.join('').split(/([+\-/×])/).filter((item) => item !== '');
  };

  addNumber = (number) => {
    const { expression } = this.state;
    const newState = expression;
    newState.push(number);
    this.setState({ expression: newState });
  };

  addSymbol = (symbol) => {
    const newState = this.normalizeState();
    if (newState.length) {
      if (!'+-/×.'.includes(newState[newState.length - 1])) {
        if (symbol === '.' && newState[newState.length - 1].includes('.')) {
          return;
        }
        newState.push(symbol);
        this.setState({ expression: newState });
      }
    }
  };

  allClean = () => {
    this.setState({ expression: [] });
  };

  deleteLastChar = () => {
    const { expression } = this.state;
    const indexLastChar = expression.length - 1;
    const result = expression.slice(0, indexLastChar);
    this.setState({ expression: result });
  };

  calculate = () => {
    const { expression } = this.state;
    let result = '';
    expression.forEach((item) => {
      if ('+-/'.includes(item)) {
        result += ` ${item} `;
      } else if ('×'.includes(item)) {
        result += ' * ';
      } else {
        result += item;
      }
    });
    this.setState({ expression: [...math.evaluate(result).toString()] });
  };

  pressButton = (event) => {
    const elementClasses = event.target.classList.value;
    if (elementClasses.includes('number')) {
      this.addNumber(event.target.textContent);
    } else if (elementClasses.includes('symbol')) {
      this.addSymbol(event.target.textContent);
    } else if (elementClasses.includes('all-clean')) {
      this.allClean();
    } else if (elementClasses.includes('backspace')) {
      this.deleteLastChar();
    } else if (elementClasses.includes('result')) {
      this.calculate();
    }
  }

  render() {
    const { expression } = this.state;
    return (
      <div className="container">
        <Display expression={expression} />
        <Numpad pressButton={this.pressButton} />
      </div>
    );
  }
}

export default Calculator;
