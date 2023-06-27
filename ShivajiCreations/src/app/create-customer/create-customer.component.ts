import { Component } from '@angular/core';
import { MydbserviceService } from '../mydbservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent {

constructor(public ob:MydbserviceService,public r:Router){}


status:any;

a:any=null

checkStatus(event:any){
  // Check if radio button is checked
    var res = (document.getElementById("ordid") as HTMLInputElement).value
 

    this.ob.getbyIdshirt(res).subscribe(
      (response) => {                           //Next callback
        console.log('response received')
        this.r.navigate(['displayMeasurement',res]); 
        
      },
      (error) => {                              //Error callback
        console.error('error caught in component')
        this.r.navigate(['editMeasurement',res]); 
       
      }
    )


   

    //this.r.navigate(['displayMeasurement',res])
        
  
}


  insertcustomer(frm:any)
  {




//this.ob.createcustomers(frm).subscribe(c=> this.status =c )
}
}
