import React, { Component } from 'react';
import './TodoFooter.scss';
import TodoService from '../../rxjs/service';
import {ITodoFooter} from '../../model/interface'

class TodoFooter extends Component<ITodoFooter, {}> {
    state = {
        
    }

    showActualHandler = () => {
        // TodoService.removeCompleted()

    }

    showAllHandler = () => {
        // TodoService.showAll()
    }

    showCompletedHandler = () => {
        // TodoService.showComplated()
    }

    render() {
        return(
            <div className='TodoFooter'>
                <div className="showAll__button" onClick={this.props.filterFunc.bind(this, 'all')}>SHOW ALL</div>
                <div className="showCompleted__button" onClick={this.props.filterFunc.bind(this, 'completed')}>SHOW COMPLETED</div>
                <div className="showNotCompleted__button" onClick={this.props.filterFunc.bind(this, 'active')}>SHOW ACTIVE</div>
            </div>
        )
    }
}

export default TodoFooter