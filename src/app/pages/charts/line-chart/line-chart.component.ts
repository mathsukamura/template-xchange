import { Component, inject, effect } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexChart, ApexDataLabels, ApexGrid, ApexLegend, ApexStroke, ApexTooltip, ApexXAxis, ApexYAxis } from 'ng-apexcharts';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-line-chart',
  imports: [NgApexchartsModule],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent {
  private theme = inject(ThemeService);

  colors = ['#C8FF00', '#3CB4A0', '#1A7A6A'];
  months!: ApexXAxis;
  yaxis!: ApexYAxis;
  grid!: ApexGrid;
  tooltip: ApexTooltip = { theme: 'dark' };
  dataLabels: ApexDataLabels = { enabled: false };
  legend!: ApexLegend;

  constructor() {
    effect(() => {
      const dark = this.theme.isDark();
      this.months = { categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'], labels: { style: { colors: '#9CA3AF', fontSize: '11px' } }, axisBorder: { show: false }, axisTicks: { show: false } };
      this.yaxis = { labels: { style: { colors: '#9CA3AF', fontSize: '11px' } } };
      this.grid = { borderColor: dark ? '#2D2D2D' : '#F3F4F6', strokeDashArray: 4, xaxis: { lines: { show: false } } };
      this.legend = { position: 'top', horizontalAlign: 'right', labels: { colors: dark ? '#9CA3AF' : '#6B7280' }, fontSize: '12px', markers: { offsetX: 0, offsetY: 0 } };
    });
  }

  series1 = [
    { name: 'Visitantes', data: [4200, 5100, 4800, 6200, 5900, 7100, 6500, 8200, 7800, 9400, 8200, 10800] },
    { name: 'Leads', data: [1200, 1500, 1400, 1800, 1700, 2100, 1900, 2400, 2200, 2800, 2400, 3200] },
    { name: 'Clientes', data: [320, 410, 380, 520, 490, 610, 550, 720, 680, 840, 720, 960] },
  ];
  chart1: ApexChart = { type: 'line', height: 350, toolbar: { show: false } };
  stroke1: ApexStroke = { curve: 'smooth', width: 3 };

  series2 = [
    { name: 'Ticket Medio', data: [120, 135, 128, 142, 138, 155, 148, 160, 152, 158, 161, 163] },
  ];
  chart2: ApexChart = { type: 'line', height: 350, toolbar: { show: false } };
  stroke2: ApexStroke = { curve: 'straight', width: 2, dashArray: [0] };
}
