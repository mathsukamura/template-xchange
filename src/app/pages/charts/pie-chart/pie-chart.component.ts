import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexChart, ApexDataLabels, ApexLegend, ApexPlotOptions, ApexTooltip } from 'ng-apexcharts';

@Component({
  selector: 'app-pie-chart',
  imports: [NgApexchartsModule],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent {
  tooltip: ApexTooltip = { theme: 'dark' };
  dataLabels: ApexDataLabels = { enabled: false };
  legend: ApexLegend = { position: 'bottom', labels: { colors: '#6B7280' }, fontSize: '12px' };

  donutSeries = [42, 28, 18, 12];
  donutChart: ApexChart = { type: 'donut', height: 380 };
  donutLabels = ['Curso online', 'Mentoria', 'Template', 'E-book'];
  donutColors = ['#C8FF00', '#3CB4A0', '#1A7A6A', '#1A1A1A'];
  donutPlotOptions: ApexPlotOptions = { pie: { donut: { size: '70%', labels: { show: true, total: { show: true, label: 'Total', fontSize: '14px', fontWeight: '700', color: '#1A1A1A' } } } } };

  pieSeries = [35, 25, 20, 12, 8];
  pieChart: ApexChart = { type: 'pie', height: 380 };
  pieLabels = ['Tráfego pago', 'Orgânico', 'Email', 'Afiliados', 'Direto'];
  pieColors = ['#C8FF00', '#3CB4A0', '#1A7A6A', '#1A1A1A', '#D4D4D4'];
}
