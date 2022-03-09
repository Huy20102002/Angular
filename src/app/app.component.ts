import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
     heroes: Array<object> =[
       {
         
       }
     ];
     formHero: object ={
       code: "",
       name: "",
       avatar: "",
       gender: ""
     };
}
