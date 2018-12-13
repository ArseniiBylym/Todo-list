import React, { Component } from 'react';
import './TodoItem.scss';
import {ITodoItem, ITodoItemComponent} from '../../model/interface'
import CheckIcon from '../../img/round-check.svg'
import RoundIcon from '../../img/round-empty.svg'
import DeleteIcon from '../../img/delete.svg'
import moment from 'moment';
import TodoService from '../../rxjs/service';

class TodoItem extends Component<ITodoItemComponent, {}> {
    state = {
        
    }

    doneHandler = () => {
        TodoService.toggle(this.props.config.id);
    }
    removerHandler = () => {
        TodoService.remove(this.props.config.id);
    }

    render() {
        console.log(this.props)

        const {done, title, date} = this.props.config
        return(
            <div className='TodoItem'>
                <div className="TodoItem__mainContainer">
                    <div className="TodoItem__marker"><img src={done ? CheckIcon : RoundIcon} alt='Done' onClick={this.doneHandler}/></div>
                    <div className={done ? "TodoItem__text through" : "TodoItem__text"}>{title}</div>
                    <div className="TodoItem__date">{moment(date).format('YYYY-MM-DD')}</div>
                    <div className="TodoItem__delete" onClick={this.removerHandler}><img src={DeleteIcon} alt='Delete'/></div>
                </div>
                {/* <div className="TodoItem__controls">
                    {!done && <div className="controls__done" onClick={this.doneHandler}>DONE</div>}
                    <div className="controls__remove" onClick={this.removerHandler}>REMOVE</div>
                </div> */}
            </div>
        )
    }
}

export default TodoItem