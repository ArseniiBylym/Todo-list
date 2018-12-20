import { observable, computed, action, reaction } from 'mobx';
import { ITodoItem } from '../model/interface'
import {TodoModel} from '../model/todoModel'

class Todo {
    @observable public todoList: ITodoItem[] = [];
    @observable public currentTodoIndex: number | null = null;
    @observable public filter: string = 'all';
    @observable public sortMethod: string = '';

    private sortTodo = reaction(
        () => this.sortMethod,
        (method: string) => {
            this.sortTodoList(method)
        }
    );

    @action setSortMethod(name: string): void {
        this.sortMethod = name
    }

    @action sortTodoList(method: string) {
        this.todoList = this.todoList.slice().sort((a: ITodoItem, b: ITodoItem) => {
            if (a[method] > b[method]) {
                return 1;
            }
            if (a[method] < b[method]) {
                return -1;
            }
            return 0;
        })
    }

    @computed private get todoLength(): number {
        return this.todoList.length
    }

    @action private addTodo(title: string): void {
        const todo: ITodoItem = new TodoModel(title)
        this.todoList.push(todo)
        if(this.sortMethod) {
            this.sortTodoList(this.sortMethod)
        }
    }

    @action private removeTodo(id: number): void {
        this.todoList = this.todoList.filter((item, i) => {
            return item.id !== id
        })
    }

    @action private editTodoName (id: number, field: string): void {
        this.todoList = this.todoList.map(item => {
            if(item.id === id) {
                return {
                    ...item,
                    title: field
                }
            } else return item
        })
    }

    @action private switchTodo(id: number): void {
        this.todoList = this.todoList.map(item => {
            if(item.id === id) {
                return {
                    ...item,
                    done: !item.done
                }
            } else return item
        })
    }

    @action private changeFilter(name: string): void {
        this.filter = name;
    }

    @computed private get filteredList() {
        switch (this.filter) {
            case 'all': 
                return this.todoList
                break
            case 'completed':
                return this.todoList.filter(item => {
                    return item.done === true 
                })
                break
            case 'active':
                return this.todoList.filter(item => {
                    return item.done !== true 
                })
                break
            default: 
                break
        }
    }
}

export const TodoStore = new Todo()