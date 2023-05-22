import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
// import {Button} from 
// import Button from 'react-bootstrap/Button';

export class App extends Component{

// let initialList

constructor() {
  super();
    this.state = {
      taskList: [],
      value: ''
    }
    // this.onAddList = this.onAddList.bind(this) //This is used when defining method normally. (not with arrow functions)
}

onAddTask = () => {
  // console.log(taskList);
  const newList = [...this.state.taskList, this.state.value];       // To update it so that it should add the next value and keep the initial value in place
    // taskList.push(this.state.value);
  this.setState(() => ({
      taskList: newList
    })
  )
  this.setState(() => ({value: ''}))
  console.log('on click handler for add list called');
  this.state.value = "";
}

useEffect = ((enterBtn) => {
  const keyDownHandler = event => {
    console.log('User pressed: ', event.key);

    if (event.key === 'Enter') {
      event.preventDefault();
      enterBtn();
    }
  };
  document.addEventListener('keydown', keyDownHandler);

  return () => {
    document.removeEventListener('keydown', keyDownHandler);
  };
}, []);

enterBtn = () => {
  // document.querySelector('input')
  // input.addEventListener('keyUp', (e) => {
  //   if(e.keyCode === 13) {
      const newList = [...this.state.taskList, this.state.value];       // To update it so that it should add the next value and keep the initial value in place
      // taskList.push(this.state.value);
    this.setState(() => ({
        taskList: newList
      })
    )
    this.setState(() => ({value: ''}))
    console.log('on click handler for add list called');
    this.state.value = "";
  }
// }

onChange = (event) => {       // Submit should work on enter key as well
  this.setState(() => ({
    value: event.target.value})
  )
  console.log(this.state.value);
  console.log('change method called')
}

onStrikeThrough = () => {
  // if(this.state.value =)

}

onStrikeThrough = event => {
  if (event.target.style.textDecoration) {
    event.target.style.removeProperty('text-decoration');
  } else {
    event.target.style.setProperty('text-decoration', 'line-through');
  }
};

// const listing = 
render() {
    console.log('task list', this.state.taskList);
    // const myList = {this.state.taskList.map((x) => <ul>x</ul>)}


    return (
      <div className="App">
        <header className="main_header"><h1>To Do List</h1></header>
        <div>
        <ul>{this.state.taskList.map((x) => <ul onClick={this.onStrikeThrough}>{x}</ul>)}</ul>
        {/* <ul>{myList}</ul> */}
        </div>
        <input placeholder='Start adding you list' value={this.state.value} onChange={this.onChange}/>
        <p></p>
        <button onClick={this.enterBtn} id='submitBtn'>Submit</button>
      </div>
    );
  }
}

export default App;
