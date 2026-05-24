import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/shared/services/orders.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Order } from 'src/app/shared/types/order.interface';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
orderDetails : Order;

  constructor(private _ordersService : OrdersService, public productService : ProductsService) { }

  ngOnInit(): void {
    this.orderDetails = this._ordersService.getOrderDetails();
  }

}
