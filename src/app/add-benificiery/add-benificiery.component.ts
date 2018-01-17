import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SuccessMessageService} from '../services/SuccessMessage.service';

@Component({
  selector: 'app-add-benificiery',
  templateUrl: './add-benificiery.component.html',
  styleUrls: ['./add-benificiery.component.css'],
  providers : [SuccessMessageService]
})
export class AddBenificieryComponent implements OnInit {
  apply = true;
  benficieryData;
  accountNumber : number;
  IFSCcode : number;
  name : string;
  email:string;
  addBenificieryObject = {};

  constructor(private httpclient : HttpClient,
              private successMsg : SuccessMessageService) { }

  ngOnInit() {
    
   
  }
  onSave(){    
    alert('save btn clicked');
    this.addBenificieryObject = {'acc':this.accountNumber, 'ifsc':this.IFSCcode, 'user':this.name, 'mail':this.email};
    //this.successMsg.postMethod('/', this.addBenificieryObject)
    this.successMsg.postMethod(this.addBenificieryObject);
  }

}
