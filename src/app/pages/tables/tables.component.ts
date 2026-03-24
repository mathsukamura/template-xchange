import { Component } from '@angular/core';

interface TableRow {
  id: string;
  name: string;
  initials: string;
  email: string;
  product: string;
  value: string;
  date: string;
  status: 'Aprovado' | 'Pendente' | 'Cancelado' | 'Reembolsado';
}

@Component({
  selector: 'app-tables',
  imports: [],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.scss'
})
export class TablesComponent {
  rows: TableRow[] = [
    { id: '#4521', name: 'Lucas Ferreira', initials: 'LF', email: 'lucas@email.com', product: 'Método Expert Digital', value: 'R$ 497,00', date: '12 Mar 2025', status: 'Aprovado' },
    { id: '#4522', name: 'Ana Costa', initials: 'AC', email: 'ana@email.com', product: 'Mentoria Premium', value: 'R$ 2.997,00', date: '11 Mar 2025', status: 'Aprovado' },
    { id: '#4523', name: 'Pedro Santos', initials: 'PS', email: 'pedro@email.com', product: 'Pack Templates Pro', value: 'R$ 97,00', date: '10 Mar 2025', status: 'Pendente' },
    { id: '#4524', name: 'Mariana Lima', initials: 'ML', email: 'mari@email.com', product: 'Comunidade VIP', value: 'R$ 49,00', date: '10 Mar 2025', status: 'Aprovado' },
    { id: '#4525', name: 'Rafael Oliveira', initials: 'RO', email: 'rafa@email.com', product: 'E-book Funis de Venda', value: 'R$ 27,00', date: '09 Mar 2025', status: 'Cancelado' },
    { id: '#4526', name: 'Julia Martins', initials: 'JM', email: 'julia@email.com', product: 'Workshop Ao Vivo', value: 'R$ 197,00', date: '08 Mar 2025', status: 'Reembolsado' },
    { id: '#4527', name: 'Carlos Mendes', initials: 'CM', email: 'carlos@email.com', product: 'Método Expert Digital', value: 'R$ 497,00', date: '07 Mar 2025', status: 'Aprovado' },
    { id: '#4528', name: 'Beatriz Rocha', initials: 'BR', email: 'bia@email.com', product: 'Mentoria Premium', value: 'R$ 2.997,00', date: '06 Mar 2025', status: 'Pendente' },
  ];

  getStatusClasses(status: string): string {
    switch (status) {
      case 'Aprovado': return 'bg-green-50 text-green-600';
      case 'Pendente': return 'bg-yellow-50 text-yellow-600';
      case 'Cancelado': return 'bg-red-50 text-red-600';
      case 'Reembolsado': return 'bg-gray-100 text-gray-500';
      default: return 'bg-gray-100 text-gray-500';
    }
  }
}
