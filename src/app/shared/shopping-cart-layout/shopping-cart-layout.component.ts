import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductItem } from '../../types/productItem';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Subscription } from 'rxjs';
import { ProductServices } from '../../services/ProductServices';
import { Product } from '../../types/product';
import { ProductsComponent } from '../product/product.component';

@Component({
  selector: 'shopping-cart-layout',
  imports: [ProductItemComponent, ProductsComponent],
  templateUrl: './shopping-cart-layout.component.html',
  styleUrl: './shopping-cart-layout.component.css',
})
export class ShoppingCartLayoutComponent implements OnInit, OnDestroy {
  productsItem: ProductItem[] = [
    {
      id: 1,
      name: 'Nike A1',
      price: 100000,
      image: 'assets/images/samba-og.jpg',
    },
    {
      id: 2,
      name: 'Nike A2',
      price: 200000,
      image: 'assets/images/samba-og.jpg',
    },
    {
      id: 3,
      name: 'Nike A3',
      price: 300000,
      image: 'assets/images/samba-og.jpg',
    },
    {
      id: 4,
      name: 'Nike A4',
      price: 400000,
      image: 'assets/images/samba-og.jpg',
    },
    {
      id: 5,
      name: 'Nike A5',
      price: 500000,
      image: 'assets/images/samba-og.jpg',
    },
  ];

  products: Product[] = [];

  getBlogsApi: Subscription;

  constructor(private productService: ProductServices) {
    this.getBlogsApi = new Subscription();
  }

  ngOnInit(): void {
    this.getBlogsApi = this.productService.getProducts().subscribe((data) => {
      console.log(`----data: ${data}`);
      this.products = data;
    });
  }

  ngOnDestroy(): void {
    if (this.getBlogsApi) {
      this.getBlogsApi.unsubscribe();
      console.log('getBlogsApi unsubscribe');
    }
  }

  handleDeleteProductsItem(id: number) {
    // console.log(`object ${id}`);
    // const productIndex = this.products.findIndex((item) => item.id === id);
    // if (productIndex !== -1) {
    //   this.products.splice(productIndex, 1);
    // }

    this.productsItem = this.productsItem.filter((item) => item.id !== id);
  }

  handleDeleteProduct(id: number) {
    this.products = this.products.filter((item) => item.id !== id);
  }
}
