import { Component, OnInit } from '@angular/core';
import { SuccessMessageService } from '../SuccessMessage.service'

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css'],
  providers : [SuccessMessageService]
})
export class AccountDetailsComponent implements OnInit {
  apply=true;
  accNumber : number;
  constructor(private message : SuccessMessageService) { }

  ngOnInit() {
    this.accNumber = this.message.accountNumber;
    // console.log(this.accNumber)
  }

}
