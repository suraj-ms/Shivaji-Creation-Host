import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MydbserviceService {

  constructor(public ob: HttpClient) {
  }

  validateuser(data: any): Observable<object> {
    return this.ob.post("http://localhost:3000", data)
  }

  measurements(): Observable<any> {
    return this.ob.get("http://localhost:3000/bb")
  }


createcustomers(data:any):Observable<string>{
  return this.ob.post<string>("http://localhost:3000/insertcust", data)
}


getbyId(id:any): Observable<any> {
  return this.ob.get("http://localhost:3000/display/"+id)
}

getbyIdshirt(id:any): Observable<any> {
  return this.ob.get("http://localhost:3000/editmeasure/"+id)
}




getcustbyId(id:any): Observable<any> {
  return this.ob.get("http://localhost:3000/getcustbyid/"+id)
}




}
