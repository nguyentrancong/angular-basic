import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '../pipes/currency-pipe.pipe';
import { ProductItem } from '../../types/productItem';
import { NgFor } from '@angular/common';

@Component({
  selector: 'product-item',
  imports: [RouterLink, CurrencyPipe, NgFor],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input() products: ProductItem[] = [];

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
