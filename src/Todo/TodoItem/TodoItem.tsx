import React, { Component } from 'react';
import './TodoItem.scss';
import { ITodoItemComponent} from '../../model/interface'
import DeleteIcon from '../../img/delete.svg'
import CheckBoxIcon from '../../img/check-box-empty.svg'
import OutlineIcon from '../../img/outline-done.svg'
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
        const {done, title, date} = this.props.config
        return(
            <div className='TodoItem'>
                <div className="TodoItem__mainContainer">
                    <div className="TodoItem__marker"><img src={done ? OutlineIcon : CheckBoxIcon} alt='Done' onClick={this.doneHandler}/></div>
                    <div className={done ? "TodoItem__text through" : "TodoItem__text"}>{title}</div>
                    <div className="TodoItem__date">{moment(date).format('YYYY-MM-DD')}</div>
                    <div className="TodoItem__delete" onClick={this.removerHandler}><img src={DeleteIcon} alt='Delete'/></div>
                </div>
            </div>
        )
    }
}

export default TodoItem