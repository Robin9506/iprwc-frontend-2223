import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { Filter } from 'src/app/models/filter.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit{
  @Output() filter = new EventEmitter<Filter>();

  platform = "";
  company = "Nintendo";
  filterObject: Filter = new Filter(this.platform, this.company);

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  onFilter(){
    this.filter.emit(this.filterObject);
  }

}
