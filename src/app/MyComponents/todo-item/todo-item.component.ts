import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: any;
  @Output() todoDelete = new EventEmitter<number>();

  delete() {
    this.todoDelete.emit(this.todo.sno);
  }
}
