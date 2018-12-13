import 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/map';
import TodoModel from '../model/todoModel'

class TodoService {

  constructor() {
    this.update$ = new BehaviorSubject(todos => todos);
    this.create$ = new Subject();
    this.remove$ = new Subject();
    this.toggle$ = new Subject();
    this.createTodo$ = new Subject();
    this.removeTodo$ = new Subject();
    this.toggleTodo$ = new Subject();

    this.todos$ = this.update$
        .scan((todos, operation) => operation(todos), [])
        .publishReplay(1)
        .refCount();
    
    this.create$
        .map(todo => todos => todos.concat(todo))
        .subscribe(this.update$);
    
    this.remove$
        .map(uuid => todos => todos.filter(todo => todo.id !== uuid))
        .subscribe(this.update$);
    
    this.toggle$
        .map(uuid => todos => {
          const targetTodo = todos.find(todo => todo.id === uuid);
          targetTodo.done = !targetTodo.done;
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

  add(title) {
    this.createTodo$.next(new TodoModel(title));
  }

  remove(uuid) {
    this.removeTodo$.next(uuid);
  }

  toggle(uuid) {
    this.toggleTodo$.next(uuid);
  }
}

export default new TodoService();