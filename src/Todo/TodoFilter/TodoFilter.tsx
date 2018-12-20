import React, { Component } from 'react';
import './TodoFilter.scss';
import {ITodoFilter} from '../../model/interface'
import {observer, inject} from 'mobx-react';

@inject('TodoStore')
@observer
class TodoFilter extends Component<any, {}> {
    state = {}

    filterHandler = (name:string) => (event:any) => {
        this.props.TodoStore.changeFilter(name)
    }

    render() {
        const {filter} = this.props.TodoStore
        return(
            <div className='TodoFilter'>
                <div className={`showAll__button ${filter === 'all' && 'activeButton'}`} onClick={this.filterHandler('all')}>SHOW ALL</div>
                <div className={`showCompleted__button ${filter === 'completed' && 'activeButton'}`} onClick={this.filterHandler('completed')}>SHOW COMPLETED</div>
                <div className={`showNotCompleted__button ${filter === 'active' && 'activeButton'}`} onClick={this.filterHandler('active')}>SHOW ACTIVE</div>
            </div>
        )
    }
}

export default TodoFilter

