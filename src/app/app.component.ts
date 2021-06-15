import { Component, NgModule, OnInit } from '@angular/core';
import { HomeComponent } from './modules/home/home.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})

// @NgModule({
//   imports: []
// })

export class AppComponent implements OnInit {

  //constructor(private router: Router) {  }
  
  ngOnInit() {
  }

}
