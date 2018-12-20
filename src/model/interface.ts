// import { any } from "prop-types";
import { TodoModel } from './todoModel'

export interface ITodoItem {
    id: number,
    done: boolean,
    title: string,
    date: string,
    [method: string]: any
}

export interface ITodoItemComponent {
    key: number,
    config: {
        id: number,
        done: boolean,
        title: string,
        date: string,
    },
    index: number;
}

export interface ITodo {
    todoList: ITodoItem[],
    filter: string
}

export interface ITodoList {
    TodoStore: any,
    filteredList: any
    // list: ITodoItem[],
    // filter?: string,
}

export interface IService{
        update$: any,
        create$: any
}

export interface ITodoFilter{
    filterFunc: (type: string) => void,
    filter: string
}

export interface ITodoFormState{
    text: string
}
export interface ITodoFormProps{
    TodoStore: any
    // addTodoHandler: (text: string) => void
}