import React, { Component } from 'react';
import "./todoInput"; 
import "./todoInput";
class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    removeTodo(id){
        this.props.removeTodo(id);
    }
    render() { 
        return(
            <div className="todoWrapper">
                <button className="removeTodo" onClick={(e)=>this.removeTodo(this.props.id)}>Remove</button>
          
             </div>
        )
    }
}
 
export default TodoItem;

