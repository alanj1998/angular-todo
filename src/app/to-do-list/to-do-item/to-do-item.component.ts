import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from 'src/app/interfaces/ITodo';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss']
})
export class ToDoItemComponent implements OnInit {
  @Input() todo: ITodo | undefined;
  @Output() removeTodoOutput: EventEmitter<number>
    = new EventEmitter<number>();

  constructor() {
    this.todo = undefined;
  }

  ngOnInit(): void {
  }

  removeTodo(): void {
    if (this.todo != undefined) {
      this.removeTodoOutput.next(this.todo.id);
    }
  }
}