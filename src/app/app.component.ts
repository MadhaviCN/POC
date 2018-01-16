import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
// import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  ngOnInit(){
    // firebase.initializeApp({
    //   apiKey: "AIzaSyBHc58Qd50qNtsCxp7_nchfV2XXSdD22hc",
    //   authDomain: "online-banking-852e2.firebaseapp.com",
    //   databaseURL: "https://online-banking-852e2.firebaseio.com",
    //   projectId: "online-banking-852e2",
    //   storageBucket: "online-banking-852e2.appspot.com",
    //   messagingSenderId: "61022304358"
    // })
  }
}
