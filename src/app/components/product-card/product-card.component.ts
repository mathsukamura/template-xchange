import { Component, input } from '@angular/core';
import { CardContainer } from '../card-container/card-container';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-product-card',
  imports: [CardContainer, Icon],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  name = input('Lançamento Infomade Milionário');
  image = input('');
  price = input('R$ 75.000');
  revenue = input('R$ 1.800');
  visitors = input('1.498');
  leads = input('204');
  sales = input('99');
  conversionRate = input('63%');
  salesRate = input('3,4%');
  ticketMedio = input('R$ 16,88');
}
