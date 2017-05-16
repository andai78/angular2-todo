import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Task } from '../task';

@Component({
  selector: 'add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  @Output() taskadd = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addTask(event, form){
    event.preventDefault();
    /*console.log(' event : ', event);
    console.log(' value : ', form.newTask);*/
    let task: Task = {
      id: -1,
      name: form.newTask,
      isDone: false,
      isDeleted: false
    };
    this.taskadd.emit(task);
  }

}
