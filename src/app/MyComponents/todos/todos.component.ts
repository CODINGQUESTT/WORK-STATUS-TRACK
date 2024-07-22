import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() {
    const localItem = localStorage.getItem("todos");
    if (localItem) {
      this.todos = JSON.parse(localItem);
    } else {
      this.todos = [
        { sno: 1, title: 'Learn Angular', desc: 'Complete Angular tutorial', active: true },
        { sno: 2, title: 'Build a Todo App', desc: 'Use Angular to build a todo app', active: true },
        // more todos...
      ];
    }
  }

  ngOnInit(): void {}

  deleteTodo(todoSno: number) {
    this.todos = this.todos.filter(todo => todo.sno !== todoSno);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
