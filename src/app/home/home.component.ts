import { Component } from '@angular/core';
import { StudyLayoutComponent } from '../shared/study-layout/study-layout.component';
import { ShoppingCartLayoutComponent } from '../shared/shopping-cart-layout/shopping-cart-layout.component';
@Component({
  selector: 'app-home',
  imports: [StudyLayoutComponent, ShoppingCartLayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
