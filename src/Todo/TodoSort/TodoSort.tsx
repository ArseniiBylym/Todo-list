import React, {Component} from 'react'
import './TodoSort.scss'
import { observer, inject } from 'mobx-react'
import classNames from 'classnames';

@inject('TodoStore')
@observer
class TodoSort extends Component<any, any> {

    formHandler = (e: any) => {
        console.log(e.target.value)
        this.props.TodoStore.setSortMethod(e.target.value)
    }
    
    render() {

        const method = this.props.TodoStore.sortMethod
        return (
            <div className="TodoSort">
                <div className="sortLabel">Sort list by: </div>
                <form onChange={this.formHandler} className="radioGroup">
                    <label className={classNames({'active': method === 'title'})}>
                        <span>&#10003;</span><input type="radio" name="contact" value="title" />
                        Title
                    </label>
                    <label className={classNames({'active': method === 'date'})}>
                        <span>&#10003;</span><input type="radio" name="contact" value="date" />
                        Date
                    </label>
                </form>
            </div>
        )
    }
}

export default TodoSort