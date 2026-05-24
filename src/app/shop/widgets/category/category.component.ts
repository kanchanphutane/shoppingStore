import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#categoryToggleId").on('click', function (e) {
      e.preventDefault();
      //$("#categoryToggle").slideToggle();
      $(this).next("#categoryToggle").slideToggle();
    });
  }

}
