import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddTaskComponent } from './add-task/add-task.component';

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
  constructor(private modalService: NgbModal) { }

  ngOnInit() {}

  removeTask(i){
    this.taskList.splice(i,1);
  }

  addTask(){
    const modalRef = this.modalService.open(AddTaskComponent, { windowClass: 'modal-window' });    
      modalRef.componentInstance.action.subscribe(modelResponse => {
      this.taskList.push(modelResponse);
      });
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
    this.taskList[index] = this.taskModel;
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