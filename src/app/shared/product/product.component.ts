import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '../pipes/currency-pipe.pipe';
import { NgFor } from '@angular/common';
import { Product } from '../../types/product';

@Component({
  selector: 'products',
  imports: [RouterLink, CurrencyPipe, NgFor],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductsComponent {
  @Input() products: Product[] = [];

  @Output() onDelete = new EventEmitter<number>();

  get totalPrice(): string {
    const sum = this.products.reduce((total, item) => {
      return total + item.price;
    }, 0);

    return `Total price:  ${new CurrencyPipe().transform(sum)}`;
  }

  handleDelete = (id: number) => {
    // console.log(`handle delete: ${id}`);
    this.onDelete.emit(id);
  };
}
