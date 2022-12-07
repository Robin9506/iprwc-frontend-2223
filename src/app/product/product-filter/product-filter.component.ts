import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { Filter } from 'src/app/models/filter.model';
import { FilterService } from 'src/app/services/filter.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit{
  @Output() filter = new EventEmitter<Filter>();
  platformFilters: string[] = [];
  companyFilters: string[] = [];

  platform = "";
  company = "";
  filterObject: Filter = new Filter("", "");

  constructor(private productService: ProductService, 
              private filterService: FilterService) { }

  ngOnInit(): void {
    this.fillProductFilters();

  }

  fillProductFilters(){
    this.platformFilters = this.filterService.getPlatformFilters();
    this.companyFilters = this.filterService.getCompanyFilters();
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
