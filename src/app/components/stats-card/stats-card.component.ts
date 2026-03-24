import { Component, input } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  imports: [],
  templateUrl: './stats-card.component.html',
  styleUrl: './stats-card.component.scss'
})
export class StatsCardComponent {
  label = input('');
  value = input('');
  subtitle = input('');
  trend = input<'up' | 'down' | 'neutral'>('neutral');
  trendValue = input('');
  dark = input(false);
}
