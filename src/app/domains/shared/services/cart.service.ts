import { Injectable, computed, signal } from '@angular/core';
import { IProducts } from '../../../models/IProducts.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<IProducts[]>([]);
  total = computed(() => {
    const cart = this.cart();
    return cart.reduce((total, product) => total + product.price, 0);
  })

  constructor() { }

  addToCart(product: IProducts){
    this.cart.update(state => [...state, product])
  }
}
