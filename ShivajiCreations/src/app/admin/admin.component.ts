import { Component, OnInit } from '@angular/core';
import { MydbserviceService } from '../mydbservice.service';
import { Router } from '@angular/router';
const DATA_ARRAY_START_SIZE: number = 0;
const DATA_ARRAY_END_SIZE: number = 3;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  measure: mydata[] = []
  txtsearch: string = ''

  constructor(public ob: MydbserviceService, public obj:Router) { }

  /** sort hot order details asending order of the date */
  displaySortData() {
    this.ob.measurements().subscribe(c => {
      this.measure = c;
      this.measure = this.measure.sort((orddate1, ordate2) =>
        new Date(ordate2.date).getTime() - new Date(orddate1.date).getTime());
      this.measure.reverse();
      this.measure = this.measure.slice(DATA_ARRAY_START_SIZE, DATA_ARRAY_END_SIZE)
    })
  }

  /** Filter the data as per text box value */
  onChangeEvent(event: any) {
    if (event.target.value == '') {
      this.displaySortData()
    }
    else {
      this.ob.measurements().subscribe(c => {
        this.measure = c;
        var res = this.measure.filter(c1 => c1.order_number == event.target.value)
        this.measure = res;
      });
    }
  }

  /** Display initial hot order data from mongodb */
  ngOnInit() {
    this.displaySortData()

  }

  searchcustomer()
  {
this.obj.navigate(['/searchCust'])
  }

  createcustomer()
  {
    this.obj.navigate(['/createCust'])
  }





}

/** To support intellisence feature express data */
class mydata {
  order_number: string = ''; cust_name: string = ''; particulars: any; date = new Date()

}
