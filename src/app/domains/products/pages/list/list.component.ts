import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { IProducts } from '../../../../models/IProducts.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<IProducts[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);

  ngOnInit(){
    console.log('Hola');
    this.productService.getProducts()
    .subscribe({
      next: (products) => {        
        console.log('objects: ' + JSON.stringify(products));
        this.products.set(products);
      },
      error: () => {

      }
    })
  }

  addToCart(product: IProducts) {
    this.cartService.addToCart(product)
  }
}
