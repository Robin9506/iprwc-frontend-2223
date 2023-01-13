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
  ratingFilters: number[] = [];

  platforms: string[] = [];
  companies: string[] = [];
  ratings: number[] = [];

  platform = "";
  company = "";
  rating = 0;
  filterObject: Filter = new Filter([], [], []);

  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
    this.filterService.getAllFilters();
    this.fillProductFilters();

  }

  fillProductFilters(){
    this.platformFilters = this.filterService.getPlatformFilters();
    this.companyFilters = this.filterService.getCompanyFilters();
    this.ratingFilters = this.filterService.getRatingFilters();
  }

  setPlatformFilter(platform: string){
    if(!this.platforms.includes(platform)){
      this.platforms.push(platform);
    }
    else{
      for (let index = 0; index < this.platforms.length; index++) {
        if(platform === this.platforms[index] ){
          this.platforms.splice(index, 1);
        }
        
      }
    }
  }

  setCompanyFilter(company: string){
    if(!this.companies.includes(company)){
      this.companies.push(company);
    }
    else{
      for (let index = 0; index < this.companies.length; index++) {
        if(company === this.companies[index] ){
          this.companies.splice(index, 1);
        }
        
      }
    }
  }

  setRatingFilter(rating: number){
    if(!this.ratings.includes(rating)){
      this.ratings.push(rating);
    }
    else{
      for (let index = 0; index < this.ratings.length; index++) {
        if(rating === this.ratings[index] ){
          this.ratings.splice(index, 1);
        }
        
      }
    }
  }

  onFilter(){
    this.filterObject = new Filter(this.platforms, this.companies, this.ratings);
    this.filter.emit(this.filterObject);
  }

}
