import React, { Component } from 'react';
import './App.css';
import Counter2 from './03/Counter2';
import ScrollSpy from './03/ScrollSpy';
import Input from './03/Input';


class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      count :1,
    }
    this.increaseCount = this.increaseCount.bind(this);
  }
  increaseCount() {
    this.setState(({count}) => ({
      count : count+1,
    }));
  }
  
  render() {
    
    return (
      <div className='body'>
        <Counter2 count = {this.state.count} onAdd = {this.increaseCount}/>
        <ScrollSpy />
        <Input name={'aaa'}/> 
      </div>
    );
  }
}


export default App; 
