import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CustomerComponent} from "./components/customer/customer.component";
import {HeaderComponent} from "./components/header/header.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ItemComponent} from "./components/item/item.component";
import {HomeComponent} from "./components/home/home.component";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {OrderComponent} from "./components/order/order.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ItemComponent,
    OrderComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
