import { Component } from '@angular/core';
import { StatsCardComponent } from '../../components/stats-card/stats-card.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ContactsPanelComponent } from '../../components/contacts-panel/contacts-panel.component';

@Component({
  selector: 'app-funnels',
  imports: [StatsCardComponent, ProductCardComponent, ContactsPanelComponent],
  templateUrl: './funnels.component.html',
  styleUrl: './funnels.component.scss'
})
export class FunnelsComponent {}
