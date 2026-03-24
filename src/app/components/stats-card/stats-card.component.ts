import { Component, inject, input, computed } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-stats-card',
  imports: [],
  templateUrl: './stats-card.component.html',
  styleUrl: './stats-card.component.scss'
})
export class StatsCardComponent {
  private theme = inject(ThemeService);
  themeDark = computed(() => this.theme.isDark());

  label = input('');
  value = input('');
  subtitle = input('');
  trend = input<'up' | 'down' | 'neutral'>('neutral');
  trendValue = input('');
  dark = input(false);
}
