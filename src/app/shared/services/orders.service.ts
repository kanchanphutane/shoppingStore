import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../types/order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private orderDetails: Order;

  constructor(private router: Router) { }

  setOrderDetils(obj: Order) {
    this.orderDetails = obj;
    this.router.navigate(['/home/checkout/success']);
  }

  getOrderDetails(): Order {
    return this.orderDetails;
  }
}
