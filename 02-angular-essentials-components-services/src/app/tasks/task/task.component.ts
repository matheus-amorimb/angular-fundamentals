import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "../../models/task.model";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() completeTask : EventEmitter<Task> = new EventEmitter<Task>();

  OnCompleteTask(){
    this.completeTask.emit(this.task);
  }
}
