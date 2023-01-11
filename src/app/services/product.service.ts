import { Injectable } from '@angular/core';
import { Filter } from '../models/filter.model';
import { Product } from '../models/product.model';
import { Sort } from '../models/sort.model';
import { ProductFilteringService } from './product-filtering.service';
import { ProductSortingService } from './product-sorting.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
    private products: Product[] = [
        new Product(1, "Animal Crossing", 49.99, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ", "Nintendo", "../../../assets/ac.jpg", 4, "Switch"),
        new Product(2, "Mario Kart 8 Deluxe", 79.99, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ", "Nintendo", "../../../assets/marioKart8.jpg", 4, "Switch"),
        new Product(3, "Xenoblade Chronicles 2", 49.99, "De toekomst again!", "Monolith Soft", "../../../assets/xc2.jpeg", 4, "Switch"),
        new Product(4, "Mario Party Allstars", 51.99, "Feesten again!", "Nintendo", "../../../assets/mps.jpg", 4, "Switch"),
        new Product(5, "Xenoblade Chronicles", 39.99, "De toekomst!", "Monolith Soft", "../../../assets/xc1.jpg", 5, "Switch"),
        new Product(6, "Super Mario Party", 39.99, "Feesten!", "Nintendo", "../../../assets/smp.jpg", 2, "Switch"),
        new Product(7, "Xenoblade Chronicles 3", 59.99, "De toekomst lost!", "Monolith Soft", "../../../assets/xc3.jpg", 5, "Switch"),
        new Product(8, "Super Mario Sunshine", 82.99, "De zon schijnt!", "Nintendo", "../../../assets/sms.jpg", 5, "Gamecube"),
        new Product(9, "Mario Kart Double Dash", 81.99, "Dubbele sprint!", "Nintendo", "../../../assets/mkdd.jpg", 5, "Gamecube"),
        new Product(10, "Mario Kart Wii", 59.99, "We kart!", "Nintendo", "../../../assets/mkw.jpg", 4, "Wii"),
        new Product(11, "Super Mario Bros. Wii", 29.99, "With the bros!", "Nintendo", "../../../assets/smbw.jpg", 4, "Wii"),
        new Product(12, "Klonoa", 19.99, "who is this?", "Bandai Namco", "../../../assets/k.jpg", 1, "Wii"),
    ];



  constructor(private productFilteringService: ProductFilteringService, 
    private productSortingService: ProductSortingService) { }

  getProducts(){
    return this.products;
  }

  getFeaturedProducts(){
    const featuredProducts: Product[] = [];

    for (let index = 0; index < 5; index++) {
      const element = this.products[index];

      featuredProducts.push(element); 
    }

    return featuredProducts;
  }

  addProduct(product: Product){
    this.products.push(product);
  }

  getSingleProduct(productId: number){
    let product: Product = new Product(0 ,"", 0, "", "", "", 0,"");
    this.products.filter(product => 
      product.id === productId)
            .map(item => 
              product = new Product(
                item.id,
                item.name, 
                item.price, 
                item.description, 
                item.company, 
                item.imageLink, 
                item.rating, 
                item.platform));
      
                return product;
}
              
                    
          


  getProductsByFilter(filter: Filter){
    this.productFilteringService.fillFilteredProductArray(filter, this.getProducts());
    return this.productFilteringService.returnFilteredProducts();
   
  }

  getProductsBySort(sort: Sort, filteredProducts: Product[]){
    this.productSortingService.sortProducts(sort, filteredProducts);
    return filteredProducts;
  }

  deleteProduct(productId: number){
    this.products = this.products.filter(function( obj ) {
      return obj.id !== productId;
    })
  }

  editProduct(product: Product, id: number){
    console.log(product);
    console.log(id);
  }

}