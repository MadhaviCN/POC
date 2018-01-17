import { Component, OnInit } from '@angular/core';
import { SuccessMessageService } from '../services/SuccessMessage.service';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css'],
  providers : [SuccessMessageService]
})
export class FundTransferComponent implements OnInit {
  apply = true;
  accNumber : number;
  constructor(private message : SuccessMessageService) { }

  ngOnInit() {
    this.accNumber = this.message.accountNumber;
    console.log(this.accNumber);
  }
  onTransfer(){
    this.message.successMessage("successFull");
  }

}
