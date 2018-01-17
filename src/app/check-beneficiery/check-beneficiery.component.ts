import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SuccessMessageService } from '../services/SuccessMessage.service';

@Component({
  selector: 'app-check-beneficiery',
  templateUrl: './check-beneficiery.component.html',
  styleUrls: ['./check-beneficiery.component.css'], 
})
export class CheckBeneficieryComponent implements OnInit {
  benificieryDetails = [{'AccNumber': 1234, "name":"Madhavi", "email":"madhavi@example.com"}];
  newObject = {};
  viewObject : {};
  onEditFlag : boolean = false;
  results;
  response;
  constructor(private message : SuccessMessageService, 
              private http : HttpClient) { }

  ngOnInit() {
    console.log(this.message.getMethod());
  }
  onEdit(value : {}){
    console.log(value);
    this.onEditFlag = true;
    this.message.viewObject = value;
    this.viewObject = value;
    this.response = this.message.getMethod();
  }

}
