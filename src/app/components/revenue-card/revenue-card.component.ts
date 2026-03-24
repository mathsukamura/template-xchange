import { Component, input, ElementRef, viewChild, afterNextRender } from '@angular/core';

@Component({
  selector: 'app-revenue-card',
  imports: [],
  templateUrl: './revenue-card.component.html',
  styleUrl: './revenue-card.component.scss'
})
export class RevenueCardComponent {
  title = input('Produtos vendidos');
  value = input('10.240');
  type = input<'donut' | 'bars'>('bars');
  chartRef = viewChild<ElementRef<HTMLCanvasElement>>('chart');

  constructor() {
    afterNextRender(() => this.draw());
  }

  draw() {
    const el = this.chartRef();
    if (!el) return;
    const canvas = el.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;

    if (this.type() === 'donut') {
      this.drawDonut(ctx, w, h);
    } else {
      this.drawBars(ctx, w, h);
    }
  }

  private drawDonut(ctx: CanvasRenderingContext2D, w: number, h: number) {
    const cx = w / 2;
    const cy = h / 2;
    const radius = Math.min(w, h) / 2 - 8;
    const lineWidth = 10;
    const progress = 0.72;

    // Background ring
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.strokeStyle = '#E5E5E5';
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.stroke();

    // Progress ring
    ctx.beginPath();
    ctx.arc(cx, cy, radius, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * progress);
    ctx.strokeStyle = '#C8FF00';
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.stroke();

    // Center text
    ctx.fillStyle = '#1A1A1A';
    ctx.font = 'bold 14px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('72%', cx, cy);
  }

  private drawBars(ctx: CanvasRenderingContext2D, w: number, h: number) {
    const data = [40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95];
    const maxVal = Math.max(...data);
    const totalBars = data.length;
    const gap = 4;
    const barWidth = (w - (totalBars - 1) * gap) / totalBars;

    data.forEach((val, i) => {
      const barH = (val / maxVal) * (h - 4);
      const x = i * (barWidth + gap);
      const y = h - barH;

      ctx.beginPath();
      ctx.roundRect(x, y, barWidth, barH, 3);
      ctx.fillStyle = i === data.length - 1 ? '#C8FF00' : '#E5E5E5';
      ctx.fill();
    });
  }
}
