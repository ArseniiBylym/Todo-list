// import 'rxjs/Observable';
import { Subject, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/map';
import TodoModel from '../model/todoModel'
import {ITodoItem, ITodo} from '../model/interface'

class TodoService {
    update$: BehaviorSubject<any>;
    create$: Subject<ITodoItem>;
    remove$: Subject<number>
    toggle$: Subject<number>;
    createTodo$: any;
    removeTodo$: any;
    toggleTodo$: any;
    todos$: any;


  constructor() {
    this.update$ = new BehaviorSubject((todos:ITodoItem[]) => todos);
    this.create$ = new Subject();
    this.remove$ = new Subject();
    this.toggle$ = new Subject();
    this.createTodo$ = new Subject();
    this.removeTodo$ = new Subject();
    this.toggleTodo$ = new Subject();

    this.todos$ = this.update$
        .scan((todos:ITodoItem[], operation: any) => operation(todos), [])
        .publishReplay(1)
        .refCount();
    
    this.create$
        .map((todo:ITodoItem) => (todos:ITodoItem[]) => todos.concat(todo))
        .subscribe(this.update$);
    
    this.remove$
        .map((id:number) => (todos:ITodoItem[]) => todos.filter(todo => todo.id !== id))
        .subscribe(this.update$);
    
    this.toggle$
        .map((id:number) => (todos:ITodoItem[]) => {
          const targetTodo = todos.find(todo => todo.id === id);
          if(targetTodo) {
              targetTodo.done = !targetTodo.done;
          }
          return todos;
        })
        .subscribe(this.update$);
    
    this.createTodo$
        .subscribe(this.create$);
    
    this.removeTodo$
        .subscribe(this.remove$);

    this.toggleTodo$
        .subscribe(this.toggle$);
  }

  add(title:string) {
    this.createTodo$.next(new TodoModel(title));
  }

  remove(id:number) {
    this.removeTodo$.next(id);
  }

  toggle(id:number) {
    this.toggleTodo$.next(id);
  }
}

export default new TodoService();