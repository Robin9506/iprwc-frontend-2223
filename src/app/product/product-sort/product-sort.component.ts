import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SortStategy } from 'src/app/enums/sort.enum';
import { Sort } from 'src/app/models/sort.model';

@Component({
  selector: 'app-product-sort',
  templateUrl: './product-sort.component.html',
  styleUrls: ['./product-sort.component.scss']
})
export class ProductSortComponent implements OnInit {
  @Output() sort = new EventEmitter<Sort>();
  sortStrategy = SortStategy;


  constructor() { }

  ngOnInit(): void {
  }

  sortProducts(sortStrategy: SortStategy, ascending: boolean){
    const sortObject = new Sort(sortStrategy, ascending);
    this.sort.emit(sortObject);
  }
}
