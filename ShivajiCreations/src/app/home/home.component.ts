import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  data:imydata[]= [
{orderno:100,name:"suraj1",particulars:"abc",date:new Date("1-1-2000")},
{orderno:100,name:"suraj2",particulars:"abc",date:new Date("1-1-2000")},
{orderno:100,name:"suraj3",particulars:"abc",date:new Date("1-1-2000")},
{orderno:100,name:"suraj4",particulars:"abc",date:new Date("1-1-2000")},
{orderno:100,name:"suraj5",particulars:"abc",date:new Date("1-1-2000")},
{orderno:100,name:"suraj6",particulars:"abc",date:new Date("1-1-2000")},
  ]




}



interface imydata{
orderno:Number
name:string;
particulars:string;
date:Date

}