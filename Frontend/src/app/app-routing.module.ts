import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ItemComponent} from "./components/item/item.component";
import {OrderComponent} from "./components/order/order.component";
import {HomeComponent} from "./components/home/home.component";
import {CustomerComponent} from "./components/customer/customer.component";


const routes: Routes  = [
  {
    path: '',
    redirectTo:'home-component',
    pathMatch: 'full'
  },
  {
    path: 'home-component',
    component: HomeComponent
  },
  {
    path: 'customer-component',
    component: CustomerComponent
  },
  {
    path: 'item-component',
    component: ItemComponent
  },
  {
    path: 'order-component',
    component: OrderComponent
  }
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

