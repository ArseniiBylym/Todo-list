import React, { Component } from 'react';
import './TodoList.scss';
import TodoItem from '../TodoItem/TodoItem'
import { ITodoList} from '../../model/interface'

class TodoList extends Component<ITodoList, {}> {
    state = {}

    render() {
        let itemsList = null;
        if(this.props.list.length > 0) {
            let filteredList = null
            switch (this.props.filter) {
                case 'completed': 
                    filteredList = this.props.list.filter((item,i) => {
                        return item.done === true
                    })
                    break
                case 'active': 
                    filteredList = this.props.list.filter((item, i) => {
                        return item.done === false
                    })
                    break
                default: 
                    filteredList = this.props.list
                    break
            }
            itemsList = filteredList.map((item, i) => {
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