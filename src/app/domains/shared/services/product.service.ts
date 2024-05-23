import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IProducts } from '../../../models/IProducts.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);

  constructor() { }

  getProducts(){
    return this.http.get<IProducts[]>('https://api.escuelajs.co/api/v1/products').pipe(
      map(products => 
        products.map(product => ({
          ...product,
          images: product.images.map(image => 
            this.cleanAndParseImageUrl(image)
          )
        }))
      )
    );
  }

  private cleanAndParseImageUrl(image: string): string {
    let cleanedImage = image.replace(/^\["?|"?]$/g, '');
    try {
      cleanedImage = JSON.parse(cleanedImage);
    } catch (error) {
      //
    }
    return cleanedImage;
  };
  
}
