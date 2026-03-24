import { Component, ElementRef, viewChild, afterNextRender } from '@angular/core';

@Component({
  selector: 'app-funnel-chart',
  imports: [],
  templateUrl: './funnel-chart.component.html',
  styleUrl: './funnel-chart.component.scss'
})
export class FunnelChartComponent {
  canvasRef = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');

  stages = [
    { label: 'Atrair audiência', value: '10.100' },
    { label: '', value: '6.420' },
    { label: '', value: '6.200' },
    { label: 'Preparar para venda', value: '5.189' },
    { label: '', value: '10.100' },
    { label: 'Vender', value: '10.240' },
  ];

  constructor() {
    afterNextRender(() => this.drawFunnel());
  }

  drawFunnel() {
    const canvas = this.canvasRef().nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;

    // Draw flowing wave gradient
    const gradient = ctx.createLinearGradient(0, 0, w, 0);
    gradient.addColorStop(0, '#C8FF00');
    gradient.addColorStop(0.3, '#7DD87D');
    gradient.addColorStop(0.5, '#3CB4A0');
    gradient.addColorStop(0.7, '#2D9B8A');
    gradient.addColorStop(1, '#1A7A6A');

    ctx.beginPath();
    ctx.moveTo(0, h * 0.6);

    // Wave top
    const points = 6;
    for (let i = 0; i <= points; i++) {
      const x = (w / points) * i;
      const amplitude = h * 0.2;
      const yOffset = Math.sin((i / points) * Math.PI * 2 + 0.5) * amplitude;
      const y = h * 0.35 + yOffset;
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        const cpx = (x + (w / points) * (i - 1)) / 2;
        ctx.quadraticCurveTo(cpx, y - amplitude * 0.5, x, y);
      }
    }

    // Wave bottom
    for (let i = points; i >= 0; i--) {
      const x = (w / points) * i;
      const amplitude = h * 0.15;
      const yOffset = Math.sin((i / points) * Math.PI * 2 + 1) * amplitude;
      const y = h * 0.65 + yOffset;
      const cpx = (x + (w / points) * (i + 1)) / 2;
      ctx.quadraticCurveTo(cpx, y + amplitude * 0.3, x, y);
    }

    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // Add subtle glow overlay
    const glowGradient = ctx.createLinearGradient(0, h * 0.3, 0, h * 0.7);
    glowGradient.addColorStop(0, 'rgba(200, 255, 0, 0.15)');
    glowGradient.addColorStop(0.5, 'rgba(200, 255, 0, 0.05)');
    glowGradient.addColorStop(1, 'rgba(200, 255, 0, 0)');
    ctx.fillStyle = glowGradient;
    ctx.fill();
  }
}
