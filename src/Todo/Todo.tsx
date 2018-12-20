import React, { Component } from 'react';
import './Todo.scss';
import { ITodo } from '../model/interface'
import TodoHeader from './TodoHeader/TodoHeader';
import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';
import TodoFilter from './TodoFilter/TodoFilter'
import TodoSort from './TodoSort/TodoSort'
import {observer, inject} from 'mobx-react';

@inject('TodoStore')
@observer
class Todo extends Component<any, ITodo> {


    filterHandler = (type: string) => {
        this.setState({
            filter: type
        })
    }

    render() {
        return (
            <div className='Todo'>
                <TodoHeader />
                <TodoForm />
                {this.props.TodoStore.todoLength > 0 && <TodoSort />}
                <TodoList />
                {this.props.TodoStore.todoLength > 0 && <TodoFilter />}
            </div>
        )
    }
}

export default Todo