import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { IonicModule } from "@ionic/angular";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { DisplayMeasurementComponent } from './display-measurement/display-measurement.component';
import { EditMeasurementComponent } from './edit-measurement/edit-measurement.component';
import { BillInfoComponent } from './bill-info/bill-info.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    HomeComponent,
    PagenotfoundComponent,
    CreateCustomerComponent,
    SearchCustomerComponent,
    DisplayMeasurementComponent,
    EditMeasurementComponent,
    BillInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, IonicModule.forRoot(), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
