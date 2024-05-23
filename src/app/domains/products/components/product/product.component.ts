import { Component, Input, Output , EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProducts } from '../../../../models/IProducts.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required: true}) product!: IProducts;

  @Output() addToCart = new EventEmitter();

  addToCartHandler(){
    this.addToCart.emit(this.product);
  }
};
  