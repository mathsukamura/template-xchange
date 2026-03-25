import { Component, inject, effect } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexChart, ApexDataLabels, ApexGrid, ApexLegend, ApexPlotOptions, ApexTooltip, ApexXAxis, ApexYAxis } from 'ng-apexcharts';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-bar-chart',
  imports: [NgApexchartsModule],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent {
  private theme = inject(ThemeService);

  colors = ['#C8FF00', '#3CB4A0', '#1A7A6A'];
  months!: ApexXAxis;
  yaxis!: ApexYAxis;
  grid!: ApexGrid;
  tooltip: ApexTooltip = { theme: 'dark' };
  dataLabels: ApexDataLabels = { enabled: false };
  legend!: ApexLegend;
  plotOptions: ApexPlotOptions = { bar: { borderRadius: 4, columnWidth: '45%' } };

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
    { name: 'Vendas', data: [620, 890, 750, 1100, 940, 1240, 800, 1050, 670, 920, 780, 1240] },
    { name: 'Reembolsos', data: [42, 55, 38, 72, 61, 85, 50, 68, 45, 58, 52, 78] },
  ];
  chart1: ApexChart = { type: 'bar', height: 350, toolbar: { show: false } };

  series2 = [
    { name: 'Atrair', data: [8200, 9500, 8800, 10300, 9100, 11900, 10500, 12200, 13100, 11800, 14200, 15000] },
    { name: 'Preparar', data: [5400, 6200, 5800, 7200, 6500, 8500, 7200, 8800, 9100, 8200, 9800, 10500] },
    { name: 'Vender', data: [4600, 5800, 5200, 6800, 6500, 7500, 6200, 7800, 8200, 7400, 8600, 9200] },
  ];
  chart2: ApexChart = { type: 'bar', height: 350, toolbar: { show: false }, stacked: true };
  plotOptions2: ApexPlotOptions = { bar: { borderRadius: 4, columnWidth: '50%' } };
}
