import React, { Component } from 'react';
import './TodoForm.scss';
import { EventEmitter } from 'events';

class TodoForm  extends Component<any, any> {
    state = {
        text: ''
    }

    handleChange = (e: any) => {
            this.setState({
                text: e.target.value
            })
    }
    addHandler = () => {
        if(this.state.text && this.state.text.trim().length > 0) {
            this.props.addTodoHandler(this.state.text)
            this.setState({
                text: ''
            })
        }
    }
    clearHandler = () => {
        this.setState({
            text: ''
        })
    }

    render() {
        return(
            <div className='TodoForm'>
               <div className="TodoForm__item TodoForm__label">What I need to do:</div> 
               <input className='TodoForm__item TodoForm__input' value={this.state.text} type='text' onChange={this.handleChange}></input>
               <div className="TodoForm__item TodoForm__actions">
                    <div className="addButton" onClick={this.addHandler}>ADD</div>
                    <div className="clearButton" onClick={this.clearHandler}>CLEAR</div>
               </div>
            </div>
        )
    }
}

export default TodoForm