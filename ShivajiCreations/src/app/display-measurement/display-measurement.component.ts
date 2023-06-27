import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MydbserviceService } from '../mydbservice.service';

@Component({
  selector: 'app-display-measurement',
  templateUrl: './display-measurement.component.html',
  styleUrls: ['./display-measurement.component.css']
})
export class DisplayMeasurementComponent {

  oid: any;
  result: any
  custresult: any
  notfound: any
  b: boolean = false;
  constructor(public ob: ActivatedRoute, public obj: MydbserviceService) {

    this.ob.params.subscribe(p => {
      this.oid = p['id'];

      this.obj.getbyId(this.oid).subscribe(c => {
        this.result = c;

      })




      this.obj.getcustbyId(this.oid).subscribe(c => {
        this.custresult = c;


      })

    }
    );




  }


}