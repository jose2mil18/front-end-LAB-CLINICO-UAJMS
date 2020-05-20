import {Component, OnInit, ViewEncapsulation} from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $(document).ready(function() {
          $('.table').footable({
              'paging': {
                  'enabled': true
              },
              'sorting': {
                  'enabled': true
              }
          });
      });
  }

}
