import { Component, inject, effect } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexChart, ApexDataLabels, ApexLegend, ApexPlotOptions, ApexTooltip } from 'ng-apexcharts';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-pie-chart',
  imports: [NgApexchartsModule],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent {
  private theme = inject(ThemeService);

  tooltip: ApexTooltip = { theme: 'dark' };
  dataLabels: ApexDataLabels = { enabled: false };
  legend!: ApexLegend;

  donutSeries = [42, 28, 18, 12];
  donutChart: ApexChart = { type: 'donut', height: 380 };
  donutLabels = ['Curso online', 'Mentoria', 'Template', 'E-book'];
  donutColors!: string[];
  donutPlotOptions!: ApexPlotOptions;

  pieSeries = [35, 25, 20, 12, 8];
  pieChart: ApexChart = { type: 'pie', height: 380 };
  pieLabels = ['Trafego pago', 'Organico', 'Email', 'Afiliados', 'Direto'];
  pieColors!: string[];

  constructor() {
    effect(() => {
      const dark = this.theme.isDark();
      const legendColor = dark ? '#9CA3AF' : '#6B7280';
      const textColor = dark ? '#E5E5E5' : '#1A1A1A';

      this.legend = { position: 'bottom', labels: { colors: legendColor }, fontSize: '12px' };
      this.donutColors = ['#C8FF00', '#3CB4A0', '#1A7A6A', dark ? '#6B7280' : '#1A1A1A'];
      this.donutPlotOptions = { pie: { donut: { size: '70%', labels: { show: true, total: { show: true, label: 'Total', fontSize: '14px', fontWeight: '700', color: textColor } } } } };
      this.pieColors = ['#C8FF00', '#3CB4A0', '#1A7A6A', dark ? '#6B7280' : '#1A1A1A', '#D4D4D4'];
    });
  }
}
