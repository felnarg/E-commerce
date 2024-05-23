import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from "../../../products/components/product/product.component";
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [CommonModule, ProductComponent]
})
export class HeaderComponent {
  hideSideMenu = signal<boolean>(true);
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;

  toogleSideMenu(){
    this.hideSideMenu.update(prevState => !prevState)
  }
}
