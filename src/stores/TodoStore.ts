import { observable, computed, action } from 'mobx';
import { ITodoItem } from '../model/interface'
import {TodoModel} from '../model/todoModel'

class Todo {
    @observable public todoList: ITodoItem[] = [];
    @observable public currentTodoIndex: number | null = null;

    @computed private get currentTodo(): ITodoItem | null | undefined {

        if(this.todoList.length > 0 && this.currentTodoIndex) {
            const findedTodo: ITodoItem | undefined  = this.todoList.find((item, i): boolean  => {
                return item.id === i;
            }) 
            return findedTodo 
        } else return null
        
       
    };

    @computed private get todoLength(): number {
        return this.todoList.length
    }

    @action private addTodo(title: string) {
        const todo: ITodoItem = new TodoModel(title)
        this.todoList.push(todo)
    }

    @action private removeTodo(id: number) {
        this.todoList = this.todoList.filter((item, i) => {
            item.id !== id
        })
    }

    @action private setAssCurrent(id: number): void {
        this.currentTodoIndex = id
    }

    @action private updateTodo (id: number, field: string) {

    }


}

export const TodoStore = new Todo()