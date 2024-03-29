import React, { Component } from 'react';

class Todolist extends Component {
  render() {
    const todoList = [
      { taskName : '빨래하기', finished : false},
      { taskName : '공부하기', finished : true},
    ]
    return (
      <div>
        {todoList.filter(todo => todo.finished === true).map((todo, i) => <div key={todo.taskName}>{todo.taskName}</div>)}
      </div>
    );
  }
}

export default Todolist;