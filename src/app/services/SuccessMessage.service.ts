import { Injectable, OnInit } from "@angular/core";
import { Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { HttpClient } from "@angular/common/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
//import {server} from '../../server/server.js'

@Injectable()
export class SuccessMessageService  implements OnInit{
    accountNumber : number = 9972188764;
    viewObject : {};
    users : any;
    benificieryDataFromApi;
    constructor(private http : HttpClient){}
    successMessage(message : string){
        console.log(message);
    }
    ngOnInit(){
        console.log(this.viewObject);
    }
    postMethod (obj : {}) {
        this.http.post('/user/apps', obj)
        // .map(res => res);
        .subscribe((data) => {
            this.users = data;
            console.log(this.users);
          });
    }
    getMethod (){
        this.http.get('/apps').subscribe((data) => {
            this.users = data;
            console.log(this.users);
        })
    }
      private parseError(error: any) {
        return Observable.throw(error);
      }
    
}