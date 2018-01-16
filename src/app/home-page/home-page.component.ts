import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  apply = true;
  // headerList = [];
  // listValue : string[] = ["Account Details", 'Add Benificiery', 'Check Benificiery', 'Fund Transfer', 'Transfer History']
  // obj = {};
  constructor() { }

  ngOnInit() {
    // for(let i = 0; i < this.listValue.length; i++){
    //   this.obj = {'name':this.listValue[i], 'id': i+1}
    //   this.headerList.push(this.obj);
    //   console.log(this.headerList);
    // } 
  }

}
