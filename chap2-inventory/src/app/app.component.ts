import {Component, EventEmitter} from '@angular/core';
import {Product} from "./product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  products: Product[];

  constructor() {
    this.products = [
      new Product('MYSHOES',
        'Black Running Shoes',
        '/resources/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),
      new Product('NEATOJACKET',
        'Blue Jacket',
        '/resources/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99),
      new Product('NICEHAT',
        'A Nice Black Hat',
        '/resources/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99)
    ]
  }

  productWasSelected(product: Product) {
    console.log('Product clicked:', product);
  }
}

@Component({
  selector: 'product-list',
  inputs: ['productList'],
  outputs: ['onProductSelected'],
  template:`
    <div class="ui items">
      <product-row 
        *ngFor="let myProduct of productList" 
        [product]="myProduct"
        (click)="clicked(myProduct)" 
        [class.selected]="isSelected(myProduct)">
        
      </product-row>
    </div>
  `
})

class ProductsList {
  productList: Product[];
  onProductSelected: EventEmitter<Product>;
  private currentProduct: Product;

  constructor(){
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product){
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product){
    if(!product || !this.currentProduct){
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}
