import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { DisplayMeasurementComponent } from './display-measurement/display-measurement.component';
import { EditMeasurementComponent } from './edit-measurement/edit-measurement.component';
import { BillInfoComponent } from './bill-info/bill-info.component';

const routes: Routes = [

  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'createCust',
    component: CreateCustomerComponent
  },

  {
    path: 'searchCust',
    component: SearchCustomerComponent
  },

  {
    path: 'displayMeasurement/:id',
    component: DisplayMeasurementComponent
  },
  
  {
    path: 'billInfo',
    component: BillInfoComponent
  },

  {
    path: 'editMeasurement/:id',
    component: EditMeasurementComponent
  },

  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
