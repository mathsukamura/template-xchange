import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexPlotOptions,
  ApexStroke,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
} from 'ng-apexcharts';

@Component({
  selector: 'app-charts',
  imports: [NgApexchartsModule],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss'
})
export class ChartsComponent {
  colors = ['#C8FF00', '#3CB4A0', '#1A7A6A'];
  months: ApexXAxis = { categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'], labels: { style: { colors: '#9CA3AF', fontSize: '11px' } }, axisBorder: { show: false }, axisTicks: { show: false } };
  yaxis: ApexYAxis = { labels: { style: { colors: '#9CA3AF', fontSize: '11px' } } };
  grid: ApexGrid = { borderColor: '#F3F4F6', strokeDashArray: 4, xaxis: { lines: { show: false } } };
  tooltip: ApexTooltip = { theme: 'dark' };
  dataLabels: ApexDataLabels = { enabled: false };
  legend: ApexLegend = { position: 'top', horizontalAlign: 'right', labels: { colors: '#6B7280' }, fontSize: '12px', markers: { width: 8, height: 8, radius: 4 } };

  // Area
  areaSeries = [
    { name: 'Receita', data: [18200, 21500, 19800, 24300, 22100, 27900, 25000, 29800, 31200, 28500, 33000, 35400] },
    { name: 'Custos', data: [8200, 9500, 8800, 10300, 9100, 11900, 10500, 12200, 13100, 11800, 14200, 15000] },
  ];
  areaChart: ApexChart = { type: 'area', height: 320, toolbar: { show: false } };
  areaStroke: ApexStroke = { curve: 'smooth', width: 2 };
  areaFill: ApexFill = { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.05, stops: [0, 100] } };

  // Bar
  barSeries = [
    { name: 'Vendas', data: [620, 890, 750, 1100, 940, 1240, 800, 1050, 670, 920, 780, 1240] },
    { name: 'Reembolsos', data: [42, 55, 38, 72, 61, 85, 50, 68, 45, 58, 52, 78] },
  ];
  barChart: ApexChart = { type: 'bar', height: 320, toolbar: { show: false } };
  barPlotOptions: ApexPlotOptions = { bar: { borderRadius: 4, columnWidth: '45%' } };

  // Line
  lineSeries = [
    { name: 'Visitantes', data: [4200, 5100, 4800, 6200, 5900, 7100, 6500, 8200, 7800, 9400, 8200, 10800] },
    { name: 'Leads', data: [1200, 1500, 1400, 1800, 1700, 2100, 1900, 2400, 2200, 2800, 2400, 3200] },
    { name: 'Clientes', data: [320, 410, 380, 520, 490, 610, 550, 720, 680, 840, 720, 960] },
  ];
  lineChart: ApexChart = { type: 'line', height: 320, toolbar: { show: false } };
  lineStroke: ApexStroke = { curve: 'smooth', width: [3, 2, 2] };

  // Donut
  donutSeries = [42, 28, 18, 12];
  donutChart: ApexChart = { type: 'donut', height: 320 };
  donutLabels = ['Curso online', 'Mentoria', 'Template', 'E-book'];
  donutColors = ['#C8FF00', '#3CB4A0', '#1A7A6A', '#1A1A1A'];
  donutLegend: ApexLegend = { position: 'bottom', labels: { colors: '#6B7280' }, fontSize: '12px' };
  donutPlotOptions: ApexPlotOptions = { pie: { donut: { size: '70%', labels: { show: true, total: { show: true, label: 'Total', fontSize: '14px', fontWeight: '700', color: '#1A1A1A' } } } } };
}
