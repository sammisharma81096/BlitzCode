import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  public taskList: any[] = [
    {
      "id": "101",
      "name": "Task 1",
      "description": "This is task 1",
      "isEdit": false
    }
  ];
  public isNew: boolean;
  public taskModel: any;
  constructor() { }

  ngOnInit() {
  }

  removeTask(i){
    this.taskList.splice(i,1);
  }

  addTask(){
    let isTaskEditted = this.taskList.filter(task => task.isEdit == true)[0];
    if(!isTaskEditted){
      const taskObj = this.getTask();
      this.taskList.push(taskObj);
      this.isNew = true;
    }
    else {
      alert("Please Save editted task before adding new !!!");
    }
  }

  editTask(task){
    let isTaskEditted = this.taskList.filter(task => task.isEdit == true)[0];
    if(!isTaskEditted){
      this.taskModel = this.getTask();
      this.taskModel.id = task.id;
      this.taskModel.name = task.name;
      this.taskModel.description = task.description;
      this.taskModel.isEdit = false;
      task.isEdit = true;
    }
    else {
      alert("Please Save editted task before adding new !!!");
    }
  }

  cancelTask(index){
    this.taskList[index].isEdit = false;
    if(this.isNew){
      this.taskList.splice(index,1);
      this.isNew = false;
    }
    else{
      this.taskList[index] = this.taskModel;
    }
  }

  saveTask(task){
    task.isEdit = false;
    this.isNew = false;
  }

  getTask(){
    return {
      "id": "",
      "name": "",
      "description": "",
      "isEdit": true
    }
  }

}