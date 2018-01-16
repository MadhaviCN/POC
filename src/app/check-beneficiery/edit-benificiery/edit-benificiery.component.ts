import { Component, OnInit } from '@angular/core';
import { SuccessMessageService } from '../../SuccessMessage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-benificiery',
  templateUrl: './edit-benificiery.component.html',
  styleUrls: ['./edit-benificiery.component.css'],
  providers : [SuccessMessageService]
})
export class EditBenificieryComponent implements OnInit {
  apply = true;
  val;
  constructor(private message : SuccessMessageService, private router : ActivatedRoute) {
     console.log(this.message.viewObject);
    // this.router.params.subscribe(params => console.log(params));
    // this.router.parent.params.subscribe(params => console.log(params)); 
   }

  ngOnInit() {
    console.log(this.message.viewObject);
  }
  onUpdate(){
    alert('updated');
  }

}
