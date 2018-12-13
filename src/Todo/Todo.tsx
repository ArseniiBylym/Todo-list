import React, { Component } from 'react';
import './Todo.scss';
import {ITodoItem, ITodo} from '../model/interface'
import TodoHeader from './TodoHeader/TodoHeader';
import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';
import TodoFooter from './TodoFooter/TodoFooter'
import { BehaviorSubject } from 'rxjs';
import TodoService from '../rxjs/service';


class Todo extends Component<{}, ITodo> {
  
    todos$: any

    state: ({todoList: ITodoItem[], filter: string}) = {
        todoList: [],
        filter: ''
    }

    componentDidMount = () => {
        this.todos$ = TodoService.todos$
        .subscribe((todos: any) => this.setState({ todoList: todos }));
    }


  componentWillUnmount() {
        this.todos$.unsubscribe();
  }

  componentDidUpdate = () => {
      console.log(this.state)
  }


  handleAdd = (title: string) => {
        TodoService.add(title);
  }

  filterHandler = (type: string) => {
      this.setState({
          filter: type
      })
  } 

  
    render() {
        return(
            <div className='Todo'>
                <TodoHeader />
                <TodoForm addTodoHandler={this.handleAdd}/>
                <TodoList filter={this.state.filter} list={this.state.todoList}/>
                <TodoFooter filterFunc={this.filterHandler}/>
            </div>
        )
    }
}

export default Todo