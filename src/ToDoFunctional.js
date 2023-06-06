import {React, useState} from "react";

function ToDoApp() {

    const[name, setName] = useState('')
    const[Orglist, setNewList] = useState([])

    const onStrikeThrough = (event) => {
        if (event.target.style.textDecoration) {
          event.target.style.removeProperty('text-decoration');
        } else {
          event.target.style.setProperty('text-decoration', 'line-through');
        }
    };


    const changeHandler = (e) => {
        console.log('new name is...', e.target.value);
        setName(e.target.value);
        console.log('name is', name);
    };

    const addTask = () => {
        console.log('orginal list is...', Orglist, name);
        setNewList([...Orglist, name]);
        console.log('list updated', Orglist);
        setName('');
    };

    const enterBtnHandler = (event) => {
        if(event.key=== 'Enter') {
            addTask();
        }
    }

    return (
        <div>
            <header className="main_header"><h1>To Do List</h1></header>
            <div>
                <ul>
                {Orglist.map(item => <li key={item} onClick={onStrikeThrough}>{item}</li>)}
                </ul>
                <input placeholder="Start adding your list" value={name} onChange={changeHandler} onKeyUp={enterBtnHandler}></input>
                <button onClick={addTask} id='Submitbtn'>Submit</button>
            </div>
        </div>
    )
}

export default ToDoApp;