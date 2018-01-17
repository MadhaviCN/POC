import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
apply = true;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form : NgForm){
    console.log(form);
  }

}
