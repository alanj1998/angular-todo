import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { ITodo } from 'src/app/interfaces/ITodo';

@Component({
  selector: 'app-to-do-input',
  templateUrl: './to-do-input.component.html',
  styleUrls: ['./to-do-input.component.scss']
})
export class ToDoInputComponent implements OnInit {
  inputFormGroup: FormGroup = new FormGroup({
    todoText: new FormControl()
  })

  @Output() addTodoOutput: EventEmitter<ITodo> = new EventEmitter<ITodo>();

  constructor() { }

  ngOnInit(): void {
  }

  addTodo() {
    const text: string = this.inputFormGroup.get('todoText')?.value;

    if(text !== "") {
      const todo: ITodo = {
        id: Math.random(),
        text: text
      }

      this.addTodoOutput.next(todo);
      this.inputFormGroup.get('todoText')?.setValue('');
    }
  }
}
