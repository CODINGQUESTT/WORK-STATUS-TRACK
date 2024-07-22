import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title!: string;
  desc!: string;
  @Output() todoAdd = new EventEmitter<any>();

  onSubmit() {
    const todo = {
      sno: Math.floor(Math.random() * 100), // Generate a random unique identifier
      title: this.title,
      desc: this.desc,
      active: true
    };
    this.todoAdd.emit(todo);
  }
}
