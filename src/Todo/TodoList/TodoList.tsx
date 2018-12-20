import React, { Component } from 'react';
import './TodoList.scss';
import TodoItem from '../TodoItem/TodoItem'
import { ITodoList} from '../../model/interface'
import {observer, inject} from 'mobx-react';

@inject('TodoStore')
@observer
class TodoList extends Component<any, {}> {
    state = {}

    render() {

        const { filteredList } = this.props.TodoStore
        let itemsList = null;
        if(filteredList.length > 0) {
            itemsList = filteredList.map((item:any, i:any) => {
                return (
                    <TodoItem key={item.id} config={item} index={i}/>
                )
            }) 
        }

        return(
            <div className='TodoList'>
                {itemsList}
            </div>
        )
    }
}

export default TodoList