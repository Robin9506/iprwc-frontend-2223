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
  company = "";
  filterObject: Filter = new Filter("", "");

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  setPlatformFilter(platform: string){
    this.platform = platform;
  }

  setCompanyFilter(company: string){
    if(company === this.company){
      company = '';
    }
    this.company = company;
  }

  onFilter(){
    this.filterObject = new Filter(this.platform, this.company);
    this.filter.emit(this.filterObject);
  }

}
