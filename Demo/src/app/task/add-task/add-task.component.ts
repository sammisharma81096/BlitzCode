import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '../../../../node_modules/@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  public task: any;
  @Output() action = new EventEmitter<string>();
  constructor(public activeModal: NgbActiveModal,) { }

  ngOnInit() {
    this.task = {
      "id": "",
      "name": "",
      "description": ""
    }
  }

  saveTask() {
    this.action.emit(this.task);
    this.activeModal.close();
  }

}
