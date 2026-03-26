import { Component } from '@angular/core';
import { StatsCardComponent } from '../../components/stats-card/stats-card.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ContactsPanelComponent } from '../../components/contacts-panel/contacts-panel.component';
import { PageHeader } from '../../components/page-header/page-header';

@Component({
  selector: 'app-funnels',
  imports: [StatsCardComponent, ProductCardComponent, ContactsPanelComponent, PageHeader],
  templateUrl: './funnels.component.html',
  styleUrl: './funnels.component.scss'
})
export class FunnelsComponent {}
