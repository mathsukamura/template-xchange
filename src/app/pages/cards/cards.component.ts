import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  statsCards = [
    { label: 'Receita total', value: 'R$ 127.400', change: '+18%', up: true },
    { label: 'Vendas do mês', value: '1.842', change: '+12%', up: true },
    { label: 'Ticket médio', value: 'R$ 69,20', change: '-3%', up: false },
    { label: 'Taxa conversão', value: '4,8%', change: '+0,6%', up: true },
  ];

  teamMembers = [
    { name: 'Lucas Ferreira', role: 'Gestor de tráfego', initials: 'LF', status: 'Online' },
    { name: 'Ana Costa', role: 'Suporte ao cliente', initials: 'AC', status: 'Online' },
    { name: 'Pedro Santos', role: 'Produtor de conteúdo', initials: 'PS', status: 'Ausente' },
    { name: 'Mariana Lima', role: 'Designer', initials: 'ML', status: 'Offline' },
  ];

  products = [
    { name: 'Método Expert Digital', category: 'Curso online', price: 'R$ 497', sales: 2340, initials: 'ME' },
    { name: 'Mentoria Premium', category: 'Mentoria', price: 'R$ 2.997', sales: 186, initials: 'MP' },
    { name: 'Pack Templates Pro', category: 'Template', price: 'R$ 97', sales: 4820, initials: 'PT' },
  ];

  activities = [
    { action: 'Nova venda realizada', detail: 'Método Expert Digital - R$ 497', time: '2 min atrás' },
    { action: 'Lead capturado', detail: 'Funil Design Boost Black', time: '8 min atrás' },
    { action: 'Reembolso solicitado', detail: 'Pack Templates Pro - R$ 97', time: '25 min atrás' },
    { action: 'Afiliado aprovado', detail: 'Rafael Oliveira', time: '1h atrás' },
    { action: 'Produto publicado', detail: 'Workshop Ao Vivo', time: '3h atrás' },
  ];

  getStatusColor(status: string): string {
    switch (status) {
      case 'Online': return 'bg-green-400';
      case 'Ausente': return 'bg-yellow-400';
      default: return 'bg-gray-300';
    }
  }
}
