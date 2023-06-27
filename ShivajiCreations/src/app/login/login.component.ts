import { Component } from '@angular/core';
//import * as data from '../../assets/logindata.json';
import * as icons from 'ionicons/icons';
import { MydbserviceService } from '../mydbservice.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public ob: MydbserviceService, public r: Router) { }

  status: any = ''
  icon = icons;

  validate(frm: any) {

    this.ob.validateuser(frm).subscribe(c => {
      if (c == null) {
        this.status = "Access Denied"
      }
      else {
        this.r.navigate(['/admin'])

      }
    })
  }
}




