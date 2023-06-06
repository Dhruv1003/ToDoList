import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import ToDoApp from './ToDoFunctional';
export class App extends Component{

constructor() {
  super();
    this.state = {
      taskList: [],
      value: ''
    }
    // this.onAddList = this.onAddList.bind(this) //This is used when defining method normally. (not with arrow functions)
}

onAddTask = () => {
  const newList = [...this.state.taskList, this.state.value];       // To update it so that it should add the next value and keep the initial value in place
  this.setState(() => ({
      taskList: newList
    })
  )
  this.setState(() => ({value: ''}))
  console.log('on click handler for add list called');
  this.state.value = "";
}

onChange(event) {       // Submit should work on enter key as well
    this.setState(() => ({
      value: event.target.value})
    )
    console.log(this.state.value);
    console.log('change method called')
  }


onEnterBtn(event) {
  if(event.key === 'Enter') {
    this.onAddTask();
  }
}

onStrikeThrough (event) {
  if (event.target.style.textDecoration) {
    event.target.style.removeProperty('text-decoration');
  } else {
    event.target.style.setProperty('text-decoration', 'line-through');
  }
};

render() {
    console.log('task list', this.state.taskList);
    return (
      <div className="App">
        <header className="main_header"><h1>To Do List</h1></header>
        <div>
        <ul>{this.state.taskList.map((x) => <ul key={x} onClick={this.onStrikeThrough}>{x}</ul>)}</ul>
        </div>
        <input placeholder='Start adding you list' value={this.state.value} onChange={this.onChange}  onKeyUp={this.onEnterBtn}/>
        <p></p>
        <button onClick={this.onAddTask} id='submitBtn'>Submit</button>
        <ToDoApp/>
      </div>
    );
  }
}

export default App;
