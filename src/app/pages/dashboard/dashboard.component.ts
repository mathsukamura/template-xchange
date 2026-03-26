import { Component, inject, effect } from '@angular/core';
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
import { ThemeService } from '../../services/theme.service';
import { Avatar } from '../../components/avatar/avatar';
import { DataTable, CellTemplateDirective, TableColumn } from '../../components/data-table/data-table';
import { CardContainer } from '../../components/card-container/card-container';

@Component({
  selector: 'app-dashboard',
  imports: [NgApexchartsModule, Avatar, DataTable, CellTemplateDirective, CardContainer],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  private theme = inject(ThemeService);
  get isDark() { return this.theme.isDark(); }

  productColumns: TableColumn[] = [
    { key: 'name', label: '' },
    { key: 'price', label: '' },
  ];

  activeTab = 'geral';
  tabs = ['Geral', 'Atrair', 'Preparar para venda', 'Vender'];

  products = [
    { name: 'Método Expert Digital', category: 'Curso online', price: 'R$ 497', sales: 2340, initials: 'ME', color: '#C8FF00' },
    { name: 'Mentoria Premium', category: 'Mentoria', price: 'R$ 2.997', sales: 186, initials: 'MP', color: '#3CB4A0' },
    { name: 'Pack Templates Pro', category: 'Template', price: 'R$ 97', sales: 4820, initials: 'PT', color: '#6366F1' },
    { name: 'Comunidade VIP', category: 'Assinatura', price: 'R$ 49/mês', sales: 1540, initials: 'CV', color: '#F59E0B' },
    { name: 'E-book Funis de Venda', category: 'E-book', price: 'R$ 27', sales: 8200, initials: 'EF', color: '#EC4899' },
    { name: 'Workshop Ao Vivo', category: 'Evento', price: 'R$ 197', sales: 620, initials: 'WA', color: '#8B5CF6' },
  ];

  // ── Funnel Area Chart ──
  funnelSeries = [
    { name: 'Atrair', data: [10100, 8500, 7200, 6420, 6420, 6200] },
    { name: 'Preparar', data: [6200, 5800, 5400, 5189, 4800, 4500] },
    { name: 'Vender', data: [4500, 3800, 3200, 2800, 2100, 1240] },
  ];
  funnelChart: ApexChart = { type: 'area', height: 220, toolbar: { show: false }, stacked: false };
  funnelStroke: ApexStroke = { curve: 'smooth', width: 2 };
  funnelFill: ApexFill = { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.5, opacityTo: 0.1, stops: [0, 100] } };
  funnelColors = ['#C8FF00', '#3CB4A0', '#1A7A6A'];
  funnelXaxis!: ApexXAxis;
  funnelYaxis!: ApexYAxis;
  funnelGrid!: ApexGrid;
  funnelTooltip: ApexTooltip = { theme: 'dark', y: { formatter: (v: number) => v.toLocaleString('pt-BR') } };
  funnelLegend: ApexLegend = { show: false };
  funnelDataLabels: ApexDataLabels = { enabled: false };

  // ── Revenue Bar Chart ──
  revenueSeries = [
    { name: 'Atrair', data: [8200, 9500, 8800, 10300, 9100, 11900] },
    { name: 'Preparar', data: [5400, 6200, 5800, 7200, 6500, 8500] },
    { name: 'Vender', data: [4600, 5800, 5200, 6800, 6500, 7500] },
  ];
  revenueChart: ApexChart = { type: 'bar', height: 220, toolbar: { show: false }, stacked: true };
  revenuePlotOptions: ApexPlotOptions = { bar: { borderRadius: 4, columnWidth: '50%' } };
  revenueColors = ['#C8FF00', '#3CB4A0', '#1A7A6A'];
  revenueXaxis: ApexXAxis = { categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'], labels: { show: false }, axisBorder: { show: false }, axisTicks: { show: false } };
  revenueYaxis: ApexYAxis = { labels: { show: false } };
  revenueGrid: ApexGrid = { show: false };
  revenueTooltip!: ApexTooltip;
  revenueDataLabels: ApexDataLabels = { enabled: false };
  revenueLegend!: ApexLegend;

  // ── Products Monthly Bar Chart ──
  productsSeries = [{ name: 'Vendidos', data: [620, 890, 750, 1100, 940, 1240, 800, 1050, 670, 920, 780, 1240] }];
  productsChart: ApexChart = { type: 'bar', height: 280, toolbar: { show: false } };
  productsPlotOptions: ApexPlotOptions = { bar: { borderRadius: 4, columnWidth: '55%' } };
  productsXaxis!: ApexXAxis;
  productsYaxis!: ApexYAxis;
  productsGrid!: ApexGrid;
  productsDataLabels: ApexDataLabels = { enabled: false };
  productsTooltip: ApexTooltip = { theme: 'dark', y: { formatter: (v: number) => v.toLocaleString('pt-BR') + ' vendas' } };

  constructor() {
    effect(() => {
      const dark = this.theme.isDark();
      const gridColor = dark ? '#2D2D2D' : '#F3F4F6';

      this.funnelXaxis = { categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'], labels: { style: { colors: '#9CA3AF', fontSize: '11px' } }, axisBorder: { show: false }, axisTicks: { show: false } };
      this.funnelYaxis = { labels: { style: { colors: '#9CA3AF', fontSize: '11px' }, formatter: (v: number) => (v / 1000).toFixed(1) + 'k' } };
      this.funnelGrid = { borderColor: gridColor, strokeDashArray: 4, xaxis: { lines: { show: false } } };

      this.productsXaxis = { categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'], labels: { style: { colors: '#9CA3AF', fontSize: '10px' } }, axisBorder: { show: false }, axisTicks: { show: false } };
      this.productsYaxis = { labels: { style: { colors: '#9CA3AF', fontSize: '10px' }, formatter: (v: number) => (v / 1000).toFixed(1) + 'k' } };
      this.productsGrid = { borderColor: gridColor, strokeDashArray: 4, xaxis: { lines: { show: false } } };

      // Revenue: card invertido, então cores da legenda/tooltip também invertidas
      const revenueLabelColor = dark ? '#1F2937' : '#E5E7EB';
      this.revenueTooltip = { theme: dark ? 'dark' : 'light', y: { formatter: (v: number) => 'R$ ' + v.toLocaleString('pt-BR') } };
      this.revenueLegend = { labels: { colors: revenueLabelColor } };
    });
  }

  setTab(tab: string) {
    this.activeTab = tab.toLowerCase();
  }
}
