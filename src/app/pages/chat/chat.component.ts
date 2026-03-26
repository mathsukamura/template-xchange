import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Avatar } from '../../components/avatar/avatar';
import { SearchInput } from '../../components/search-input/search-input';

interface ChatMessage {
  sender: string;
  text: string;
  timestamp: string;
}

interface MessageGroup {
  date: string;
  messages: ChatMessage[];
}

interface ChatUser {
  id: string;
  name: string;
  initials: string;
  role: string;
  messages: ChatMessage[];
}

@Component({
  selector: 'app-chat',
  imports: [FormsModule, Avatar, SearchInput],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  search = '';
  newMessage = '';
  selectedUser: ChatUser | null = null;
  mobileShowChat = false;

  users: ChatUser[] = [
    {
      id: '1', name: 'Lucas Ferreira', initials: 'LF', role: 'Afiliado',
      messages: [
        { sender: 'Lucas', text: 'E aí, como tá o lançamento?', timestamp: '2025-03-24T09:15:00' },
        { sender: 'Você', text: 'Tudo certo, batemos a meta ontem.', timestamp: '2025-03-24T09:18:00' },
        { sender: 'Lucas', text: 'Show! Meus leads converteram bem.', timestamp: '2025-03-24T09:20:00' },
        { sender: 'Você', text: 'Sim, seu tráfego tá excelente.', timestamp: '2025-03-24T09:22:00' },
        { sender: 'Lucas', text: 'Valeu, já recebi a comissão!', timestamp: '2025-03-25T10:25:00' },
      ]
    },
    {
      id: '2', name: 'Ana Costa', initials: 'AC', role: 'Suporte',
      messages: [
        { sender: 'Ana', text: 'Tem um ticket pendente pra resolver.', timestamp: '2025-03-24T10:00:00' },
        { sender: 'Você', text: 'Qual o número?', timestamp: '2025-03-24T10:02:00' },
        { sender: 'Ana', text: '#452, problema no checkout.', timestamp: '2025-03-24T10:03:00' },
        { sender: 'Você', text: 'Já corrigi, testa aí.', timestamp: '2025-03-25T10:15:00' },
        { sender: 'Ana', text: 'Ticket #452 resolvido.', timestamp: '2025-03-25T10:20:00' },
      ]
    },
    {
      id: '3', name: 'Pedro Santos', initials: 'PS', role: 'Produtor',
      messages: [
        { sender: 'Pedro', text: 'Preciso do link da página.', timestamp: '2025-03-25T14:00:00' },
        { sender: 'Você', text: 'Mandei no email, checa lá.', timestamp: '2025-03-25T14:05:00' },
        { sender: 'Pedro', text: 'Vou subir o vídeo hoje.', timestamp: '2025-03-25T14:10:00' },
      ]
    },
    {
      id: '4', name: 'Mariana Lima', initials: 'ML', role: 'Designer',
      messages: [
        { sender: 'Mariana', text: 'Terminei os banners.', timestamp: '2025-03-25T11:30:00' },
        { sender: 'Você', text: 'Perfeito, manda o link do figma.', timestamp: '2025-03-25T11:35:00' },
        { sender: 'Mariana', text: 'Criativos prontos!', timestamp: '2025-03-25T11:40:00' },
      ]
    },
    {
      id: '5', name: 'Rafael Oliveira', initials: 'RO', role: 'Gestor de tráfego',
      messages: [
        { sender: 'Rafael', text: 'Relatório de tráfego tá pronto.', timestamp: '2025-03-24T16:00:00' },
        { sender: 'Você', text: 'Como tá o CPA?', timestamp: '2025-03-24T16:05:00' },
        { sender: 'Rafael', text: 'CPA caiu 15% essa semana.', timestamp: '2025-03-25T16:08:00' },
      ]
    },
  ];

  get filteredUsers(): ChatUser[] {
    const q = this.search.toLowerCase().trim();
    if (!q) return this.users;
    return this.users.filter(u => u.name.toLowerCase().includes(q));
  }

  getLastMessage(user: ChatUser): string {
    return user.messages.length ? user.messages[user.messages.length - 1].text : '';
  }

  getLastTime(user: ChatUser): string {
    if (!user.messages.length) return '';
    return this.formatTime(user.messages[user.messages.length - 1].timestamp);
  }

  getGroupedMessages(): MessageGroup[] {
    if (!this.selectedUser) return [];
    const groups: { [date: string]: ChatMessage[] } = {};
    for (const msg of this.selectedUser.messages) {
      const date = this.formatDate(msg.timestamp);
      if (!groups[date]) groups[date] = [];
      groups[date].push(msg);
    }
    return Object.entries(groups).map(([date, messages]) => ({ date, messages }));
  }

  formatDate(timestamp: string): string {
    const date = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) return 'Hoje';
    if (date.toDateString() === yesterday.toDateString()) return 'Ontem';
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
  }

  formatTime(timestamp: string): string {
    return new Date(timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  }

  selectUser(user: ChatUser) {
    this.selectedUser = user;
    this.mobileShowChat = true;
  }

  goBack() {
    this.mobileShowChat = false;
  }

  sendMessage() {
    if (!this.newMessage.trim() || !this.selectedUser) return;
    this.selectedUser.messages.push({
      sender: 'Você',
      text: this.newMessage.trim(),
      timestamp: new Date().toISOString(),
    });
    this.newMessage = '';
  }
}
