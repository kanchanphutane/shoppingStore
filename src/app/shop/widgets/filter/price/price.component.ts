import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as $ from 'jquery';
import { LabelType, Options } from 'ng5-slider';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {
  @Output() priceFilter: EventEmitter<any[]> = new EventEmitter<any[]>();

  minValue: number = 100;
  maxValue: number = 2000;
  options: Options = {
    floor: 100,
    ceil: 2000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b>Min price:</b> ₹" + value;
        case LabelType.High:
          return "<b>Max price:</b> ₹" + value;
        default:
          return "₹" + value;
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
    $("#priceToggleId").on('click', function (e) {
      e.preventDefault();
      $(this).next("#priceToggle").slideToggle();
    })
  }

  selectPrice(event: any) {
    let price = [];
    price.push(event.value); // min value
    price.push(event.highValue); // max value

    this.priceFilter.emit(price);

  }

}
