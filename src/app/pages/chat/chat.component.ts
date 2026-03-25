import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ChatMessage {
  sender: string;
  text: string;
  time: string;
}

interface ChatUser {
  id: string;
  name: string;
  initials: string;
  role: string;
  lastMessage: string;
  messages: ChatMessage[];
}

@Component({
  selector: 'app-chat',
  imports: [FormsModule],
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
      lastMessage: 'Valeu, já recebi a comissão!',
      messages: [
        { sender: 'Lucas', text: 'E aí, como tá o lançamento?', time: '09:15' },
        { sender: 'Você', text: 'Tudo certo, batemos a meta ontem.', time: '09:18' },
        { sender: 'Lucas', text: 'Show! Meus leads converteram bem.', time: '09:20' },
        { sender: 'Você', text: 'Sim, seu tráfego tá excelente.', time: '09:22' },
        { sender: 'Lucas', text: 'Valeu, já recebi a comissão!', time: '09:25' },
      ]
    },
    {
      id: '2', name: 'Ana Costa', initials: 'AC', role: 'Suporte',
      lastMessage: 'Ticket #452 resolvido.',
      messages: [
        { sender: 'Ana', text: 'Tem um ticket pendente pra resolver.', time: '10:00' },
        { sender: 'Você', text: 'Qual o número?', time: '10:02' },
        { sender: 'Ana', text: '#452, problema no checkout.', time: '10:03' },
        { sender: 'Você', text: 'Já corrigi, testa aí.', time: '10:15' },
        { sender: 'Ana', text: 'Ticket #452 resolvido.', time: '10:20' },
      ]
    },
    {
      id: '3', name: 'Pedro Santos', initials: 'PS', role: 'Produtor',
      lastMessage: 'Vou subir o vídeo hoje.',
      messages: [
        { sender: 'Pedro', text: 'Preciso do link da página.', time: '14:00' },
        { sender: 'Você', text: 'Mandei no email, checa lá.', time: '14:05' },
        { sender: 'Pedro', text: 'Vou subir o vídeo hoje.', time: '14:10' },
      ]
    },
    {
      id: '4', name: 'Mariana Lima', initials: 'ML', role: 'Designer',
      lastMessage: 'Criativos prontos!',
      messages: [
        { sender: 'Mariana', text: 'Terminei os banners.', time: '11:30' },
        { sender: 'Você', text: 'Perfeito, manda o link do figma.', time: '11:35' },
        { sender: 'Mariana', text: 'Criativos prontos!', time: '11:40' },
      ]
    },
    {
      id: '5', name: 'Rafael Oliveira', initials: 'RO', role: 'Gestor de tráfego',
      lastMessage: 'CPA caiu 15% essa semana.',
      messages: [
        { sender: 'Rafael', text: 'Relatório de tráfego tá pronto.', time: '16:00' },
        { sender: 'Você', text: 'Como tá o CPA?', time: '16:05' },
        { sender: 'Rafael', text: 'CPA caiu 15% essa semana.', time: '16:08' },
      ]
    },
  ];

  get filteredUsers(): ChatUser[] {
    const q = this.search.toLowerCase().trim();
    if (!q) return this.users;
    return this.users.filter(u => u.name.toLowerCase().includes(q));
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
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
    });
    this.selectedUser.lastMessage = this.newMessage.trim();
    this.newMessage = '';
  }
}
