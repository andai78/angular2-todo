import { Component } from '@angular/core';

import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2 : Todo';
  tasks: Task[] = [
    {id:1, name: 'Task 1', isDone: false, isDeleted: false},
    {id:2, name: 'Task 2', isDone: false, isDeleted: false}
  ];

  updateTask(task: Task){
      console.log('app component',task);
      this.tasks.push(task)
  }

  remove(){
      console.log('remove')
  }
}
