
import React, { Component } from 'react';
import Header from "./component/header";
import './App.css';
import TodoInput from './component/todoInput';
import TodoItem from  "./component/todoItem"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      todos : [
        {id : 0 ,text : "make dinner night"},
        {id : 1 ,text : "aa bb cc"},
        {id : 2 ,text : "Learn to make reactapp"}
      ],
      nextId : 3,

    }
    //console.log(this.state.nextId)
    this.addTodo=this.addTodo.bind(this);
    this.removeTodo=this.removeTodo.bind(this);

  }
  addTodo(todoText){
 
     let todos=this.state.todos.slice();
     console.log(todos);
     todos.push({id:this.state.nextId,text:todoText});
     this.setState(
       {
         todos : todos,
        //nextId: ++this.state.nextId
       }
     );
     this.setState(
      {
        //todos : todos,
       nextId: ++this.state.nextId
      }
    );
  }
  removeTodo(id){
    this.setState({
      todos:this.state.todos.filter((todo,index)=>
      todo.id!==id 
      )
    })
  }
  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <TodoInput todoText="" addTodo={this.addTodo} />
          <ul>
            {
              this.state.todos.map((todo)=>{
                return <TodoItem todo={todo} key = {todo.id} id={todo.id} removeTodo={this.removeTodo}/>
              }

              )
            }
          </ul>
        </div>

      </div>
    );

  }
}

export default App;
